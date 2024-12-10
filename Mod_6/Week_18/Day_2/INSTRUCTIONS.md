# FLASK WITH SQLALCHEMY

# Flask allows us to create servers in python

1. The first thing that we have to do is install dependencies

# pipenv install flask sqlalchemy flask-sqlalchemy python-dotenv 

2. Setup the file structure

├── .env  <-- other env variables
├── .flaskenv <-- Flask env variables
├── app
│   ├── __init__.py   <--- Server
│   ├── config.py   <-- Configurate your server with sqlalchemy
│   └── routes  <-- Routes 
        └── cats.py <-- cat routes
│   └── models   
        └── cats.py <-- Cat Model 
└── server.py    <-- Tells flask where to find the server
└── database.py    <-- Setup script for our database


3. Next, let's fill out the env and the flaskenv

# IN THE FLASK ENV:

FLASK_APP=server.py
FLASK_DEBUG=True

# IN THE ENV:

FLASK_ENV=development
SECRET_KEY=beepboop
DATABASE_URL=sqlite:///dev.db

# In config.py:

import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

4. Now let's create the bare bones for our flask server in app/__init__.py

from flask import Flask
from .config import Config


# CREATE OUR FLASK SERVER
app = Flask(__name__)
# Configurate your server with the env variables
app.config.from_object(Config)

5. JUST TO TEST THAT THE SERVER IS SET UP CORRECTLY ADD A ROUTE into __init__.py

@app.route('/')
def home():
    return '<h1>Hiii</h1>'


6. Import the app into server.py because the env thinks the server is in there
# in server.py:

from app import app


7. To run the server:

# Option 1:
pipenv run flask run

-- To specify a port: pipenv run flask run -p 5004

# Option 2:

pipenv shell
flask run
-- flask run -p 8003

## PHASE TWO - Adding routes

8. Create a blueprint in app/routes/cats.py 

from flask import Blueprint

bp = Blueprint("cats", __name__, url_prefix="/cats")

@bp.route('/') 
def cats():
    return '<h1>Cats!</h1>'

9. Import the blueprint into our server (__init__.py) to connect it 
__init__.py:

from flask import Flask
from .config import Config
from .routes import cats

app = Flask(__name__)

app.config.from_object(Config)


app.register_blueprint(cats.bp)

@app.route('/')
def home():
    return '<h1>Hiii</h1>'

10. NOW SQLALCHEMY: Let's create a Cat Model in models/cats.py