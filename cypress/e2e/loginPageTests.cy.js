/// <reference types = "cypress"/> 
import { LoginPage } from "../pages/Login";

describe('Login tests', () => {

    const loginPage = new LoginPage()

    beforeEach(()=> {
        loginPage.open(); 
    })

    it('Successful login', ()=> {
        loginPage.login('intyicija@gmail.com', 'password')
    })

    it.skip('Login without password ', ()=> {
        loginPage.elements.emailInput().type('intyicija@gmail.com')
        loginPage.elements.loginButton().click
    })

})