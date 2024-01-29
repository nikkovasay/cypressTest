
//Elements
var firstProduct = '//a[@title="Skinsheen Bronzer Stick"][1]'


context('Automation Test Store', () => {
  beforeEach(() => {
    cy.visit('https://www.automationteststore.com/')
  })

  it.only('should click on the first item using item text', ()=>{
    cy.scrollTo(0, 500)
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeaderText)=>{
         console.log('Selected the following item: ' + itemHeaderText.text())
    })
  })  


  it('should submit a successful submission via contact us form', () => {
    cy.visit("https://www.automationteststore.com/")
    cy.get("a[href$='contact']").click().then((linkText) => {
            cy.log("Clicked on link text : " + linkText.text())
    })
    cy.get('#ContactUsFrm_first_name').type("Joe")
    cy.get('#ContactUsFrm_email').type("Joe_blogs123@gmail.com")
    cy.get('#ContactUsFrm_email').should('have.attr','name','email')
    cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
    cy.get("button[title='Submit']").click()
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    cy.log("Test has completed")
  })

})
