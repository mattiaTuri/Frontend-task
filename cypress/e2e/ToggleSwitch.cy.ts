describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input[type='radio']").each((elem: JQuery<HTMLElement>) => {
      cy.wrap(elem).check();
      cy.get("input[type='radio']:not(:checked)").each(
        (elem: JQuery<HTMLElement>) => {
          const id = elem.attr("data-testid");
          cy.get(`[data-testid='${id}']`).should("not.be.checked");
        }
      );
    });
  });
});
