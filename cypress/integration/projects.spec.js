describe("Page - Projects", () => {
    beforeEach(() => {
        cy.visit("/projects");
    });

    it("has the correct headline", () => {
        cy.contains("h1", /all my projects/i);
    });

    it("has no labels selected by default", () => {
        cy.get(".label-item[aria-selected='true']").should("have.length", 0);
    });

    it("displays all the projects on startup", () => {
        cy.get(".project-item").filter(":visible").should("have.length.above", 0);
    });

    it("filters projects on label click", () => {
        cy.get(".project-item")
            .filter(":visible")
            .then((projects) => {
                const initialLength = projects.length;

                cy.get(".label-item").contains(/react/i).click();
                cy.get(".project-item")
                    .filter(":visible")
                    .should("have.length.within", 1, initialLength - 1);

                cy.get(".label-item").contains(/react/i).click();
                cy.get(".project-item").filter(":visible").should("have.length", initialLength);
            });
    });
});
