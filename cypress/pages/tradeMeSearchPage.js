import { getAndVisible, xpathAndVisible } from "../Utils/Utils";

class tradeMeSearchPage {
  elements = {
    txtSearchBox : () => getAndVisible('#search'),
    btnPropertyTab :  () => getAndVisible('a[routerlink="/property"]'),
  }


  typeSearchTerm(searchTerm){
    this.elements.txtSearchBox().type(searchTerm+"{enter}")
  }

  clickOnPropertyTab(){
    return this.elements.btnPropertyTab().click()
  }

  getPropertyTab(){
    return this.elements.btnPropertyTab()
  }

}

module.exports = new tradeMeSearchPage()