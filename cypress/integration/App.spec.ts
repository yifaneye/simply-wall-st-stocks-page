// end-to-end test
describe('the stocks page', () => {
  it('redirects to the default path and shows the correct default content', () => {
    cy.visit('/');
    cy.url().should('include', '/au'); // Australia
    cy.contains('Australia');
    cy.contains('Market Cap High to Low');
  });

  it('loads the correct data', () => {
    cy.contains('BHP Group');
  });
});

describe('the market dropdown', () => {
  it('can lead to a different market', () => {
    cy.visit('/au');
    cy.get('[data-test-id="market-select"]').click();
    cy.get('[data-test-id="market-option-global"]').click();
    cy.url().should('include', '/global');
    cy.contains('Global');
    cy.contains('Market Cap High to Low');
  });

  it('loads the correct data', () => {
    cy.contains('Apple');
    cy.contains('Microsoft');
  });
});

describe('the sorting dropdown', () => {
  it('defaults to load the correct data (market cap high to low)', () => {
    cy.visit('/au');
    cy.contains('Commonwealth Bank');
    cy.contains('BHP');
  });

  it('can lead to a different sorting strategy', () => {
    cy.get('[data-test-id="sorting-select"]').click();
    cy.get('[data-test-id="sorting-option-asc"]').click();
    cy.url().should('include', '/au');
  });

  it('loads the correct data (market cap low to high)', () => {
    cy.contains('Elanor Commercial Property Fund');
    cy.contains('DDH1');
  });
});

describe('the pagination', () => {
  it('goes to the correct page', () => {
    cy.visit('/au?p=2'); // directly go to the second page using URL
    cy.contains('Insurance Australia Group');
    cy.contains('Suncorp Group');
  });

  it('shows correct links to other pages', () => {
    cy.visit('/au?p=2'); // directly go to the second page using URL
    cy.get('[data-test-id="pagination"][href="?p=1"]').first().click();
    cy.url().should('include', '/au?p=1');
  });
});
