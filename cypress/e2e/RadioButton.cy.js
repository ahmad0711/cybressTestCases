/// <reference types="Cypress" />

describe ( "Check Ui", ()=>  {

    it( "Check Radio", ()=> {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Check Radio Button Visible or not 

       /* cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")
        
        // Select Radio Button 

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should("not.be.checked")  // one time only one button is selected 

        // UnSelect the Check Button 

        cy.get("input#monday").check().should('be.checked')
        cy.get("input#monday").uncheck().should('not.be.checked') */


        // Selecting all the Checked box 

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // If Select First and LAst Check Box only
        
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
        
 
    })

}) 