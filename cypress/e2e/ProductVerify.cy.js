
describe('Product validation', () => {
   
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      beforeEach("open web", ()=> {

        cy.visit("https://waowshoes.myshopify.com/")

        cy.get('#password').type('awesome')

        cy.get('button[type="submit"]').click()

        cy.get(':nth-child(3) > .page-header_nav-link > span').click()

        cy.get(':nth-child(4) > .product-card > .product-card_image > .image-wrap > a > .global-img--fit').click()
        
    })

    it('Selects size and color options', () => {
      // Assert the presence of the size and color dropdown menus
      cy.get("#template--18340749869331__main-0").should('be.visible'); 
  
      cy.get("#template--18340749869331__main-1").should('be.visible');
  
      // Select a size and color from the dropdown menus
      cy.get("#template--18340749869331__main-0").select('Large').should("contain", "Large");
      cy.log('Size Selected to Large')
      cy.get("#template--18340749869331__main-1").select('White').should("contain", "White");
      cy.log('Color Selected to White')
      cy.get('.product_btns-wrapper > .btn').should('be.visible');
      cy.get('.product_btns-wrapper > .btn').click();
      
      cy.get('.header-cart_item-price').invoke('text').then ( (p=> {

        cy.get('.product-detail-block_price > .price > div > .regular-price').invoke('text').then ((a =>{

            let ExpPrice = a.replaceAll(/\s/g,'')
            let Actprice = p.replaceAll(/\s/g,'')
        
            expect(Actprice).to.contain(ExpPrice)

            cy.log('ActPrice Is Match to the ExpPrice')

            // expect(`${Actprice} USD`).to.contain(ExpPrice)


        }))



      }));

    });
  
})