describe('the stocks page', () => {
  it('shows the correct default content', () => {
    cy.visit('/');
    cy.contains('Australia');
  });
});
