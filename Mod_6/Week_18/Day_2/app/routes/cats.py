from flask import Blueprint, jsonify, request
from ..models import db
from ..models.cats import Cat

bp = Blueprint("cats", __name__, url_prefix="/cats")

#GET ALL CATS
@bp.route('/', methods=["GET"]) #/cats/
def cats():
    #Use the db to query for all the cats
    all_cats = db.session.query(Cat)

    #Create a string to add <p> tags for each cat
    result_list = []

    #Iterate through the cats and add them to the string
    for cat in all_cats:
        new_cat = cat.to_dict()
        result_list.append(new_cat)

    return jsonify(result_list)


#CREATE A CAT
@bp.route('/', methods=["POST"])
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
@bp.route('/<cat_id>', methods=["PATCH"])
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
@bp.route('/<cat_id>', methods=["DELETE"])
def delete_cat(cat_id):
    cat = db.session.query(Cat).get(cat_id)

    if cat:
        db.session.delete(cat)
        db.session.commit()
        return jsonify({ 'msg': 'Cat successfully deleted.'})

    return jsonify({ 'msg': 'Cat not found'})