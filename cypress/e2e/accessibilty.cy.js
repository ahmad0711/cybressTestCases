
describe('Accessibility test', () => {



    it('Should check accessibility of the webpage', () => {

        cy.visit('www.google.com')

      cy.injectAxe();
      cy.checkA11y();

    });


  });
  