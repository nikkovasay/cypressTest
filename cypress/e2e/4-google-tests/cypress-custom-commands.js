/// <reference types='cypress' />

describe("Custom Commands", () => {
  before(()=>{
    cy.fixture('products').then((productData)=>{
      globalThis.productData = productData
    })
    
  })


  beforeEach(()=>{
    cy.ignoreXHRLogs()
    cy.visit(Cypress.env("automationTestStore_homepage"));
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
  })

  it("test the logListOfElements cypress custom command", () => {
    cy.logListOfElements(".oneprice");
  });

  it("test the select product cypress custom command", () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });

  it.only("select multiple items and add to cart", () => {
    globalThis.productData.products.forEach((productName) => {
        cy.addProductsToCart(productName)
    });
  });

});
