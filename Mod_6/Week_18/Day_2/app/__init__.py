from flask import Flask
from .config import Config
from .routes import cats


# CREATE OUR FLASK SERVER
app = Flask(__name__)
# Configurate your server with the env variables
app.config.from_object(Config)

# Connect our cat routes to our server
app.register_blueprint(cats.bp)

@app.route('/')
def home():
    return '<h1>Hiii</h1>'

