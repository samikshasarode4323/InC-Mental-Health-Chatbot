from flask import Flask
from flask_restful import Resource, Api
from transformers import pipeline
import os

app = Flask(__name__)
api = Api(app)

os.environ['TRANSFORMERS_OFFLINE']='1'

class HelloWorld(Resource):
    def get(self):
        return {'about': 'Hello world'}
    def post(self):
        return {'about': 'Hello world with post'}

class EmotionDetector(Resource):
    def get(self, text):

        emotion = pipeline('sentiment-analysis', 
                    model='arpanghoshal/EmoRoBERTa')
        emotion_labels = emotion(text)
        print(emotion_labels)
        output_emotion = emotion_labels[0]['label']
        output_score = emotion_labels[0]['score']

        flag=0

        return {'alert':flag}

api.add_resource(HelloWorld, '/')
api.add_resource(EmotionDetector, '/emotiondetector/<string:text>')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)
