from flask import Flask, render_template
from app import app, login_manager
from app.vSphere_data_parser import *
from flask_login import login_user, logout_user, login_required, current_user, UserMixin, LoginManager
from flask import render_template, redirect, url_for, request

class User(UserMixin):
    def __init__(self, username):
        self.username = username

    def get_id(self):
        return self.username

# Hardcoded username and password
USERNAME = 'admin'
PASSWORD = 'Superuser1!'

@login_manager.user_loader
def load_user(user_id):
    return User(user_id) if user_id == USERNAME else None

@app.route('/', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == USERNAME and password == PASSWORD:
            # Log in the user
            user = User(username)  # Create a user object
            login_user(user)  # Pass the user object to login_user function
            return redirect(url_for('index'))
        else:
            error = 'Invalid credentials. Please try again.'
    return render_template('login.html', error=error)

@app.route('/home', methods=['GET', 'POST'])
@login_required
def index():
    return render_template('index.html')

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/host')
@login_required
def host():
    # Parse XML and get data
    vm_hosts = parse_host_data()  # List of dictionaries containing host data

    return render_template('host.html', vm_hosts=vm_hosts)

@app.route('/vm')
@login_required
def vm():
    # Parse XML and get data
    vm_info = parse_vm_data()  # List of dictionaries containing host data

    return render_template('virtual_machines.html', vm_info=vm_info)

@app.route('/about')
@login_required
def about():
    return render_template('about.html')

@app.route('/other')
@login_required
def other():
    vm_hosts = parse_host_data()
    return render_template('other.html', vm_hosts=vm_hosts)

# Custom unauthorized handler
@login_manager.unauthorized_handler
def unauthorized():
    return render_template('unauthorized_401.html'), 401

# Custom notfound handler
@app.errorhandler(404)
def not_found_error(error):
    return render_template('notfound_404.html'), 404

