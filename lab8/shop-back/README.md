# Shop Back

Django backend API for the Angular Online Store app from Lab 5.

## Setup

1. Create and activate the virtual environment:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run migrations:

```powershell
python manage.py makemigrations
python manage.py migrate
```

4. Start the server:

```powershell
python manage.py runserver
```

## API endpoints

- `/api/products/`
- `/api/products/<int:id>/`
- `/api/categories/`
- `/api/categories/<int:id>/`
- `/api/categories/<int:id>/products/`
