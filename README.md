# Veer-AI-Submission

This project includes a Django backend alongside a React frontend.

## Installation

These instructions assume that PostgreSQL is already set up on the machine as well as Node, NPM, and Python 3.8.

### Backend (Django component)

First, clone the repo and navigate to the Veer-AI-Submission folder on your machine using terminal.
```bash
git clone [repo-link]
```
Now, you will have to create a virtual environment (recommended) in order to isolate the module installation. For MacOS and Linux, the commands are:
```bash
python -m pip install virtualenv
virtualenv env
source env/bin/activate
```
For Windows:
```bash
python -m pip install virtualenv
virtualenv env
env\Source\activate
```

Now, you must install the required modules for the Django application. With the virtual environment activated, navigate to the directory containing the requirements.txt file and type.
```bash
python -m pip install -r requirements.txt
```
This should install all required modules onto your machine for the backend. If the psycopg2 module failed to install, try to install the psycopg2-binary module.

### Frontend (React component)

Navigate to the client folder, and type:
```bash
npm i
```
This will install all the required node modules to the machine.

## Usage
In order to run the Django application, navigate to the directory containing manage.py and type the following commands while the virual environment is actiavted.
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

This should start the Django server.

In order to run the React application, navigate to the client folder and type:
```bash
npm start
```

This will start the React application and a browser window should automatically pop up. If now, go to localhost:3000.

Now you will be able to use the application.

