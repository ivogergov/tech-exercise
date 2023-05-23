describe('Testing UI', () => {

  const url = 'http://localhost:3000'

  it('Makes a Screenshot', () => {
    cy.visit(url)
    cy.screenshot()
  })

  it('Shoule have a title', () => {
    cy.visit(url)
    cy.title().should('include', 'Financial Times')
  });

  it('Should have few cards', () => {
    cy.visit(url)
    cy.get('.card').should('have.length.greaterThan', 1)
  });

  it('Should have one card when open single stock', () => {
    cy.visit(`${url}/AAPL`)
    cy.get('.card').should('have.length', 1)
    cy.screenshot()
  });

  it('Should match the snapshot', () => {
    cy.visit(`${url}/`)
    cy.get('body').snapshot()
  });

  it('Should match the snapshot of single stock', () => {
    cy.visit(`${url}/AAPL`)
    cy.get('body').snapshot()
  });
})