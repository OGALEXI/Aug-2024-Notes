from flask import Flask, request, Response, jsonify
# import routes.cats
from routes import cats

app = Flask(__name__) 

# TO USE YOUR ROUTES (BLUEPRINTS)
app.register_blueprint(cats.bp)

@app.route('/') #THIS IS A GET REQUEST TO /
def home():
    return '<h1>Home Page </h1>'

@app.route('/langing-page')
def landing_page():
    return '<h1>Landing Page </h1>'

# To handle a post request

@app.route('/create-cat', methods=['POST'])
def create_cat():
    # print(request.data)
    print(request.json)
    cat = request.json
    print(cat['name'])
    return "Hi"

# To accept route parameters

@app.route('/cat/<cat_id>') 
def update_cat(cat_id):
    print(cat_id)
    return cat_id

# To ensure that a route parameter is of a specific type:
@app.route('/cat/<int:cat_id>', methods=["POST"])
def update_cat2(cat_id):
    print(cat_id)
    return f"{cat_id}"

@app.before_request
def say_hi():
    print("hiiiii")

@app.after_request
def say_bye(response):
    print("byeeeee")
    return response


# Specify headers

@app.route('/beep')
def specify():
    response = Response('<h1>Hii</h1>')
    response.headers['Content-Type'] = 'application/json'
    return response

# SENDING JSON

@app.route('/demo-guy')
def demo_guy():
    cat = {'name': "King", 'age': 13}

    return jsonify(cat)

@app.route('/create-cat2', methods=["POST"])
def create_cat2():
    cat = request.json #Grab the request body and turn it into a dict

    print(cat)

    cat['id'] = 123

    return jsonify(cat)