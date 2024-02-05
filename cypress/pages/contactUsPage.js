class contactUsPage {
  elements = {
    lblContactUs: () => cy.getByXpath('//h2[text()="CONTACT US"]'),
    txtFirstName: () => cy.getByXpath('//input[@name="first_name"]'),
    txtLastName: () => cy.getByXpath('//input[@name="last_name"]'),
    txtEmail: () => cy.getByXpath('//input[@name="email"]'),
    txtComments: () => cy.getByXpath('//textarea[@name="message"]'),
    btnReset: () => cy.getByXpath('//input[@type="reset"]'),
    btnSubmit: () => cy.getByXpath('//input[@type="submit"]'),
    lblThankYou: () => cy.getByXpath("//h1")

  };


  pageLoad(){
    this.elements.lblContactUs().should('be.visible')
  }

  typeFirstName(firstName){
    this.elements.txtFirstName().type(firstName)
  }

  typeLastName(lastName){
    this.elements.txtLastName().type(lastName)
  }

  typeEmail(eMail){
    this.elements.txtEmail().type(eMail)
  }

  typeComments(comments){
    this.elements.txtComments().type(comments)
  }

  clickSubmitButton(){
    this.elements.btnSubmit().click()
  }

  verifySuccessMessage(){
    this.elements
      .lblThankYou().should("have.text", "Thank You for your Message!");
  }

  fillInTheForm(data){
    this.typeFirstName(data.first_name)
    this.typeLastName(data.last_name)
    this.typeEmail(data.email)
    this.typeComments(data.comments)
    this.clickSubmitButton()
  }

}

module.exports = new contactUsPage();


