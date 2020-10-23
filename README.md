### Mars Rover Dashboard

This project consumes a developer API provided by NASA. API key is stored in a '.env' file which is ignored by git.

## Required -

Project has been broken into two repos;
Backend: `https://github.com/Urmatemugly/MarsRoverBE.git`
Frontend: `https://github.com/Urmatemugly/MarsRoverFE.git`

## To open the project

You'll need to run a server for each client and server sides of this application.

The client server (React) runs on `http://localhost:3000 `
to start navigate terminal inside 'Frontend' directory and type the command:  `npm start`

In another terminal window, inside the 'Backend' directory, type the command: `node server.js` or `nodemon server.js` if the nodemon package is installed.

## What does it do?

The project forms part of the 'Intermedia Javascript Nanodegree' offered by Udacity, www.udacity.com. Included in this directory is the project rubric by which it'll be marked.

## Goals:

User clicks name of rover
Express queries NASA API + returns data to client
React (client) displays rubirc-required data


## Component Structure;

`App />`  instantiates Datapanel component

`Datapanel />`  **stateful** The data panel is where I'm storing my state variables, this component also sends props to Button component. HTML elements are updated in render dependent on state.

`Button />`   **dumb** depending on props provided, displays three buttons
