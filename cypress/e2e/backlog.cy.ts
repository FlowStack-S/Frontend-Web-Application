/// <reference types="cypress" />

describe('Gestión de Backlog', () => {
  beforeEach(() => {
    // Asume que hay un token de sesión guardado (simulación)
    window.localStorage.setItem('token', 'FAKE_JWT_TOKEN');
    cy.visit('/backlog');
  });

  it('Debe cargar el backlog correctamente', () => {
    cy.contains('Product Backlog').should('exist');
  });

  it('Debe permitir crear una historia de usuario', () => {
    cy.contains('Agregar Historia').click();
    cy.get('input[name="title"]').type('Historia de prueba');
    cy.get('textarea[name="description"]').type('Descripción de prueba');
    cy.contains('Guardar').click();
    cy.contains('Historia de prueba').should('exist');
  });
});
