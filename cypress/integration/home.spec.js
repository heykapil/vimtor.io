describe("Page - Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct headline", () => {
    cy.contains("h1", /covandonga/i);
  });

  it("clicking on profile picture hides the tooltip", () => {
      cy.get("#profile-bubble").should('be.visible')
      cy.get(".profile-container").click()
      cy.get("#profile-bubble").should('not.be.visible')
  });

  it("contact form is disabled if inputs are not filled", () => {
    cy.get(".contact-button")
      .should("be.disabled")
      .contains(/fill all fields/i);

    cy.get("input[name=email]").type("victor@vimtor.io");
    cy.get(".contact-button").contains(/fill all fields/i);

    cy.get("textarea[name=message]").type("Hello from the other side");
    cy.get(".contact-button").should("not.be.disabled").contains(/send/i);

    cy.get("input[name=email]").clear();
    cy.get(".contact-button")
      .should("be.disabled")
      .contains(/fill all fields/i);
  });

  it("has 8 featuring projects", () => {
    cy.get(".project-item").should("have.length", 8);
  });

  it("can navigate towards projects page", () => {
    cy.get("a[href='/projects']").click();
    cy.url().should("contain", "/projects");
    cy.contains("h1", /all my projects/i);
  });
});
