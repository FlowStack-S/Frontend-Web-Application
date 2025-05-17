/// <reference types="cypress" />

describe('Validación de rutas', () => {
  it('Redirige a sign-in si no está autenticado', () => {
    cy.visit('/backlog');
    cy.url().should('include', '/sign-in');
  });

  it('Ruta no válida muestra página 404', () => {
    cy.visit('/ruta-inexistente', { failOnStatusCode: false });
    cy.contains('Página No Encontrada').should('exist');
  });
});
