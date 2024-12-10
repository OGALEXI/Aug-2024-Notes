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
        └── __init__.py <-- Store our db object for sqlalchemy
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

10. NOW SQLALCHEMY: Create a db object in models/__init__.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


11. Inside of models/cats.py create a cat model make sure to import db from init

# models/cats.py:

from . import db

class Cat(db.Model):
    __tablename__ = "cats" 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)

    # Create a method to spit out a dictionary version of the cat
    # JUST FOR OUR CONVENIENCE

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age
        }


12. Import the db object from model/init into our flask server /app/__init__.py
# app/__init__.py should now look like this:

from flask import Flask
from .config import Config
from .routes import cats #Routes
from .models import db #db object


app = Flask(__name__)

app.config.from_object(Config)

app.register_blueprint(cats.bp)

db.init_app(app) #Connect server with db object


@app.route('/')
def home():
    return '<h1>Hiii</h1>'


13. CREATE OUR DATABASE 
We need to tell SQLAlchemy to create a sqlitedb with our cat table
we are going to create our setup script in database.py
# in database.py:

from app import app, db

from app.models.cats import Cat

with app.app_context():
    db.drop_all() #Drop all tables
    db.create_all() #Create all tables

    #Optional: You can seed some cats

    cat1 = Cat(name="Greenbean", age=2)
    cat2 = Cat(name="Kilo", age=1)
    cat3 = Cat(name="Baxter", age=7)

    #Add the seed cats into the db

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)

    # Commit the db changes (saving the changes in the db)
    db.session.commit()


14. Run database.py:
# In the terminal
pipenv shell
python database.py

15. CREATE SOME ROUTESSSSSS
# See routes/cats.py