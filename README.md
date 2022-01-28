# Intro
In this exercise you need to complete 2 small assignments that will help us understand your capabilities to structure a testing project and your risk analysis skills. \
:wrench: You can create a git project of your own, or email back to HR a .zip file of your work. \
:white_check_mark: You can use your preferred tools/framework/coding language. \
:boom: Ideally, triggereing the tests should be done via commmand line. \
:book: Document your instructions to setup and execute the tests. \
:alarm_clock: Suite not complete after 1-2 hours? That’s OK. Document some notes/plans of what your intentions are, or what’s missing/TODO.

## Assignment 1 - Test project (Backend)
This is the business scenario: As a company we need to test well our API infrastructure. You have been assigned to create a testing project that validates the feature offered by those APIs. \
You can choose the technology stack you prefer but due to internal limitation this is the preferred stack:
* programming language: `Scala` (or Java as an alternative)
* tests definition: `Cucumber`
* automation environment: `Gitlab`
* Api documentation: `OpenApi` 

You can find the OpenApi definition of the 3 API to test in the `Assignment1` folder. In the same folder you can find an npm mock server you can use to visualise the definition and to run some fake requests against.
* go to the stub folder `nodejs-server-server-generated` 
* install NPM
* run the stub server with `node index.js` or `npm start` depending on your `node` version
* to read the documentation you can access http://localhost:8080/docs
* you can also call the stub server with your test project to have it mocked: 
  ```
  curl -X 'GET' \
  'http://localhost:8080/portfolio' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer fakeToken'
  ```

Notes:
* We don't need the complete definition of the pipeline but a general description on how you would execute and automate the testing.
* The company needs to test the functionality exposed by this set of APIs, not the contract itself for this project, the OpenApi contract is there only to document the functionalities
* Try to come up with as much cucumber scenarios as you can to validate the described feature

Documents needed to complete the assignment:
* one or more feature file containing all the scenarios
* a description of the automation used to execute the project
* a description of the project structure and used packages 
* how you would have improved it if you had more time?
* a README file with instructions on how to run the project successfully if the code is complete or how we could run it if it would have been.

## Assignment 2 - Existing feature file
In this assignment you'll only need to fix the existing feature file and adapt it correctly to the OpenApi specification in `Assignment1` folder. You can find the feature file to fix in `Assignment2` folder

Documents needed to complete the assignment:
* feature file containing the correct cucumber definition