/// <reference types="cypress"/>

import contactUsPage from "../../pages/contactUsPage"



describe("Manipulate DOM elements", () => {

  before(()=>{
    cy.fixture('example').then((contactUsData)=>{
      globalThis.contactUsData = contactUsData
    })

    cy.ignoreXHRLogs()
    
  })

  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com");
  });

  it("should open the contact us page in the same tab by manipulating the DOM attributs", () => {
    //This allows us to remove attributes on an element like target to open the window in the same browser tab
    
    
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }).then(()=>{
      contactUsPage.pageLoad()
      cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver");
    })

    //Fill in the Form
    contactUsPage.fillInTheForm(contactUsData)
    contactUsPage.verifySuccessMessage()
  
  });


});
