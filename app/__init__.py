from flask import Flask
from flask_login import LoginManager

app = Flask(__name__)
app.secret_key = 'JesusIsMyAirbag_DontGetHacked123'  # Set a secret key for sessions

login_manager = LoginManager()
login_manager.init_app(app)

from app import routes

