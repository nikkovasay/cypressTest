/// <reference types='cypress'/>


describe('check and uncheck all boxes', () => {

    beforeEach(()=>{
        // cy.visit("/")
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

    it('check and vlidate check boxes', () => {
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

        // cy.get('#checkboxes').find('input[type*="checkbox"]').each(($box,index,$list)=>{
        //     cy.wrap($box).check()
        // })

        // cy.get('#checkboxes').find('input[type*="checkbox"]').each(($box,index,$list)=>{
        //     cy.wrap($box).uncheck()
        // })

        cy.get('input[type*="checkbox"]').check(["option-1","option-2","option-4"])
    });

    it('check and vlidate check boxes', () => {
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

        cy.get('#checkboxes').find('input[value*="option-3"]').as('checkbox-3')
        cy.get('@checkbox-3').uncheck()
        cy.get('@checkbox-3').should('not.be.checked')
    });

    it.only('check and vlidate check boxes', () => {
        
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

        cy.get("#radio-buttons").find('input[value*="orange"]').check()
        cy.get("#radio-buttons").find('input[name*="color"]').eq(1).check().should('be.checked')
    });
});