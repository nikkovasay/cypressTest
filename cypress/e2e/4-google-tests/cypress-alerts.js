/// <reference types='cypress' />

describe("Handling alerts with javascript", () => {
  before(() => {
    cy.ignoreXHRLogs();
  });

  beforeEach(() => {
    cy.clearAllLocalStorage(true);
    cy.clearAllSessionStorage(true);
    cy.clearAllCookies(true);
  });

  it("handle alert and listen", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true });

    cy.get("#button1").click({ force: true });

    cy.on("window:alert", (str) => {expect(str).to.equal("I am an alert box!");
    });
  });

  it("validate js confirm box when click ok", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4")
      .click()
      .then(() => {
        cy.on("window:alert", (str) => {
          return true;
        });
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });

  it("validate js confirm box when click cancel", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click()

    cy.on("window:confirm", (str) => {
      return false;
    });

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });


  it.only("validate js confirm box when using a stub", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true });

    const stub = cy.stub()
    cy.on('window:confirm', stub)


    cy.get("#button4").click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then((str)=>{
        return true
    }).then(()=>{
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })

    
  });
});
