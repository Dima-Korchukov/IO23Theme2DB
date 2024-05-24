import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1234@localhost/your_database_name'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

