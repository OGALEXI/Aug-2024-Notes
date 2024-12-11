from .models import db, Cat

#Create a function to seed the db

def seed_cats():

    #Create a bunch of cats in an array

    seed_data = [
        Cat(name="Apples", age=2),
        Cat(name="Greenbean", age=10),
        Cat(name="Cornelius", age=6)
    ]

    #Bulk insert seeds into db
    db.session.bulk_save_objects(seed_data)

    #Commit the changes to the db
    db.session.commit()
    print("Database seeded!")