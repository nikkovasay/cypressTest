const { getAndVisible } = require("../Utils/Utils")

class tradeMeItemPage {

    elements = {
        
        lblItemName : () => getAndVisible('.tm-marketplace-buyer-options__listing_title')

    }

    verifyItemName(itemName){
        this.elements.lblItemName().should('include.text',itemName)
    }

}

module.exports = new tradeMeItemPage()