/// <reference types = "cypress"/> 
import { LoginPage } from "../pages/Login";
import { HeaderMenu } from "../pages/components/HeaderMenuComponent";


describe('Login page tests', () => {

    const loginPage = new LoginPage()
    const headerMenu = new HeaderMenu()

    beforeEach(() => {
        loginPage.open();
    })

    context.skip('Fields validation tests', () => {

        it('No email entered', () => {
            loginPage.emailInput.click()
            loginPage.passwordInput.click()
            loginPage.emailErrorText.should('contain', 'Email is required!')
        })

        it('Wrong email entered', () => {
            loginPage.emailInput.type('dsdfdsd').blur()
            loginPage.emailErrorText.should('contain', 'Email should be the real one!')
        })

        it('No password entered', () => {
            loginPage.emailInput.type('test@test.io')
            loginPage.passwordInput.click()
            loginPage.rememberCheckbox.click()
            loginPage.passwordErrorText.should('contain', 'Password is required!')
        })

        it('Short password entered', () => {
            loginPage.emailInput.type('test@test.io')
            loginPage.passwordInput.type('pas')
            loginPage.rememberCheckbox.click()
            loginPage.passwordErrorText.should('contain', 'Password should contain from 4 to 50 characters')
        })

    })

    context('Register and Forgot Password Links\' redirect', () => {
        it('Forget Password link accessible', () => {
            loginPage.forgotPassLink.click()
            cy.location('pathname').should('eq', '/auth/request-password')
        })
    
        it('Register link accessible', () => {
            loginPage.registerLink.click()
            cy.location('pathname').should('eq', '/auth/register')
        })
    })

    it('Successful login', () => {
        loginPage.login('test@test.io', 'password')
        cy.location('pathname').should('eq', '/pages')
        headerMenu.user.should('be.visible')
    })

    // context('Social Media Link Accesssibility', () => {
    //     it.only('GitHub link accessible', () => {
    //         loginPage.githubIconLink.invoke('removeAttr', 'target').click()
    //         cy.url().then(url => {
    //             cy.log('Current URL:', url);
    //         });
    //         cy.url({ timeout: 10000 }).should(url => {
    //             expect(url).to.include('/akveo/nebular');
    //         })
    //     })
    //     it('Facebook link accessible', () => {
    //         loginPage.fbIconLink.click()
    //     })
    //     it('Twitter link accessible', () => {
    //         loginPage.twitterIconLink.click()
    //     })
    // })

})