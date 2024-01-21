import { getAndVisible } from '../../Utils/Utils'


//Elements
var txtUsername = 'input[name="username"]'
var txtPassword = 'input[name="password"]'
var btnSubmit = 'button[id="submit"]'
var lblLoggedInBanner = '.post-title'
var btnLogout = '.wp-block-button__link'

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
