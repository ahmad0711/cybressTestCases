describe('Responsive design', () => {
    beforeEach(() => {
      cy.visit('https://www.vertical-leap.uk/blog/9-reasons-website-doesnt-work-mobile/')
    })
  
    it('should look good on mobile', () => {
      cy.viewport('iphone-6')
      // Check that elements are visible and in the correct position
    })
  
    it('should look good on tablet', () => {
      cy.viewport('ipad-2')
      // Check that elements are visible and in the correct position
    })
  
    it('should look good on desktop', () => {
      cy.viewport(1920, 1080)
      // Check that elements are visible and in the correct position
    })
  })
  