import { getAndVisible } from "../Utils/Utils";

class contactUsPage {
  elements = {
    lblContactUs: () => getAndVisible('//h1[text()="CONTACT US"]'),
    txtFirstName: () => getAndVisible('input[name="first_name"]'),
    txtLastName: () => getAndVisible('input[name="last_name"]'),
    txtEmail: () => getAndVisible('input[name="email"]'),
    txtComments: () => getAndVisible('textarea[name="message"]'),
    btnReset: () => getAndVisible('input[type="reset"]'),
    btnSubmit: () => getAndVisible('input[type="submit"]'),
    lblThankYou: () => getAndVisible("h1")
  };

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

}


module.exports = new contactUsPage();