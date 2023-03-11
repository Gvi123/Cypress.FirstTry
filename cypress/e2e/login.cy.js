describe("LLogin page Test cases", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Logging in with a standard user", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get("#inventory_container").should("be.visible");
  });

  it("Error message when trying to log in without a password", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard_user");
    //cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });

  it("Error message when trying to log in without a username", () => {
    //cy.get('[data-test="username"]').should("be.visible").type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });

  it("Error message when trying to log in with an invalid user", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard");
    cy.get('[data-test="password"]').type("secret");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Error message when trying to log in with an locked out user", () => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Closing the error message", () => {
    cy.get('[data-test="username"]').should("be.visible").type("standard");
    cy.get('[data-test="password"]').type("secret");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    cy.get(".error-button").click();
    cy.get('[data-test="error"]').should("not.exist");
  });
});
