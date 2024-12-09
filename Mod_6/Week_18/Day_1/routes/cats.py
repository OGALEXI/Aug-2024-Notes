from flask import Blueprint

bp = Blueprint('cats', __name__, url_prefix='/cats')
# All routes in this file will start with /cats

@bp.route('/')
def get_all_cats():
    return '<h1>All Cats </h1>'

