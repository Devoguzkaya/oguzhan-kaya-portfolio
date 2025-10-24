describe("Portfolio E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // Assuming the app runs on this port
  });

  it("should toggle language between English and Turkish", () => {
    // Check initial language (English)
    cy.contains("Skills").should("be.visible");
    cy.contains("Projects").should("be.visible");
    cy.contains("Hire Me").should("be.visible");

    // Switch to Turkish
    cy.contains(`TÜRKÇE'YE GEÇ`).click();
    cy.contains("Yetenekler").should("be.visible");
    cy.contains("Projeler").should("be.visible");
    cy.contains("Teklif Al").should("be.visible");

    // Switch back to English
    cy.contains("SWITCH TO ENGLISH").click();
    cy.contains("Skills").should("be.visible");
    cy.contains("Projects").should("be.visible");
    cy.contains("Hire Me").should("be.visible");
  });

  it('should toggle between light and dark theme', () => {
    // Check initial theme (light - default for this project)
    cy.get('html').should('not.have.attr', 'data-theme', 'dark');

    // Switch to dark theme
    cy.get('button').contains('Dark Mode').click();
    cy.get('html').should('have.attr', 'data-theme', 'dark');

    // Switch back to light theme
    cy.get('button').contains('Dark Mode').click();
    cy.get('html').should('not.have.attr', 'data-theme', 'dark');
  });

  it("should display correct project details for Pizza Order App", () => {
    cy.contains("Projects").click(); // Navigate to projects section if not visible
    cy.contains("Pizza Order App").should("be.visible");
    cy.contains(
      "A responsive pizza ordering application built during a sprint"
    ).should("be.visible");
      cy.get('.grid > div').filter(':contains("Pizza Order App")').within(() => {
        cy.contains('React').should('be.visible');
        cy.contains('Tailwind CSS').should('be.visible');
        cy.contains('Cypress').should('be.visible');
        cy.get('a').contains('GitHub').should('have.attr', 'href', 'https://github.com/Devoguzkaya/wit-sprint8-pizza-app');
        cy.get('a').contains('Live Demo').should('have.attr', 'href', 'https://wit-sprint8-pizza-fip95co5z-oguzhans-projects-d34dd72a.vercel.app');
        cy.get('img').should('have.attr', 'src', '/images/pizza.png');
      });
  });

  it("should display correct project details for Personal Portfolio", () => {
    cy.contains("Projects").click(); // Navigate to projects section if not visible
    cy.contains("Personal Portfolio").should("be.visible");
    cy.contains(
      "This responsive React portfolio showcases my skills and projects"
    ).should("be.visible");
    cy.get(".grid > div")
      .filter(':contains("Personal Portfolio")')
      .within(() => {
        cy.contains("React").should("be.visible");
        cy.contains("Tailwind CSS").should("be.visible");
        cy.contains("Toastify").should("be.visible");
        cy.contains("Context API").should("be.visible");
        cy.get("a")
          .contains("GitHub")
          .should(
            "have.attr",
            "href",
            "https://github.com/Devoguzkaya/oguzhan-kaya-portfolio"
          );
        cy.get("a")
          .contains("Live Demo")
          .should(
            "have.attr",
            "href",
            "https://oguzhan-kaya-portfolio.vercel.app/"
          );
        cy.get("img").should(
          "have.attr",
          "src",
          "/images/Oguzhan_portfolio.png"
        );
      });
  });

  it("should show a toast notification when Hire Me button is clicked", () => {
    cy.intercept("POST", "https://reqres.in/api/users").as("hireRequest"); // Intercept the API call
    cy.contains("Hire Me").first().click(); // Click the first Hire Me button (in Header)
    cy.wait("@hireRequest").its("response.statusCode").should("eq", 201); // Wait for the API call to complete
    cy.contains("Request sent successfully! 🚀").should("be.visible"); // Verify success toast
  });
});
