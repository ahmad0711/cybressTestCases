describe('DropDown', () => {

    it.skip("CheckDD", () => {                        // .skip it block work as comment Now the block of it Not Execute 

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select('Italy')
        .should('have.value', 'Italy')              // to Verifying Capture Right Value or Not  

    })

    it.skip("DropDown Without Select", ()=> {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Pakistan').type('{enter}')

        cy.get('#select2-billing_country-container').click().should('have.text', 'Pakistan' )   // to Verifying Capture Right Value or Not

    })

    // How to use Auto Suggest DropDown 

    it.skip('AutoSelect', () => {

        cy.visit("http://www.wikipedia.org/")

        cy.get('#searchInput').type('Lahore')

        cy.get('.suggestion-title').contains('Lahore Qalandars').click()
          
    })

    // Dynamic DropDown 

    it('Dynamic DropDown ', () => {

        cy.visit("http://www.google.com/")

        cy.get('input[name="q"]').type('Lahore')

        cy.wait(3000)  // increase the time of executions

        cy.get('div.wM6W7d>span').should('have.length',11)

        cy.get('div.wM6W7d>span').each( ($el, index, $list ) =>{

            if($el.text()=='Lahore Qalandars')
            {
                cy.wrap($el).click()
            }

        })  
        
        cy.get("input[name='q']").should('have.value', 'lahore qalandars')
    })

})

