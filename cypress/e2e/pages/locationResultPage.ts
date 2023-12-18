class locationResultPage {

   //This Function should use variables at some point 
   checkResult(){
    cy.get('.foncia-card').each(($card) => {
      // Extract and verify the price
      const priceText = $card.find('.foncia-card-price').text();
      const price = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.'));
      expect(price).to.be.lessThan(1500);
    
      // Verify the location
      const location = $card.find('.foncia-card-place').text();
      expect(location).to.include('PARIS');
    });
  }

  }

  export default new locationResultPage();


