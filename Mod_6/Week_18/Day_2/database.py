from app import app, db

from app.models.cats import Cat

with app.app_context():
    db.drop_all() #Drop all tables
    db.create_all() #Create all tables

    #Optional: You can seed some cats

    cat1 = Cat(name="Greenbean", age=2)
    cat2 = Cat(name="Kilo", age=1)
    cat3 = Cat(name="Baxter", age=7)

    #Add the seed cats into the db

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)

    # Commit the db changes (saving the changes in the db)
    db.session.commit()

