import { cy } from 'local-cypress';

describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="homePageTitle"]').should('be.visible');
    cy.get('[data-cy="homePageLink"]').should('be.visible');
    cy.get('[data-cy="portfolioPageLink"]').should('be.visible');
    cy.get('[data-cy="contactPageLink"]').should('be.visible');

    cy.get('[data-cy="aboutPageLink"]').should('be.visible').click();
    cy.url().should('include', '/about');
    cy.get('[data-cy="pageTitle"]').contains('About');

    cy.get('[data-cy="portfolioPageLink"]').should('be.visible').click();
    cy.url().should('include', '/portfolio');
    cy.get('[data-cy="pageTitle"]').contains('Portfolio');

    cy.get('[data-cy="contactPageLink"]').should('be.visible').click();
    cy.url().should('include', '/contact');
    cy.get('[data-cy="pageTitle"]').contains('Contact');
  });
});
