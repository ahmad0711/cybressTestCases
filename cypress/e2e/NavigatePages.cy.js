describe('NavigatePage', ()=> {

    it('Navigate', ()=> {

        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')

        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('h2').should('have.text', 'Cameras')

        cy.go("back") // go back command is used to go Back HomePage
        cy.title().should('eq', 'Your Store')

        cy.go('forward') // Go forward is use to again on page Cameras
        cy.get('h2').should('have.text', 'Cameras')

        cy.go(-1) // it will again back to the Homepage
        cy.title().should('eq', 'Your Store')

        cy.go(1) // it will again go to the Cameras Pages
        cy.get('h2').should('have.text', 'Cameras')

        cy.reload(); // for reload the page

    })

})