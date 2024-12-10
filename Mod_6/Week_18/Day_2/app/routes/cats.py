from flask import Blueprint

bp = Blueprint("cats", __name__, url_prefix="/cats")

@bp.route('/') #/cats/
def cats():
    return '<h1>Cats!</h1>'

