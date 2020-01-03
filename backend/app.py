import os
import datetime
import json
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from calendar_utils.calocr import generate_umn_classes, UMNClass
try:
    from PIL import Image
except ImportError:
    import Image

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


def allowed_file(filename):
    """ Checks the allowed file extensions """
    ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


#### Regular routes ####


@app.route('/')
def index():
    return render_template('index.html', token='yeet')


#### API routes ####


@app.route('/api/upload', methods=['POST'])
def upload_endpoint():
    # Check if there is a file in the request
    if 'file' not in request.files:
        return jsonify(exception='No file selected')
    image = request.files['file']

    # If no file is selected
    if image and image.filename == '':
        return jsonify(exception='No file selected')

    # Ensure the image has the allowable filetypes
    if image and allowed_file(image.filename):
        # Get the classes in the image
        classes = generate_umn_classes(img=Image.open(image),
                                       start_date=datetime.date(year=2020, month=1, day=21),
                                       end_date=datetime.date(year=2020, month=5, day=4))
        # Change each class into a json serializeable dictionary
        classes.sort(key=lambda c: c.name)
        classes = [c.serialize() for c in classes]
        # Return the json response of the classes in an array
        return json.dumps(classes)
    else:
        return jsonify(exception='File type not allowed')


@app.route('/api/events', methods=['POST'])
def events_endpoint():
    classes = json.loads(request.data)
    # Put the days of of the week back into an array
    for c in classes:
        c['days_of_week'] = c['days_of_week'].split(', ')
    classes = [UMNClass(**c).to_gcal_event() for c in classes]
    return json.dumps(classes)


if __name__ == '__main__':
    app.run(debug=True)
