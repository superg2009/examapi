#!/bin/bash

export FLASK_APP=src/app.py
pipenv shell
gunicorn -b 0.0.0.0:5000 wsgi:app
