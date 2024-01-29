
//Elements

    let searchBar = '#twotabsearchtextbox';

context('Automation Test Store - iterate elements', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/')
  })


  it.only('should submit a successful submission via contact us form', () => {
    
    cy.get(searchBar).should('be.visible').type("Stroller{enter}")
    cy.xpath("//span[@class='a-size-medium a-color-base a-text-normal']").each(($item, index, $list) => {
        cy.log("Index : " + index + " - Item name : " + $item.text())

        if($item.text().includes('Baby Doll Stroller')){
          cy.wrap($item).should('be.visible').click({force: true})
        }
    })
    // cy.get('.prdocutname').each(($item, index, $list) => {
    //       cy.log("Index: " + index + " : " + $item.text())
    //       if($item.text().includes('BeneFit Girl Meets Pearl')) {
    //           cy.wrap($item).click()
    //       }
    // })

    // cy.xpath('//span[text()="BeneFit Girl Meets Pearl"]').should('be.visible')
    
  })



})
