// end-to-end test
describe('the stocks page', () => {
  it('shows the correct default content', () => {
    cy.visit('/');
    cy.contains('Australia');
    cy.contains('Market Cap High to Low');
  });

  it('loads the correct data', () => {
    cy.contains('BHP Group');
  });
});
