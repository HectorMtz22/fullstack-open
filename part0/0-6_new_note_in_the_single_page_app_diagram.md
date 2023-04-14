# New Note in the Single Page App

Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.



```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user ->> browser: Write on the input
    user ->> browser: Click on the submit button

    activate browser

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server -->> browser: Status 201: Response: {"message":"note created"}
    deactivate server

    Note right of browser: Clear input and Re-render page (ul element)

    browser -->> user: Re-render
    deactivate browser
```