Setup Flask, SQLAlchemy, and Alembic

Flask - Server
SQLAlchemy - ORM (Use python like syntax to write SQL)
Alembic - Migrations (Set up tables, columns, constainst, drop & create tables)

1. Install dependencies

pipenv install flask python-dotenv sqlalchemy flask-sqlalchemy alembic flask-migrate

2. Create .flaskenv (you can also an .env see Week_18/Day_2)
.
├── app
│   ├── __init__.py
│   └── models.py
└── server.py
├── Pipfile
├── Pipfile.lock

3. in models.py add:

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

4. in app/__init__.py:

from flask import Flask
from flask_migrate import Migrate # <-- Alembic and flask
from app.models import db
import os

#Create our flask server

app = Flask(__name__)

app.config.from_mapping({
    'SQLALCHEMY_DATABASE_URI': os.environ.get("DATABASE_URL"),
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
    'SECRET_KEY': os.environ.get("SECRET_KEY"),
})

db.init_app(app) #<--- Integrate flask and sqlalchemy
Migrate(app, db) #<---- Integrate flask, sqlalchemy, and alembic

5. in server.py:

from app import app

6. Add a Cat model in models.py:

class Cat(db.Model):
    __tablename__ = "cats"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age
        }
    
7. Next, run this command to initialize alembic:

pipenv run flask db init

(You'll know it works if you have a new migrations folder)

8. Create an alembic migration from a model

pipenv run flask db migrate -m "create cats table"

(^^ This command just created migrations now we to run them
so that the tables are made on the db)

9. To migrate the db:

pipenv run flask db upgrade

10. (Optional) Create seeds. Create a file called seeder.py in app
app/seeder.py:
(If you had lots of seeders you could create a seeder folder)

from .models import db, Cat

def seed_cats():

    seed_data = [
        Cat(name="Apples", age=2),
        Cat(name="Greenbean", age=10),
        Cat(name="Cornelius", age=6)
    ]

    db.session.bulk_save_objects(seed_data)
    db.session.commit()
    print("Database seeded!")

11. Create a file to run anytime we need to seed the db
in the root make a seed.py file

from app import app
from app.seeder import seed_cats

with app.app_context():
    seed_cats()


12. Run this command to export your env variable into the terminal

export DATABASE_URL=sqlite:///dev.db

13. Lastly run:
pipenv run python seed.py

14. (MAke some routes dude)