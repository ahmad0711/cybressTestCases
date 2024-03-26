import 'cypress-iframe';
require ('@4tw/cypress-drag-drop') 

describe('MouseOperations', ()=> {

    // We are Needs to use trigger by Cypres 

    it('MouseOver', ()=> {

        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
    
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()        

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')

    })    

    it('RightClick', ()=> {

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        // Approach 01 
        
        /* cy.get('.context-menu-one').trigger('contextmenu') 

        cy.get('.context-menu-icon-copy > span').should('be.visible') */

        // Approach 02 
        
        cy.get('.context-menu-one').rightclick()

        cy.get('.context-menu-icon-copy > span').should('be.visible')

         
    })

    it('double Click', ()=> {

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy.frameLoaded('#iframeResult')

        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()

        // Approach 02 

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')


    })

    it('DragNDrop', ()=> {

        // by using Cypres Drag Drop Plugin (We are Needs to install first (npm install --save-dev @4tw/cypress-drag-drop) ) 

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy.get('#box6').drag('#box106',{force:true})
        

    })

    it.only('ScrollPage', ()=> {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1)').scrollIntoView({duration:3000})

        cy.wait(2000)

        cy.get(':nth-child(1) > tbody > :nth-child(102) > :nth-child(1)').scrollIntoView({duration:3000})

        cy.wait(2000)

        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1)').scrollIntoView({duration:3000})

        cy.wait(2000)

        cy.get('#footer').scrollIntoView({duration:3000})


    })





})