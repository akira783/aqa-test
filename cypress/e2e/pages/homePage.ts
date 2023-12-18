class homePage {


  //These elements should have unique IDs such as "data-cy" or "data-test-id"
    elements ={
        projectBtn : () => cy.get('#projectToggle'),
        propertyTypeBtn : () => cy.get('#propertyToggle'),
        maxPriceInput : () => cy.get('#price'),
        locationInput : () => cy.get('[placeholder="Où cherchez vous ?"]').first(),
        searchBtn : () => cy.get('.button > :nth-child(2) > .p-button'),
        }

    //set type of project
    setProjectType(ProjectType) {
      this.elements.projectBtn().click();
      cy.get(`input[type="radio"][value="${ProjectType}"]`).check({force: true});
    }

    //set type of property
    setPropertyType(PropertyType) {
      this.elements.propertyTypeBtn().click();
      cy.get(`input[type="checkbox"][value="${PropertyType}"]`).check({force: true});
    }

   //Set max pricing
    setMaxPrice(price) {
      this.elements.maxPriceInput().clear().type(price);
    }

    //Set search location
    setLocation(city) {
      this.elements.locationInput().type(city);
      //select first prediction result 
      cy.get('#pr_id_7_list')
      .find('li[role="option"]')
      .first()
      .click();
    }

    //Launch search
    search() {
      this.elements.searchBtn().click();
    }

    //Search for text and check it's visibility is on
    shouldBeVisible(text){
      cy.contains(`${text}`).should('be.visible')
    }


  }

  export default new homePage();