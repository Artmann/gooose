describe('Sign In', () => {
  it('allows a user to sign in using email and password', () => {
    cy.server();
    cy.route({
      delay: 50,
      method: 'POST',
      url: '**/sessions',
      response: {
        session: {
          token: '123'
        }
      }
    });

    cy.visit('/sign-in');

    cy.contains('Welcome Back 😊');

    cy.get('input[data-testid="sign-in-form-email"]').type('test@email.com');
    cy.get('input[data-testid="sign-in-form-password"]').type('password');
    cy.get('button[data-testid="sign-in-form-submit"]').click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/`);
  });
});
