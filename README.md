# Cypress Automated Testing with Cucumber and Mochawesome - README

This repository provides an automated testing setup using Cypress with Cucumber for behavior-driven development (BDD) and Mochawesome for generating beautiful HTML test reports. It's designed for QA Engineers looking to implement a comprehensive testing framework in their web projects.

## Features

-   **Cypress**: For end-to-end browser testing.
-   **Cucumber Preprocessor**: Allows writing Cypress tests in Gherkin syntax.
-   **Mochawesome**: Generates stylish HTML and JSON reports for test results.
-   **Custom Scripts**: Facilitates the generation of test reports and merging JSON files.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   Node.js and npm (Node.js package manager)
-   Your preferred text editor or IDE

## Installation

1.  **Clone the Repository**
        
    `git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name` 
    
2.  **Install Dependencies**
        
    `npm install` 
    

## Configuration

### Cypress Configuration

-   The Cypress configuration is set in `cypress.config.ts`. This TypeScript file contains the setup for running Cypress tests.

### Cucumber with Cypress

-   Cucumber tests are written in `.feature` files located in the `cypress/integration` directory.
-   Step definitions for the feature files are in `cypress/support/step_definitions`.

### Mochawesome Report Configuration

-   Mochawesome configurations are in `cypress.config.ts` and `package.json`.

## Running Tests

To run Cypress tests and generate reports:

1.  **Run Cypress Tests**
    
    bashCopy code
    
    `npm run cy:run` 
    
    This will execute the Cypress tests in headless mode.
    
2.  **Generate Reports** After the tests are complete, generate the HTML reports:
    
    bashCopy code
    
    `npm run cy:report` 
    
    This script will:
    
    -   Merge individual JSON reports into one.
    -   Generate an HTML report from the merged JSON.

## Test Data and Parameters

-   Test data is managed using JSON files or directly into step definition. This allows parameterization and running multiple iterations of the same test with different data sets.
-   Update `homePage.ts` to include functions for setting test parameters dynamically.

## Scripts Explanation

-   `cy:run`: Runs Cypress tests.
-   `posttest`: Script that runs after tests to merge JSON reports.
-   `merge-reports`: Merges individual JSON reports into one combined report.
-   `generate-report`: Generates an HTML report from the combined JSON file.
-   `cy:report`: A combination of running tests and generating the report.

## Troubleshooting

-   If the HTML report is not generated, check individual script execution, JSON report generation, and console logs for errors.
-   Ensure all file paths in scripts match your project structure.
-   Verify that all required dependencies are installed and updated.
