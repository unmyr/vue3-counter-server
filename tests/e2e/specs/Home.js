// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("#count-view").contains("0");
    cy.get("button[name=plus]").click();
    cy.get("#count-view").contains("1");
    cy.get("button[name=minus]").click();
    cy.get("#count-view").contains("0");
    cy.get("button[name=minus]").click();
    cy.get("#count-view").contains("-1");
  });
});
