import tradeMeItemPage from '../../pages/tradeMeItemPage';
import tradeMeResultsPage from '../../pages/tradeMeResultsPage';
import tradeMeSearchPage from '../../pages/tradeMeSearchPage'

context('Cypress Basics',() => {
    before(() => {
        cy.ignoreXHRLogs()

        cy.fixture('tradeMeSearch').then((tmData) => {
            // this.data = data;
            globalThis.tmData = tmData;
          });
    })

    beforeEach(() => {
        cy.visit('https://www.trademe.co.nz')
    });

    describe('Proper tests for cypress basics', () => {
        
        it('Can get and interact with elements on the page', () => {
            tradeMeSearchPage.typeSearchTerm(tmData.SearchTerm)
            tradeMeResultsPage.waitForPageToLoad()
            tradeMeResultsPage.clickOnFirstResult()
            tradeMeItemPage.verifyItemName(tmData.SearchTerm)
        });
        
        it('Can log multiple items - show each() function',()=>{
            tradeMeSearchPage.typeSearchTerm(tmData.SearchTerm)
            tradeMeResultsPage.waitForPageToLoad()
            tradeMeResultsPage.logAllSearchResults()
        })

        it('should show how to use cypress then() function',()=>{
            tradeMeSearchPage.clickOnPropertyTab().then(($propertyTab)=>{
                cy.log($propertyTab.text())
            })    
        })

        it.only('uses aliases and invoke methods', () => {
            tradeMeSearchPage.typeSearchTerm(tmData.SearchTerm)
            tradeMeResultsPage.waitForPageToLoad()
            tradeMeResultsPage.clickOnFirstResult()
        })
    });
})
