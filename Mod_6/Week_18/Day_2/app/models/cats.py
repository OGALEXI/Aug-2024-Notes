from . import db

class Cat(db.Model):
    __tablename__ = "cats" #SUPER COMMON ERROR ZONE

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)

    # Create a method to spit out a dictionary version of the cat
    # JUST FOR OUR CONVENIENCE

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age
        }