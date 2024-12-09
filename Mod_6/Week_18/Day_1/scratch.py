# FLASK - (Similar to Javascripts Express)
# Allows us to create servers in python

# To get started you need to install flask

# pipenv install Flask
# This command will create the virtual env for you^^

# To create a flask server import flask into your server file

# from flask import Flask

# app = Flask(__name__)  Instantiate the server and __name__ will name the server after the file name

# To make endpoints in flask you will:

# Use the @app.route(ROUTE_HERE) decorator

# And then you create a function that you want to run when the route is hit
# Whatever this function returns will be sent back as a response

# To run the flask server all you need to do is run the command flask run
# However, you need env variables for this command to work
# Create a .env or a .flaskenv
# Because you need to tell flask where the server is

# The environment variable that you need is FLASK_APP=filename.py

# we need to install python-dotenv in order to be able to read these env variables

# NODEMON EQUIVALENT FOR FLASK -> add an env variable called FLASK_DEBUG=True

# TO RUN THE SERVER
# OPTION 1: Open the venv and run the command
# pipenv shell (opens the virtual env)
# flask run
# (To exit venv ctrl + d)

# OPTION 2: Run the command from outside the shell
# pipenv run flask run

# To specify a port flask run -p 5001 

# To create an endpoint for requests other than get, add methods into the decorator
#  ex: @app.route('/route', methods=["POST", "PUT", "DELETE", "PATCH"])

# To get the request body out of a request
# There are a few different ways

# from flask import request

# First way to do it:
# request.data -> still in string format so it looks a little weird
# Raw data

# request.json -> take in json data and turn it into a python dict

# To get data out of query strings
# request.args.get("cat_id")

# If you happen to recieve a form you can get the data out of it using:
#  request.form.get("username")

# ROUTE PARAMETERS
# To accept a route parameter put it into angled brackets
# @app.route('/cat/<cat_id>') 
# def update_cat(cat_id):
#     print(cat_id)


# To ensure that a route parameter is of a specific type:
# @app.route('/cat/<int:cat_id>', methods=["POST"])
# def update_cat2(cat_id):
#     print(cat_id)
#     return f"{cat_id}"

# You can make endpoints that will run before and after requests

# @app.before_request

# @app.after_request

# If you want to mess with the response you need to import Response
# from flask


# @app.route('/beep')
# def specify():
#     response = Response('<h1>Hii</h1>')
#     response.headers['Content-Type'] = 'application/json'
#     return response

# Routing

# (Putting routes into seperate files)

# In flask this is called blueprints

# First, create a routes folder and then create files for each slice
# of route

# ex: for your cat routes /routes/cat.py

# inside of each route file from flask import Blueprint

# bp = Blueprint('cats', __name__, url_prefix='/cats') Instantiate a route
# All routes in this file will start with /cats 

# Then create your routes

# @bp.route('/')
# def get_all_cats():
#     return '<h1>All Cats </h1>'

# Lastly import your routes into the server file

# from flask import Flask, request, Response
# # import routes.cats
# from routes import cats

# app = Flask(__name__) 

# # TO USE YOUR ROUTES (BLUEPRINTS)
# app.register_blueprint(cats.bp)

# Sending json is sooooo simple
# from flask import jsonify