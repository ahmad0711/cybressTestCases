describe("Handle Tab", ()=> {

    it('Approach', ()=> {

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get('.example >a').invoke('removeAttr', 'target').click() //invoke is remove Target attribute and open window in the same tage 

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        
        cy.go('back')


    })

})