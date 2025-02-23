from flask import Flask, Response, jsonify, render_template
import cv2
import numpy as np
import tensorflow as tf
import mediapipe as mp
import random
from flask_cors import CORS
import modules.holistic_module as hm
from modules.utils import Vector_Normalization

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # CORS 설정

# 기본 루트 페이지
@app.route('/')
def index():
    return "Flask 서버가 실행 중입니다!"

# favicon 요청 방지
@app.route('/favicon.ico')
def favicon():
    return "", 204  # No Content

# 설정
actions = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
            'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ',
            'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅢ', 'ㅚ', 'ㅟ']
seq_length = 10

# 모델 및 MediaPipe 초기화
detector = hm.HolisticDetector(min_detection_confidence=0.3)
interpreter = tf.lite.Interpreter(model_path="models/multi_hand_gesture_classifier.tflite")
interpreter.allocate_tensors()

# 입력 및 출력 정보
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

seq = []
action_seq = []
last_action = None
current_question = None
game_result = None

# 비디오 스트리밍 처리
def process_frame():
    global seq, action_seq, last_action, game_result
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("카메라를 열 수 없습니다!")
        return
    
    while cap.isOpened():
        ret, img = cap.read()
        if not ret:
            print("프레임을 읽을 수 없습니다!")
            break

        img = cv2.flip(img, 1)  # 좌우 반전

        # Holistic 모델을 사용하여 손 및 얼굴저 추적
        results = detector.findHolistic(img, draw=True)  # results를 반환받음
        # results = detector.findHolistic(img, draw=True, image_dimensions=(img.shape[1], img.shape[0]))


        # results가 numpy.ndarray일 경우
        if isinstance(results, np.ndarray):
            img = results  # 이미지를 그대로 할당
            right_hand_lmList = None  # right_hand_landmarks를 찾을 수 없음
        else:
            img = results  # img는 결과 이미지로 할당
            right_hand_lmList = results.right_hand_landmarks  # right_hand_landmarks는 results 객체에서 가져옴

        if right_hand_lmList is not None:
            joint = np.zeros((42, 2))
            for j, lm in enumerate(right_hand_lmList.landmark):
                joint[j] = [lm.x, lm.y]
            
            vector, angle_label = Vector_Normalization(joint)
            d = np.concatenate([vector.flatten(), angle_label.flatten()])

            seq.append(d)

            if len(seq) < seq_length:
                continue

            # 모델 입력 데이터 준비
            input_data = np.expand_dims(np.array(seq[-seq_length:], dtype=np.float32), axis=0)
            interpreter.set_tensor(input_details[0]['index'], input_data)
            interpreter.invoke()
            
            # 예측 결과 가져오기
            y_pred = interpreter.get_tensor(output_details[0]['index'])
            i_pred = int(np.argmax(y_pred))
            conf = y_pred[0][i_pred]

            # 예측 확신도가 90% 이상일 경우 동작 인식
            if conf > 0.9:
                action = actions[i_pred]
                action_seq.append(action)

            if len(action_seq) < 3:
                continue

            # 연속된 동작이 같으면 게임 결과 판단
            if action_seq[-1] == action_seq[-2] == action_seq[-3]:
                this_action = action
                if last_action != this_action:
                    last_action = this_action

                    # 게임 결과 판단
                    if current_question is not None:
                        if this_action == current_question:
                            game_result = "정답입니다!"
                        else:
                            game_result = "틀렸습니다!"

        # 프레임 반환
        _, buffer = cv2.imencode('.jpg', img)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()

# 비디오 스트리밍을 위한 엔드포인트
@app.route('/video_feed')
def video_feed():
    try:
        return Response(process_frame(), mimetype='multipart/x-mixed-replace; boundary=frame')
    except Exception as e:
        print("Error in video_feed:", e)
        return Response("Error streaming video", status=500)


# 게임 상태 가져오기
@app.route('/get_game_info', methods=['GET'])
def get_game_info():
    return jsonify({
        'last_action': last_action,
        'game_result': game_result
    })

# 문제 가져오기
@app.route('/get_question', methods=['GET'])
def get_question():
    global current_question, game_result
    current_question = random.choice(actions)
    game_result = None
    return jsonify({"question": current_question})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
