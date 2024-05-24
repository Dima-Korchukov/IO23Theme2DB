from flask import Flask, request, jsonify
from config import Config
from models import db, User

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

# Прапорець, щоб переконатися, що функція create_tables викликається лише один раз
tables_created = False

def create_tables():
    # Перевірити, чи таблиці не були створені
    global tables_created
    if not tables_created:
        # Створити всі таблиці бази даних
        db.create_all()
        tables_created = True

# Викликати функцію create_tables перед першим запитом
@app.before_request
def call_create_tables():
    create_tables()

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        USER_email=data['USER_email'],
        USER_name=data['USER_name'],
        USER_login=data['USER_login'],
        USER_password=data['USER_password']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created"}), 201

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify({
        "idUSER": user.idUSER,
        "USER_email": user.USER_email,
        "USER_name": user.USER_name,
        "USER_login": user.USER_login,
        "USER_password": user.USER_password
    })

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get_or_404(id)
    data = request.get_json()
    user.USER_email = data['USER_email']
    user.USER_name = data['USER_name']
    user.USER_login = data['USER_login']
    user.USER_password = data['USER_password']
    db.session.commit()
    return jsonify({"message": "User updated"}), 200

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted"}), 200

@app.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_data = []
    for user in users:
        user_data = {
            "idUSER": user.idUSER,
            "USER_email": user.USER_email,
            "USER_name": user.USER_name,
            "USER_login": user.USER_login,
            "USER_password": user.USER_password
        }
        users_data.append(user_data)
    return jsonify(users_data)

@app.route('/users/<int:id>', methods=['PATCH'])
def partial_update_user(id):
    user = User.query.get_or_404(id)
    data = request.get_json()
    if 'USER_email' in data:
        user.USER_email = data['USER_email']
    if 'USER_name' in data:
        user.USER_name = data['USER_name']
    if 'USER_login' in data:
        user.USER_login = data['USER_login']
    if 'USER_password' in data:
        user.USER_password = data['USER_password']
    db.session.commit()
    return jsonify({"message": "User updated partially"}), 200

if __name__ == '__main__':
    app.run(debug=True)
