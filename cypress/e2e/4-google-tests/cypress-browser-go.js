/// <reference types='cypress' />


describe('', () => {
    it('test', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr','target').click({force : true})
        cy.url().should('include','To-Do-List')

        cy.go('back')
             cy.url().should("eq","https://www.webdriveruniversity.com/")
    });
});