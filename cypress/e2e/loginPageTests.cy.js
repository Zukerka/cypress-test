/// <reference types = "cypress"/> 
import { LoginPage } from "../pages/Login";

describe('Login tests', () => {

    const loginPage = new LoginPage()

    beforeEach(()=> {
        loginPage.open(); 
    })

    it('Wrong email entered', () => {
        loginPage.emailInput.type('dsdfdsd').blur()
        loginPage.emailErrorLabel.should('contain', 'Email should be the real one!')
    })


    it('Successful login', ()=> {
        loginPage.login('intyicija@gmail.com', 'password')
    })

    // it.skip('Login without password ', ()=> {
    //     loginPage.elements.emailInput().type('intyicija@gmail.com')
    //     loginPage.elements.loginButton().click
    // })

})