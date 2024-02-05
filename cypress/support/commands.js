// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('getByXpath',(element)=>{
  return cy.xpath(element).should('be.visible')
})

Cypress.Commands.add('ignoreXHRLogs', () => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  });
  

Cypress.Commands.add('logListOfElements',(element) => {
      return cy.get(element).each(($item, index, $list) => {
          cy.log($item.text())
      })
})

Cypress.Commands.add('selectProduct',(productName)=>{
        cy.get(".fixed .prdocutname").each(($el, index, $list) => {
          if($el.text().includes(productName)){
            cy.wrap($el).should('exist').click()
          }
        })
})

Cypress.Commands.add('addProductsToCart', productName =>{
  cy.get('.prdocutname').each(($element, index, $list)=>{
    if($element.text() === productName){
      cy.log("Index : " + index + " - itemn name : " + $element.text())

      cy.get("a[title*='Add to Cart']").eq(index).click()
    }
  })
})



// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-xpath';

// Example: Custom command to suppress XHR logs
// commands.js or your custom commands file
