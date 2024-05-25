# Реалізація інформаційного та програмного забезпечення
## SQL-скрипт для створення та початкового наповнення бази даних
```SQL
-- Створення бази даних
CREATE DATABASE my_database;
USE my_database;

-- Створення таблиці USER
CREATE TABLE USER (
    idUSER INT PRIMARY KEY AUTO_INCREMENT,
    USER_email VARCHAR(45) NOT NULL,
    USER_name VARCHAR(45) NOT NULL,
    USER_login VARCHAR(45) NOT NULL,
    USER_password VARCHAR(45) NOT NULL
);

-- Створення таблиці ADMIN
CREATE TABLE ADMIN (
    idADMIN INT PRIMARY KEY AUTO_INCREMENT,
    USER_idUSER INT,
    FOREIGN KEY (USER_idUSER) REFERENCES USER(idUSER)
);

-- Створення таблиці REQUEST
CREATE TABLE REQUEST (
    idREQUEST INT PRIMARY KEY AUTO_INCREMENT,
    REQUEST_type INT NOT NULL,
    REQUEST_message VARCHAR(1000) NOT NULL,
    USER_idUSER INT,
    ADMIN_idADMIN INT,
    FOREIGN KEY (USER_idUSER) REFERENCES USER(idUSER),
    FOREIGN KEY (ADMIN_idADMIN) REFERENCES ADMIN(idADMIN)
);

-- Створення таблиці DATA
CREATE TABLE DATA (
    idDATA INT PRIMARY KEY AUTO_INCREMENT,
    DATA_name VARCHAR(45) NOT NULL,
    DATA_format VARCHAR(45) NOT NULL,
    DATA_date DATETIME NOT NULL,
    REQUEST_idREQUEST INT,
    FOREIGN KEY (REQUEST_idREQUEST) REFERENCES REQUEST(idREQUEST)
);

-- Створення таблиці COMENT
CREATE TABLE COMENT (
    idCOMENT INT PRIMARY KEY AUTO_INCREMENT,
    COMENT_text VARCHAR(1000) NOT NULL,
    USER_idUSER INT,
    DATA_idDATA INT,
    FOREIGN KEY (USER_idUSER) REFERENCES USER(idUSER),
    FOREIGN KEY (DATA_idDATA) REFERENCES DATA(idDATA)
);

-- Створення таблиці TAG
CREATE TABLE TAG (
    idTAG INT PRIMARY KEY AUTO_INCREMENT,
    TAG_name VARCHAR(1000) NOT NULL
);

-- Створення таблиці DATA_has_TAG
CREATE TABLE DATA_has_TAG (
    DATA_idDATA INT,
    TAG_idTAG INT,
    PRIMARY KEY (DATA_idDATA, TAG_idTAG),
    FOREIGN KEY (DATA_idDATA) REFERENCES DATA(idDATA),
    FOREIGN KEY (TAG_idTAG) REFERENCES TAG(idTAG)
);

-- Створення таблиці DATA_has_ADMIN
CREATE TABLE DATA_has_ADMIN (
    DATA_idDATA INT,
    ADMIN_idADMIN INT,
    PRIMARY KEY (DATA_idDATA, ADMIN_idADMIN),
    FOREIGN KEY (DATA_idDATA) REFERENCES DATA(idDATA),
    FOREIGN KEY (ADMIN_idADMIN) REFERENCES ADMIN(idADMIN)
);

-- Створення таблиці PERMISSION
CREATE TABLE PERMISSION (
    PERMISSION_comm VARCHAR(100),
    PERMISSION_post VARCHAR(100),
    USER_idUSER INT,
    ADMIN_idADMIN INT,
    PRIMARY KEY (USER_idUSER, ADMIN_idADMIN),
    FOREIGN KEY (USER_idUSER) REFERENCES USER(idUSER),
    FOREIGN KEY (ADMIN_idADMIN) REFERENCES ADMIN(idADMIN)
);

-- Додавання даних у таблицю USER
INSERT INTO USER (USER_email, USER_name, USER_login, USER_password) 
VALUES ('user1@example.com', 'User 1', 'user1', 'password123'),
       ('user2@example.com', 'User 2', 'user2', 'password456');

-- Додавання даних у таблицю ADMIN (пов'язані з користувачами з таблиці USER)
INSERT INTO ADMIN (USER_idUSER) VALUES (1), (2);

-- Додавання даних у таблицю REQUEST
INSERT INTO REQUEST (REQUEST_type, REQUEST_message, USER_idUSER, ADMIN_idADMIN) 
VALUES (1, 'Request 1', 1, 1),
       (2, 'Request 2', 2, 1);

-- Додавання даних у таблицю DATA
INSERT INTO DATA (DATA_name, DATA_format, DATA_date, REQUEST_idREQUEST) 
VALUES ('Data 1', 'PDF', '2024-05-24 12:00:00', 1),
       ('Data 2', 'JPEG', '2024-05-25 10:30:00', 2);

-- Додавання даних у таблицю COMENT
INSERT INTO COMENT (COMENT_text, USER_idUSER, DATA_idDATA) 
VALUES ('Comment 1', 1, 1),
       ('Comment 2', 2, 2);

-- Додавання даних у таблицю TAG
INSERT INTO TAG (TAG_name) VALUES ('Tag 1'), ('Tag 2');

-- Додавання даних у таблицю DATA_has_TAG (пов'язує дані з тегами)
INSERT INTO DATA_has_TAG (DATA_idDATA, TAG_idTAG) VALUES (1, 1), (2, 2);

-- Додавання даних у таблицю DATA_has_ADMIN (пов'язує дані з адмінами)
INSERT INTO DATA_has_ADMIN (DATA_idDATA, ADMIN_idADMIN) VALUES (1, 1), (2, 1);

-- Додавання даних у таблицю PERMISSION
INSERT INTO PERMISSION (PERMISSION_comm, PERMISSION_post, USER_idUSER, ADMIN_idADMIN) 
VALUES ('comment', 'post', 1, 1),
       ('comment', 'post', 2, 1);
```
## RESTfull-сервіс
Код серверу (Python, Flask)
### App.py
```python
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
```
### Config.py
```python
import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1234@localhost/my_database'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```
### Models.py
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'USER'
    idUSER = db.Column(db.Integer, primary_key=True, autoincrement=True)
    USER_email = db.Column(db.String(45), nullable=False)
    USER_name = db.Column(db.String(45), nullable=False)
    USER_login = db.Column(db.String(45), nullable=False)
    USER_password = db.Column(db.String(45), nullable=False)

