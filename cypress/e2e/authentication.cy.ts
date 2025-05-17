/// <reference types="cypress" />

describe('Autenticación', () => {
  it('Debe mostrar el formulario de inicio de sesión', () => {
    cy.visit('/sign-in');
    cy.get('input[formcontrolname="username"]').should('exist');
    cy.get('input[formcontrolname="password"]').should('exist');
  });

  it('Debe iniciar sesión con credenciales válidas', () => {
    cy.visit('/sign-in');
    cy.get('input[formcontrolname="username"]').type('admin');
    cy.get('input[formcontrolname="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/sign-in');
  });

  it('Debe fallar con credenciales inválidas', () => {
    cy.visit('/sign-in');
    cy.get('input[formcontrolname="username"]').type('fake');
    cy.get('input[formcontrolname="password"]').type('wrong');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/sign-in');
  });
});
