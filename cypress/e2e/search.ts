import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./pages/homePage.js"
import locationResultPage from "./pages/locationResultPage.js"

//--------------------------------------------------
// With Parameters through Step definition
//--------------------------------------------------

Given("I am on home page", () => {
  cy.visit("/");
  cy.url().should('eq', 'https://fr.foncia.com/'); //Check URL
  cy.contains('Restons vigilants contre les tentatives de fraudes').should('be.visible'); //Check anti-fraud warning 
  cy.get('.p-button-white > .pi').click(); // close anti-fraud warning 
  cy.get('.cookie-cta-accept > .p-button').should('be.visible').click(); //Accept CTA
});

When("I set property type to {string}",(propertyType: string) => {
  homePage.setPropertyType(propertyType);
});

When("I set project location to {string}",(city: string) => {
  homePage.setLocation(city);
});

When("I set maximum price to {string}",(maxPrice: string) => {
  homePage.setMaxPrice(maxPrice);
});

When("I set project type to {string}",(projectType: string) => {
  homePage.setProjectType(projectType);
});
  
When("I launch the research",() => {
  homePage.search();
});

When("I check result",() => {
  locationResultPage.checkResult();
});

//This function should be in commons
Then("I should see {string}", (text) =>{
  homePage.shouldBeVisible(text);
})

//--------------------------------------------------
// With JSon File
//--------------------------------------------------

//Load Data from JSon located in fixture folder
Given('I load the test data from JSON', () => {
  cy.fixture('data.json').as('testData');
});

//Visit homepage + Check and close Fraude warning message + accept CTA 
When('I visit the home page', () => {
  cy.visit("/");
  cy.url().should('eq', 'https://fr.foncia.com/'); //Check URL
  cy.contains('Restons vigilants contre les tentatives de fraudes').should('be.visible'); //Check anti-fraud warning 
  cy.get('.p-button-white > .pi').click(); // close anti-fraud warning 
  cy.get('.cookie-cta-accept > .p-button').should('be.visible').click(); //Accept CTA
});

Then('I perform a search for each set of criteria', function () {
  cy.get('@testData').then((testData: any) => {
    testData.searchCriteria.forEach(criteria => {
      const { price, location, type, propertyType } = criteria; 
      homePage.setPropertyType(propertyType);
      homePage.setProjectType(type);
      homePage.setLocation(location);
      homePage.setMaxPrice(price);
      homePage.search();
      homePage.shouldBeVisible("LOCATION APPARTEMENT PARIS (75) À LOUER"); //should be replaced 
      locationResultPage.checkResult();
    });
  });
});


