describe('FixtureData', ()=> {

    // Add jason a file in the fixture folder 

    // pass user name and password through jason file 

    /* it('openSite', ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm').then( (data)=> {

        cy.get("input[placeholder='Username']").type(data.username)

        cy.get("input[placeholder='Password']").type(data.password)

        cy.get("button[type='submit']").click()

    
    })

    }) */

    // Use another method to pass data with Hook (before, afterEach, beforeEach, after)

    let userdata;
    
    before( ()=> {

        cy.fixture('orangehrm').then( (data)=> {
            userdata=data;
        })
    })

    it('openSite', ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type(userdata.username)

        cy.get("input[placeholder='Password']").type(userdata.password)

        cy.get("button[type='submit']").click()

    
    })



})