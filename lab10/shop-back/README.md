# Shop Back

Django REST API for the Angular Online Store app from Lab 5, refactored across multiple DRF view styles.

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

4. Load sample data:

```powershell
python manage.py loaddata api/fixtures/sample_data.json
```

5. Start the server:

```powershell
python manage.py runserver
```

## API endpoints

- `/api/products/`
- `/api/products/<int:product_id>/`
- `/api/categories/`
- `/api/categories/<int:category_id>/`
- `/api/categories/<int:category_id>/products/`

## View Levels

- Level 2 FBV: [api/views/fbv.py](c:\Users\user\Desktop\webdev\lab10\shop-back\api\views\fbv.py)
- Level 3 CBV: [api/views/cbv.py](c:\Users\user\Desktop\webdev\lab10\shop-back\api\views\cbv.py)
- Level 4 Mixins: [api/views/mixins.py](c:\Users\user\Desktop\webdev\lab10\shop-back\api\views\mixins.py)
- Level 5 Generics: [api/views/generics.py](c:\Users\user\Desktop\webdev\lab10\shop-back\api\views\generics.py)

The active implementation is selected in [api/views/__init__.py](c:\Users\user\Desktop\webdev\lab10\shop-back\api\views\__init__.py). It currently uses the Level 5 generics version.

## Admin credentials

- username: `admin`
- password: `admin12345`
