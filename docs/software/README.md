# Реалізація інформаційного та програмного забезпечення
## SQL-скрипт для створення та початкового наповнення бази даних
```SQL
	-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
  `idPermission` INT NOT NULL,
  `Post` TINYINT NULL,
  `Comment` TINYINT NULL,
  `Edit` TINYINT NULL,
  `Delete` TINYINT NULL,
  PRIMARY KEY (`idPermission`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `RoleName` VARCHAR(45) NULL,
  `Permission_idPermission` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idRole`, `Permission_idPermission`),
  UNIQUE INDEX `idRole_UNIQUE` (`idRole` ASC) VISIBLE,
  INDEX `fk_Role_Permission_idx` (`Permission_idPermission` ASC) VISIBLE,
  INDEX `fk_Role_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Role_Permission`
    FOREIGN KEY (`Permission_idPermission`)
    REFERENCES `mydb`.`Permission` (`idPermission`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Role_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Tag` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Tag` (
  `idTag` INT NOT NULL,
  `TagName` VARCHAR(45) NULL,
  PRIMARY KEY (`idTag`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Data` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Data` (
  `idData` INT NOT NULL,
  `Date` DATETIME NULL,
  `DataName` VARCHAR(45) NULL,
  `DataFormat` VARCHAR(45) NULL,
  `Tag_idTag` INT NOT NULL,
  PRIMARY KEY (`idData`),
  INDEX `fk_Data_Tag1_idx` (`Tag_idTag` ASC) VISIBLE,
  CONSTRAINT `fk_Data_Tag1`
    FOREIGN KEY (`Tag_idTag`)
    REFERENCES `mydb`.`Tag` (`idTag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Comment` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (
  `CommentText` TEXT NOT NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `Data_idData`),
  INDEX `fk_Comment_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Comment_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `idRequest` INT NOT NULL,
  `Type` VARCHAR(45) NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`idRequest`, `User_idUser`, `Data_idData`),
  INDEX `fk_Request_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Request_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mydb`.`User` (`password`, `login`, `username`, `email`)
VALUES
('password123', 'login1', 'user1', 'user1@example.com'),
('password456', 'login2', 'user2', 'user2@example.com'),
('password789', 'login3', 'user3', 'user3@example.com');

INSERT INTO `mydb`.`Permission` (`idPermission`, `Post`, `Comment`, `Edit`, `Delete`)
VALUES
(1, 1, 1, 1, 1),
(2, 1, 1, 0, 0),
(3, 0, 0, 0, 0);

INSERT INTO `mydb`.`Role` (`RoleName`, `Permission_idPermission`, `User_idUser`)
VALUES
('Admin', 1, 1),
('User', 2, 2),
('Guest', 3, 3);

INSERT INTO `mydb`.`Tag` (`idTag`, `TagName`)
VALUES
(1, 'Technology'),
(2, 'Science'),
(3, 'Art');

INSERT INTO `mydb`.`Data` (`idData`, `Date`, `DataName`, `DataFormat`, `Tag_idTag`)
VALUES
(1, '2023-01-01 12:00:00', 'Data1', 'PDF', 1),
(2, '2023-01-02 12:00:00', 'Data2', 'DOC', 2),
(3, '2023-01-03 12:00:00', 'Data3', 'TXT', 3);

INSERT INTO `mydb`.`Comment` (`CommentText`, `User_idUser`, `Data_idData`)
VALUES
('This is a comment from user1 on data1', 1, 1),
('This is a comment from user2 on data2', 2, 2),
('This is a comment from user3 on data3', 3, 3);

INSERT INTO `mydb`.`Request` (`idRequest`, `Type`, `User_idUser`, `Data_idData`)
VALUES
(1, 'Access', 1, 1),
(2, 'Edit', 2, 2),
(3, 'Delete', 3, 3);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
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




