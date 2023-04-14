# 0.5 Single Page App Diagram


Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server -->> browser: Status 200: HTML Doc
    deactivate server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -->> browser: Status 200: CSS Styles File
    deactivate server

    browser ->> server: GET  https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server -->> browser: Status 200: JS File
    deactivate server

    Note right of browser: Execute JS File

    browser ->> server: GET /exampleapp/data.json
    activate server
    server -->> browser: JSON File
    deactivate server

    Note right of browser: Render the page
    

```