from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cat(db.Model):
    __tablename__ = "cats"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age
        }
    
