/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    changeColorBadge(
      selector: string | undefined,
      ...options: any
    ): Chainable<JQuery<HTMLElement>>;
  }
}

//Function that controls the color change of the badge
Cypress.Commands.add("changeColorBadge", (index) => {
  cy.get(`[data-testid='badgeColoursGroup-${index}'] > div`).each(
    (elem: JQuery<HTMLElement>) => {
      cy.wrap(elem).click();
      const color = elem.attr("data-color");
      cy.get(`[data-testid='badge-${index}']`).should(
        "have.attr",
        "data-color",
        `${color}`
      );
    }
  );
});
