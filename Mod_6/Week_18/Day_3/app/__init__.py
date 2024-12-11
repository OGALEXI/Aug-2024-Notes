from flask import Flask, jsonify, request
from flask_migrate import Migrate # <-- Alembic and flask
from app.models import db, Cat
import os

#Create our flask server

app = Flask(__name__)

app.config.from_mapping({
    'SQLALCHEMY_DATABASE_URI': os.environ.get('DATABASE_URL'),
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})

db.init_app(app) #<--- Integrate flask and sqlalchemy
Migrate(app, db) #<---- Integrate flask, sqlalchemy, and alembic

#GET ALL CATS

@app.route('/', methods=["GET"])
def cats():
    all_cats = db.session.query(Cat)


    if all_cats:
        result = []

        for cat in all_cats:
            result.append(cat.to_dict())
        
        return jsonify(result)
    
    return jsonify({ 'msg': 'No cats bruv'})


#CREATE A CAT
@app.route('/', methods=["POST"])
def create_cat():
    cat = request.json

    #Use the Cat model to create a new cat
    #new_cat = Cat(name=cat['name'], age=cat['age']) # LONGER WAY
    new_cat = Cat(**cat) #  <-- Spreading the cat object into Cat model

    #Add cat to db
    db.session.add(new_cat)

    #Save db changes
    db.session.commit()

    return jsonify(new_cat.to_dict())


# UPDATE CAT
@app.route('/<cat_id>', methods=["PATCH"])
def update_cat(cat_id):

    #Query the db to find the cat we want to update
    #.get(cat_id) is looking for the primary key
    cat = db.session.query(Cat).get(cat_id)

    if cat:
        if 'name' in request.json:
            cat.name = request.json['name']
        if 'age' in request.json:
            cat.age = request.json['age']

        #Save this change in the db
        db.session.commit()

        #Send back the updated cat
        return jsonify(cat.to_dict())
    
    return jsonify({ 'msg': 'Cat not found'})


#DELETE A CAT
@app.route('/<cat_id>', methods=["DELETE"])
def delete_cat(cat_id):
    cat = db.session.query(Cat).get(cat_id)

    if cat:
        db.session.delete(cat)
        db.session.commit()
        return jsonify({ 'msg': 'Cat successfully deleted.'})

    return jsonify({ 'msg': 'Cat not found'})