describe("products page test", () => {
  it("test the logics of every products render on the screen", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(500);
    cy.get("[data-testid='container-products'] > div").each(
      (elem: JQuery<HTMLElement>) => {
        const id = elem.attr("id");
        cy.changeColorBadge(id);
        const p = cy.get("input[type=radio]");
      }
    );
  });
});
