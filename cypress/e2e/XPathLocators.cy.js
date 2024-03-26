
describe("XPathLocators", ()  => {

    it.skip("AlphaRages", () => {        // .skip it block work as comment Now the block of it Not Execute 

        cy.visit("www.alpharages.com")

        cy.xpath("//ul[@id='navs']/li").should('have.length',4) 

    })
    
    // Another Way of Xpath 

    it("AlphaRages", () => {

        cy.visit("www.alpharages.com")

        cy.xpath("//ul[@id='navs']").xpath("./li").should('have.length',4) 

    })
})