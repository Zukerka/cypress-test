/// <reference types = "cypress"/> 
import { LoginPage } from "../pages/Login";

describe('Login page tests', () => {

    const loginPage = new LoginPage()

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

    it('Forget Password link accessible', () => {
        loginPage.forgotPassLink.click()
        cy.location('pathname').should('eq', '/auth/request-password')
    })

    it('Register link accessible', () => {
        loginPage.registerLink.click()
        cy.location('pathname').should('eq', '/auth/register')
    })

    context.skip('Social Media Link Accesssibility', () => {
        it('GitHub link accessible', () => {
            loginPage.githubIconLink.click()
            // cy.location('pathname').should('eq', '/auth/register')
        })
        it('Facebook link accessible', () => {
            loginPage.fbIconLink.click()
            // cy.location('pathname').should('eq', '/auth/register')
        })
        it('Twitter link accessible', () => {
            loginPage.twitterIconLink.click()
            // cy.location('pathname').should('eq', '/auth/register')
        })
    })

    it('Successful login', () => {
        loginPage.login('test@test.io', 'password')
    })

})