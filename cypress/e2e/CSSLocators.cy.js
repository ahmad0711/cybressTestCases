

describe('CSSLocators', () => {

    it("cssLocators", () => {

        cy.visit("www.google.com")

        cy.get("[name='q']").type("AlphaRages")

        cy.get('.gNO89b').eq(0).click()

        cy.get("VuuXrf").click()
         
        // console.log(a)

        // cy.get('[name="btnK"]').click()

    })
})