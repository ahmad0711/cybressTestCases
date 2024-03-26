
describe('suite name', () => {


    it('test1', () => {
      
        cy.visit("www.google.com")
        cy.title().should('eq', 'Google')

    })

    it('test2', () => {
      
        cy.visit("www.google.com")
        cy.title().should('eq', 'google')

    })
  

  }
  )