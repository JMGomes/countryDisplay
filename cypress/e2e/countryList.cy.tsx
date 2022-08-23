// @ts-ignore
describe('country list', () => {
  it('should navigate correctly', () => {
    cy.visit('localhost:3000');

    cy.contains('Afghanistan');

    cy.get('a[href*="/country/AFG"]').click();

    cy.url().should('include', '/country/AFG');

    cy.contains('Kabul');

    cy.get('a[href*="/country/CHN"]').click();

    cy.url().should('include', '/country/CHN');

    cy.contains('Beijing');
  })
})