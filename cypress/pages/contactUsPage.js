import { getAndVisible, xpathAndVisible } from "../Utils/Utils";

class contactUsPage {
  elements = {
    lblContactUs: () => xpathAndVisible('//h2[text()="CONTACT US"]'),
    txtFirstName: () => xpathAndVisible('//input[@name="first_name"]'),
    txtLastName: () => xpathAndVisible('//input[@name="last_name"]'),
    txtEmail: () => xpathAndVisible('//input[@name="email"]'),
    txtComments: () => xpathAndVisible('//textarea[@name="message"]'),
    btnReset: () => xpathAndVisible('//input[@type="reset"]'),
    btnSubmit: () => xpathAndVisible('//input[@type="submit"]'),
    lblThankYou: () => xpathAndVisible("//h1")
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


