describe("from test", () => {
  it("test that the form is working properly", () => {
    cy.visit("/form");

    cy.get("[data-cy=name]").type("Eddie").should("have.value", "Eddie");

    cy.get("[data-cy=pepperoni]").check().should("have.checked", true);
    cy.get("[data-cy=pineapple]").check().should("have.checked", true);
    cy.get("[data-cy=mushroom]").check().should("have.checked", true);
    cy.get("[data-cy=extraCheese]").check().should("have.checked", true);

    cy.get("[data-cy=addOrderButton]").click();
  });
});
