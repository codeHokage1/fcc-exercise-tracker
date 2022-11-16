# Exercise Tracker

This is a project done in completion of my Backend & API development course on FreeCodeCamp. It allows for new users to be added and several tasks to be added/recorded for the corresponding user(s).

Link to live API :link: : https://fcc-exercise-tracker-nine.vercel.app/

```
GET / 
// displays the homepage


GET /api/users
// returns all users available in the database


POST /api/users
body: {
  "username": "Farhan"
}
// creates a new user and returns a json that response that includes the _id


POST /api/users/:_id/exercises
body: {
  "_id": "xxxxx12345",
  "description": "Exercise 1 Done",
  "duration": 10
}
// creates a new exercise for the user with corresponding _id and returns a json that response that includes the usernname and other response props


GET /api/users/:_id/logs?[from][&to][&limit]
// with only /logs; returns all exercises for the user with corresponding _id
// returns all exercies for the user with corresponding _id while filtering the result according to the values of the optional from, to, and/or limit
```
