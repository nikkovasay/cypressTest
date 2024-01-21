/// <reference types="Cypress" />

import { getAndVisible, xpathAndVisible } from "../../Utils/Utils";

//Elements
let lblContactUs = '//h1[text()="CONTACT US"]';

let txtFirstName = 'input[name="first_name"]';
let txtLastName = 'input[name="last_name"]';
let txtEmail = 'input[name="email"]';
let txtComments = 'textarea[name="message"]';
let btnReset = 'input[type="reset"]';
let btnSubmit = 'input[type="submit"]';

let lblThankYou = "h1";

context("Login", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  });

  describe("Test contact form via Webdriver University", () => {
    it("fill out and submit the contact form", () => {
      getAndVisible(txtFirstName).type("Nikko");
      getAndVisible(txtLastName).type("vasay");
      getAndVisible(txtEmail).type("Nikkovasay@testmail.com");
      getAndVisible(txtComments).type("Nikko vasay is running this test ");

      getAndVisible(btnSubmit).click();

      getAndVisible(lblThankYou);
      cy.url().should(
        "eq",
        "https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html"
      );

      cy.request;
    });

    it.only("fill out and submit the contact form", () => {
      getAndVisible(txtFirstName).type("Nikko");
      getAndVisible(txtLastName).type("vasay");
      
      getAndVisible(txtComments).type("This test will fail ");

      getAndVisible(btnSubmit).click()

    });
  });
});
