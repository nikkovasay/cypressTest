/// <reference types="cypress" />

let saleProducts = 0, nonSaleProducts = 0, totalPrice = 0;

describe('Alias and Invoke', () => {
    
    before(()=>{
        cy.ignoreXHRLogs()
    })

    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
    })

    it('validates a specific hair care product', () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        
         //how you would invoke a property and set as an alias
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        
        //how you would use an alias
        cy.get('@productThumbnail').should('eq',16) 
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });

    it('validates a specific hair care product', () => {
        cy.get(".thumbnail").as('thumbnailItems')
        cy.get('@thumbnailItems').should('have.length',16) 
        cy.get('@thumbnailItems').find('.productcart').invoke('attr', 'title').should('include','Add to Cart')
        // cy.get('.productcart').invoke('attr', 'title').should('include','Add to Cart').as('productCartLogo')
        // cy.get('@productCartLogo').its('length').should('be.greaterThan',5)
    });

    it.only('Calculate total of all products on the home page',()=>{
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.oneprice').each(($item,index,$list)=>{
            cy.log("Index of Item : " + index + " Item Price : " + parseFloat($item.text().substring(1)))
            nonSaleProducts += parseFloat($item.text().substring(1))
        })
            cy.log("non sale products total is : " + nonSaleProducts)
   
        cy.get('.price')
        cy.get('@productThumbnail').find('.pricenew').each(($item,index,$list)=>{
            cy.log(parseFloat($item.text().substring(1)))
            saleProducts += parseFloat($item.text().substring(1))
        }).then(()=>{
            cy.log("sale products total is : " + saleProducts)
            totalPrice = saleProducts + nonSaleProducts
            expect(totalPrice).to.be.eq(660.5)
            cy.log("The total price of all items in the home page is : " + totalPrice)
        })
        
    })
});

