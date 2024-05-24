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
