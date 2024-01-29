/// <reference types="cypress"/>

describe("Cypress Origin Tests and Web Security", () => {
before(()=>{
    cy.ignoreXHRLogs()
})

  // it("Validate visiting two different domains", () => {
  //   cy.visit("https://www.google.com");
  //   cy.visit("https://www.apple.com");
  // });

  // it("Validate visiting two different domains via user actions", () => {
  //   cy.visit("http://www.webdriveruniversity.com/");
  //   cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  // });

  // it.only("how to use origin command", () => {
  //   cy.origin("webdriveruniversity.com", () => {
  //     cy.visit("/");
  //   });

  //   cy.origin("automationteststore.com", () => {
  //     cy.visit("/");
  //   });
  // });
});
