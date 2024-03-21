# Pet Travail Check
Preview:

https://github.com/lawcha/adn-govtech-2024/assets/71696298/13c99c1e-81d3-464e-9562-d41bfe844e17

## How to execute the app
### Dependencies
 - Docker (https://docs.docker.com/desktop/install/windows-install/)
 - Node.JS + npm (https://nodejs.org/en/download/)
### Start the application
Do to the following to run the backend and frontend services (in two separated terminals).
#### Backend service
1. Execute Docker Desktop
2. In a terminal, run `docker run --publish 8080:8080 fastapi` to start the Backend
#### Frontend service
1. In a terminal (new one), execute the command `cd hackaton-frontend` to go in the folder "hackaton-frontend" and then `npm install` to install the dependencies for runnig the frontend
2. Once frontend dependencies installed, run `ng serve` (still in the folder "hackaton-frontend")
