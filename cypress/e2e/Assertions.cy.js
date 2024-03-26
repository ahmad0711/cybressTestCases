

describe("OpenUrl", () => {

    it("checkUrl", () => {

        // Openeing The URL 
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        /* // Check Assertion of Should with equal to 

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Check Assertion of Should with include to 

        cy.url().should("include", "orangehrmlive.com")

        // Check Assertion of Should with Contain to 

         cy.url().should("contain", "orangehrm") */

        // Another Way to 

        /* cy.url().should("include", "orangehrmlive.com")
        .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should("contain", "orangehrm") */

        // Another Way to 

        cy.url().should("include", "orangehrmlive.com")
        .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain", "orangehrm")
        .and("not.contain", "greenhrm") // We Use Not Keyword also

        //  Add Assertion on the element like logo of the side 

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        // Find all the link of the page 

        cy.xpath("//a").should('have.length', "5")
  
    })

    it("login", () => {

        // Openeing The URL 
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       cy.get("input[placeholder='Username']").type("Admin")

       cy.get("input[placeholder='Password']").type("admin123")
       
       cy.get("button[type='submit']").click()
  

    //    Verification of the Login user 

    
    cy.get(".oxd-userdropdown-name").then ( (x) => {
        
        let expName = 'Donal G0reng'
        let actName = x.text()
        
        // with BDD Style 

        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)  // negative Test Case

        // With TDD Style

        assert.equal(aceName,expName)
        assert.notEqual(aceName,expName) // negative Test Case

    })    
    })

} )