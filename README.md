Interview Scheduler

Scheduler is a single-page interview-scheduling application made with React.

Tech Stack
React with Webpack for front-end Axios to communicate with server Storybook, Jest, and Cypress for testing

Dependencies

Testing with Cypress requires a global Cypress install (npm install -g cypress).

Setup

Install dependencies with npm install.

Running Webpack Development Server

npm start
Running Storybook Visual Testbed

npm run storybook
Running Jest Test Framework

npm test
Running test server for Cypress

npm run test:server
Running Cypress Test Framework

A local PG test database with access credentials stored in an .env.test file in the root of scheduler-api is required to run the test.

i create two test database create.sql and test.sql files in the scheduler-api/src/db/schema folder.

Run scheduler-api in test mode as npm run test:server Run the tests with npm run cypress from the scheduler directory.

Running Cypress Test Framework

A local PG test database with access credentials stored in an .env.test file in the root of scheduler-api is required to run the test.

i create a database with the create.sql and test.sql files in the scheduler-api/src/db/schema folder. Run scheduler-api in test mode as npm run test:server Run the tests with npm run cypress from the scheduler directory.

## Final Product

!["Screenshot of the main page"]()

!["screenshot of the register page"](https://github.com/ammaralhaddad/tinyapp/blob/master/docs/register-page.png)
