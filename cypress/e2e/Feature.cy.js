describe('feature', () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      beforeEach("open web", ()=> {

        cy.visit("https://waowshoes.myshopify.com/")

        cy.get('#password').type('awesome')

        cy.get('button[type="submit"]').click()
        
    })

    it('product', ()=> {

        cy.get('div[class="product-section_wrapper "]').should("have.length", "5")
    })

    it('singleProduct', ()=> {

        cy.get(':nth-child(3) > .page-header_nav-link > span').click()

        cy.get(':nth-child(6) > .product-card > .product-card_image > .image-wrap > a > .global-img--fit').click()


    })





   /* it.skip('moto', ()=> {
        
        cy.visit("https://motto-qa.myshopify.com/")


        cy.get('#password').type('@lpha')

        cy.get('button[type="submit"]').click()

        cy.get('div[class="product-section_wrapper "]').should("have.length", "2")
    })

    it.skip('moto2', ()=> {
        
        cy.visit("https://motto-qa.myshopify.com/")

        cy.get('#password').type('@lpha')

        cy.get('button[type="submit"]').click()

        cy.get("summary[class='page-header_nav-link global-link menu-item active'] >span").click()

        cy.get("div[id='MenuItem-2-Submenu'] summary[role='button']").click()

        cy.get("body > div:nth-child(1) > section:nth-child(3) > header:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > details:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > details:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").click()

        cy.get("span[class='badge badge--placement-bottom']").should("have.length", "5")

    }) */


})