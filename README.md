# Feefo - Exercises

## Exercise 2

They are in `ui-assessment-master` folder.

![Preview-Screens](https://i.imgur.com/ps6kti1.png)
  
## Exercise 3

  

1. High Level Design

The notes app will consist of three main components:

  

- User Interface (UI): A web interface for the user to interact with notes, including areas for typing new notes, viewing existing notes, and deleting notes.

- Backend Server: A web server that handles client requests, manages note storage and retrieval, and provides a RESTful API for communication between the user interface and the database.

- Database: A database to store users' notes.

  

2. Web Application UI

The wireframe design should include:

  

A text area for the user to enter a new note.

A "Save" button to save the entered note.

A list of saved notes, with the ability to delete each note individually.

Validation: Check for empty input before saving the note.

3. Data Model

A note can be modeled with the following properties:

  

ID: Unique identifier of the note.

Content: The text of the note itself.

Creation Date: Date and time the note was created.

Last Updated: Date and time the note was last updated.

4. RESTful API

The RESTful API must include the following HTTP endpoints and methods:

  

GET /notes: Retrieves the list of all user notes.

POST /notes: Creates a new note.

DELETE /notes/{noteId}: Deletes a specific note with the given ID.

5. Web Server

The web server will implement the business logic to handle each API endpoint:

  

For GET /notes, the server will fetch all notes associated with the currently logged in user and return them.

For POST /notes, the server will receive the new note from the client and save it in the database associated with the currently logged in user.

For DELETE /notes/{noteId}, the server will identify the note to be deleted based on the ID provided and remove it from the database.

Notes can be saved in the database, associated with the user ID that is currently logged into the session.

This approach provides a basic framework to implement the notes application as per the given requirements.