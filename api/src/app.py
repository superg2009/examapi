from flask import Flask,jsonify,request,send_from_directory
from flask_cors import CORS
from src.examscrap import get_schedule
import os

#ohh this is such a hack i hate it
path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))),'client/build')

app = Flask(__name__,static_folder=path,static_url_path='')
cors = CORS(app)

@app.route('/')
@app.route('/index')
def index():
    print(app.static_folder)
    return send_from_directory(app.static_folder,'index.html')

@app.route('/api/schedule', methods=['GET'])
def return_schedule():
    return jsonify(get_schedule())

if __name__ == "__main__":
    app.run(host='0.0.0.0')