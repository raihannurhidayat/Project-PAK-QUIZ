# Django Quiz
### Introduction
Project support is open source API that allow to create test and questions
### Project Support Features
* Create test and questions
* Submit and get test result
### Installation Guide
* Clone this repository [here](https://github.com/raihannurhidayat/Project-PAK-QUIZ.git).
* The master branch is the most stable branch at any given time, ensure you're working from it.
* Run `pip install requirements.txt` in a virtual environtment to install all dependancies
* Create an .env file in your project root folder and add `SECRET_KEY` and `DEBUG` variables.
### Usage
* Run `python manage.py runserver` to start the api.
### API Endpoints
Please see [example.json](https://github.com/raihannurhidayat/Project-PAK-QUIZ/blob/master/server/example.json) for request body format.
| HTTP Verbs | Endpoints               | Authenticate | Action                                       |
| ---------- | ----------------------- | ------------ | -------------------------------------------- |
| GET        | debug/get-test/         | Admin        | Get all tests along with its questions       |
| GET        | debug/get-result/       | Admin        | Get all results                              |
| POST       | test/create/            | User         | To create a new test                         |
| GET        | test/:test_id/          | User         | To retrieve a test detail with its questions |
| UPDATE     | test/:test_id/          | User         | To edit the detail of a test                 |
| DELETE     | test/:test_id/          | User         | To delete a test                             |
| GET        | test/result/:result_id/ | User         | To retrieve a test result detail             |
| POST       | test/result/post/       | User         | To submit a test result                      |
### Technologies Used
* [Django](https://www.djangoproject.com/) Django is a high-level Python web framework used for backend
### Authors
* [raihannurhidayat](https://github.com/raihannurhidayat)
* [severusDude](https://github.com/severusDude)
### License
This project is available for use under the [MIT License](https://github.com/raihannurhidayat/Project-PAK-QUIZ/blob/a6e7dc23f7771ff5d78f5d4736559accd6b2d637/server/django-quiz-app/LICENSE).