class Admin(db.Model):
    __tablename__ = 'ADMIN'
    idADMIN = db.Column(db.Integer, primary_key=True, autoincrement=True)
    USER_idUSER = db.Column(db.Integer, db.ForeignKey('USER.idUSER'))

class Request(db.Model):
    __tablename__ = 'REQUEST'
    idREQUEST = db.Column(db.Integer, primary_key=True, autoincrement=True)
    REQUEST_type = db.Column(db.Integer, nullable=False)
    REQUEST_message = db.Column(db.String(1000), nullable=False)
    USER_idUSER = db.Column(db.Integer, db.ForeignKey('USER.idUSER'))
    ADMIN_idADMIN = db.Column(db.Integer, db.ForeignKey('ADMIN.idADMIN'))

class Data(db.Model):
    __tablename__ = 'DATA'
    idDATA = db.Column(db.Integer, primary_key=True, autoincrement=True)
    DATA_name = db.Column(db.String(45), nullable=False)
    DATA_format = db.Column(db.String(45), nullable=False)
    DATA_date = db.Column(db.DateTime, nullable=False)
    REQUEST_idREQUEST = db.Column(db.Integer, db.ForeignKey('REQUEST.idREQUEST'))

class Coment(db.Model):
    __tablename__ = 'COMENT'
    idCOMENT = db.Column(db.Integer, primary_key=True, autoincrement=True)
    COMENT_text = db.Column(db.String(1000), nullable=False)
    USER_idUSER = db.Column(db.Integer, db.ForeignKey('USER.idUSER'))
    DATA_idDATA = db.Column(db.Integer, db.ForeignKey('DATA.idDATA'))

class Tag(db.Model):
    __tablename__ = 'TAG'
    idTAG = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TAG_name = db.Column(db.String(1000), nullable=False)

class DataHasTag(db.Model):
    __tablename__ = 'DATA_has_TAG'
    DATA_idDATA = db.Column(db.Integer, db.ForeignKey('DATA.idDATA'), primary_key=True)
    TAG_idTAG = db.Column(db.Integer, db.ForeignKey('TAG.idTAG'), primary_key=True)

class DataHasAdmin(db.Model):
    __tablename__ = 'DATA_has_ADMIN'
    DATA_idDATA = db.Column(db.Integer, db.ForeignKey('DATA.idDATA'), primary_key=True)
    ADMIN_idADMIN = db.Column(db.Integer, db.ForeignKey('ADMIN.idADMIN'), primary_key=True)

class Permission(db.Model):
    __tablename__ = 'PERMISSION'
    PERMISSION_comm = db.Column(db.String(100))
    PERMISSION_post = db.Column(db.String(100))
    USER_idUSER = db.Column(db.Integer, db.ForeignKey('USER.idUSER'), primary_key=True)
    ADMIN_idADMIN = db.Column(db.Integer, db.ForeignKey('ADMIN.idADMIN'), primary_key=True)
```




