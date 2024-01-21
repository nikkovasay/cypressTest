/// <reference types="Cypress" />

describe('API Tests', () => {
    it('Test GET method', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('userId',1)
        })

        
    });
});