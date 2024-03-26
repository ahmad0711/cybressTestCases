import 'cypress-iframe';

describe('Iframe', ()=> {

    it('Approach1', ()=> {
    
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
    
        iframe.clear().type('Welcome {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
    })


    it('Approach2 by using Custom Cmd', ()=> {
    
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.getIframe('#mce_0_ifr')
        .clear().type('Your Test is working Cool {enter} By Ahmad Chaudhry {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
    })

    it.only('Approach3 by using Plugin', ()=> {
    
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded('#mce_0_ifr') // Loads the Frame Work 
        cy.iframe('#mce_0_ifr').clear().type('Your Test is working Cool {enter} By Ahmad Chaudhry {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
    })
})