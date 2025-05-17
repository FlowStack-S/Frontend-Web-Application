/// <reference types="cypress" />

describe('Gestión de Backlog', () => {
  beforeEach(() => {
    // 1) Intercepta antes de todo
    cy.intercept('GET', 'http://localhost:8090/api/v1/user-stories', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Historia de prueba',
          description: 'Descripción mock',
          status: 'TO_DO',
          sprintId: 0,
          epicId: 0,
          effort: 3
        }
      ]
    }).as('getUserStories');

    cy.intercept('GET', 'http://localhost:8090/api/v1/sprints', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Sprint 1', goal: 'Goal', startDate: '2024-01-01', endDate: '2024-01-10', status: 'FINISHED' }
      ]
    }).as('getSprints');

    // 2) Guarda token en localStorage antes de cargar Angular
    cy.visit('/backlog', {
      onBeforeLoad(win) {
        win.localStorage.setItem('token', 'FAKE_JWT_TOKEN');

        // Opcional: simular una marca de que ya inició sesión
        win.localStorage.setItem('isSignedIn', 'true');
      }
    });

    // 3) Esperar que se hagan las peticiones
    cy.wait('@getUserStories');
    cy.wait('@getSprints');
  });

  it('Debe cargar el backlog correctamente', () => {
    cy.get('[data-cy="product-backlog"]', { timeout: 10000 }).should('exist');
  });
  
});
