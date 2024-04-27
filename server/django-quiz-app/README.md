# Django Quiz
### Introduction
Project support is open source API that allow to create test and questions
### Project Support Features
* Create test and questions
### Installation Guide
* Clone this repository [here](https://github.com/raihannurhidayat/Project-PAK-QUIZ.git).
* The master branch is the most stable branch at any given time, ensure you're working from it.
* Run `pip install requirements.txt` in a virtual environtment to install all dependancies
* Create an .env file in your project root folder and add your variables.
### Usage
* Run python manage.py runserver to start the api.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | test/:test_id | To retrieve a test detail with its questions |
| POST | test/create/ | To create a new test |
| POST | test/:test_id/update | To edit the detail of a test |
| DELETE | test/:test_id/delete | To delete a test |
| POST | test/:test_id/questions/add/ | To add questions to a test |
### Technologies Used
* [Django](https://www.djangoproject.com/) Django is a high-level Python web framework used for backend
### Authors
* [raihannurhidayat](https://github.com/raihannurhidayat)
* [severusDude](https://github.com/severusDude)
### License
This project is available for use under the MIT License.