import { getAndVisible } from '../../Utils/Utils'


//Elements
const txtUsername = 'input[name="username"]'
const txtPassword = 'input[name="password"]'
const btnSubmit = 'button[id="submit"]'
const lblLoggedInBanner = '.post-title'
const btnLogout = '.wp-block-button__link'

context('Login', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('should log in to the test website and log out', () => {

    //Type in username 
    getAndVisible(txtUsername).type("student")

    //Type in password
    getAndVisible(txtPassword).type("Password123")

    //Click submit
    getAndVisible(btnSubmit).click()

    //verify banner is visible and text matches logged in state
    getAndVisible(lblLoggedInBanner).should('contain.text', 'Logged In Successfully')

    //log out 
    getAndVisible(btnLogout).click()

    cy.get(txtUsername).then(
      (txtPassword) => {
        if (txtPassword) {
          getAndVisible(txtUsername).type('problem')
        } else {
          getAndVisible(txtUsername).type('not a problem')
        }

      }

    )

  })

})
