/// <reference types="Cypress" />


import { getAndVisible, xpathAndVisible } from "../../Utils/Utils";
import contactUsPage from "../../pages/contactUsPage";
// import profile from '../../fixtures/profile.json'

//Elements
let lblContactUs = '//h1[text()="CONTACT US"]';

let txtFirstName = 'input[name="first_name"]';
let txtLastName = 'input[name="last_name"]';
let txtEmail = 'input[name="email"]';
let txtComments = 'textarea[name="message"]';
let btnReset = 'input[type="reset"]';
let btnSubmit = 'input[type="submit"]';
let lblThankYou = "h1";

const testData = [
  { name: "Name1", password: "Pass1" },
  { name: "Name2", password: "Pass2" },
  { name: "Name3", password: "Pass3" },
];

const newTestData = [];

context("Contact Us Page", () => {
  before(() => {
    cy.fixture("example").then(function (sampleData) {
      // this.data = data;
      globalThis.sampleData = sampleData;
    });

    cy.fixture("users").then((userData) => {
      globalThis.userData = userData;
    });

    cy.fixture("profile").then((profileData) => {
      globalThis.profileData = profileData;
      cy.log(profileData)
    });
  });

  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.fixture('profile').as('profileData')
  });

  describe("Test contact form via Webdriver University", () => {
    it('should do some kind of test',() => {
      cy.log("Do some kind of test here")
    })

  //  profileData.forEach((pd) => {
  //    it("will use this id : " + pd.id, () => {
  //      getAndVisible(txtFirstName).type(pd.name);
  //    });
  //  });

      // it('should do something',()=>{
      //   profileData.data.forEach((pd) => {
      //     const firstName = pd.name
      //     getAndVisible(txtFirstName).type(firstName)
      //   })
      // })

    // it('test', () => {
    //   cy.fixture('profile').then((profileData) => {
    //       getAndVisible(txtFirstName).type(profileData.data[0].name)
    //   })
    // })

    // testData.forEach((data) => {
    //   it("example test for " + data.name, () => {
    //     cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    //     cy.title().should("include", "WebDriver");
    //     getAndVisible(txtFirstName).type(data.name);
    //   });
    // });

    // profileData.forEach((data) => {
    //   it("should use this data : " + data.id, () => {
    //     cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    //     cy.title().should("include", "WebDriver")
    //     getAndVisible(txtFirstName).type(data.name)
    //   });
    // });

    // cy.fixture("profile").then((data) => {
    //   for (var index in data) {
    //     it("iterate through data and display " + data.name, () => {
    //       cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    //       cy.title().should("include", "WebDriver");
    //       getAndVisible(txtFirstName).type(data.name);
    //     });
    //   }
    // });



    it.only("fill out and submit the contact form", () => {
      cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver");
      contactUsPage.typeFirstName(Cypress.env('first_name'))
      contactUsPage.typeLastName(sampleData.last_name)
      contactUsPage.typeEmail(sampleData.email)
      cy.log(userData[0].id)
      contactUsPage.typeComments(userData[0].id)
      contactUsPage.clickSubmitButton()

      getAndVisible(lblThankYou).should(
        "have.text",
        "Thank You for your Message!"
      );
      cy.url().should(
        "eq",
        "https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html"
      );

      console.log("Test has completed");
      cy.log("Test has completed - cy log");
    });

    // it("fill out and submit the contact form", () => {
    //   getAndVisible(txtFirstName).type("Nikko");
    //   getAndVisible(txtLastName).type("vasay");
    //   getAndVisible(txtComments).type("This test will fail ");
    //   getAndVisible(btnSubmit).click();

    //   // cy.get(lblThankYou).should("not.exist")

    //   cy.get("body").contains("Error: all fields are required");
    // });
  });
});
