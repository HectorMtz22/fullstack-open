# 0.4 New Note Diagram

Create a similar diagram depicting the situation where the user creates a new note on the page 
[https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes) 
by writing something into the text field and clicking the submit button.

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user ->> browser: Write note
    user ->> browser: Click on submit
    activate browser

    browser ->> server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server -->> browser: Status: 302 Response: /exampleapp/notes
    deactivate server

    browser ->> server: GET: https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server ->> browser: HTML document
    deactivate server

    browser ->> server: GET:  https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -->> browser: CSS Styles
    deactivate server

    browser ->> server: GET: https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server -->> browser: JS File
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    browser ->> server: GET  https://studies.cs.helsinki.fi/exampleapp/data.json

    activate server
    server -->> browser: [{"content": "", "date": ""}, ...]
    deactivate server

    browser -->> user: Re-render page
    deactivate browser

```
