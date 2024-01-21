

export function getAndVisible(element){
    return cy.get(element).should('be.visible')
}

export function xpathAndVisible(element){
    return cy.xpath(element).should('be.visible')
}

