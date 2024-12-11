from app import app
from app.seeder import seed_cats

with app.app_context(): #<--- gives us access to flask, sqlalchemy, alembic
    seed_cats()