from flask import Flask,jsonify,request
from src.examscrap import get_schedule

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return "Hello World"

@app.route('/api/schedule', methods=['GET'])
def return_schedule():
    return jsonify(get_schedule())

if __name__ == "__main__":
    app.run(host='0.0.0.0')