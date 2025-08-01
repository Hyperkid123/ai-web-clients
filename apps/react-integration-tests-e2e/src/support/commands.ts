/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      login(email: string, password: string): Chainable<void>;
      withinPfChatbot(cb: () => void): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (email: string, password: string): void => {
  console.log('Custom command example: Login', email, password);
});

Cypress.Commands.add('withinPfChatbot', (cb) => {
  cy.get('#react-patternfly-chatbot').within(() => {
    cb();
  });
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Need to export something to make this module
export {};
