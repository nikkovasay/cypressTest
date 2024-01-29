/// <reference types="Cypress" />
const { xpathAndVisible, getAndVisible } = require("../Utils/Utils");

class tradeMeResultsPage {
  elements = {
    lblResultTermHeader: () => cy.get("#-title"),
    lblAnotherResultItemHeader: () => cy.get("[tmid*='title']"),
    lblShowingResults: () =>
      xpathAndVisible('//p[text()=" Showing results in "]'),
  };

  waitForPageToLoad() {
    this.elements.lblShowingResults().should("be.visible");
  }

  //Shows how to click on element in a list of elements.
  //You can wrap the element in an if else statement and match the ~
  //text of the item you want to click when you iterate through a list of elements
  clickOnFirstResult() {
    this.elements.lblResultTermHeader().each(($item, index, $list) => {
      cy.wrap($item).click({ force: true });
    });
  }

  //just iterate through a list of elements and log them to show how .each() works
  logAllSearchResults() {
    this.elements.lblAnotherResultItemHeader().each(($item, index, $list) => {
      cy.log("Index : " + index + " item name : " + $item.text());
    });
  }

  clickOnFirstResultWithInvoke() {
    this.elements.lblResultTermHeader().each(($item, index, $list) => {
      // cy.wrap($item).invoke('show').click().as('$clickFirstItemButton')
      
    });
  }
}

module.exports = new tradeMeResultsPage();
