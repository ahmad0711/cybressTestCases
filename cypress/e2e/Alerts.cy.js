describe("Alters", ()=> {

    it("JsAlert", ()=> {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()

        // Alert Window automatically closed by cypress

        cy.on('Window:alert', (t)=> {
            expect(t).to.contains("have.text", "I am a JS Alert") // Verifying Alert Text
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })

    it('ConfirmationAlert', ()=> {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()  // Again Cypress Automatically Handle Alter with Ok Button and close alert window

        cy.on('Window:confirm', (c)=> {
            expect(c).to.contains("have.text", "I am a JS Confirm") // Verifying Alert Text
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')


    })

    it('ConfirmationAlert - Cancel', ()=> {  // If we can Execute only One It Block of the file We are use Only keyword

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()  // Cypress Automatically Handle Alter with Ok Button and close alert window but can't do with Ok 

        cy.on('window:confirm', (c)=> {
            expect(c).to.contains("I am a JS Confirm") // Verifying Alert Text
        })

        // we are use This line of code to cancal the alert 

        cy.on('window:confirm', ()=> false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('PromptAlert', ()=> {  // If we can Execute only One It Block of the file We are use Only keyword

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome'); // Before Opening This Window We are control on it
        })

        cy.get("button[onclick='jsPrompt()']").click()
        

    })
    
    it.only("Authenticated Alert", ()=> {

        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: 
       
        {
            username: 'admin', 
            password: "admin"
        }
    
    })

    cy.get("div[class='example'] p").should('have.contain',"Congratulations")

    // Another Way to Do same thing Shortest Way

    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    cy.get("div[class='example'] p").should('have.contain',"Congratulations")


    })


})