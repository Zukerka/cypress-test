import { ForgotPasswordPage } from "../pages/ForgotPassword";

describe('Forgot Password Page tests', () => {
    const forgotPassPage = new ForgotPasswordPage()

    beforeEach(() => {
        cy.visit('auth/request-password')
    })

    context('Email field validation tests', () => {
        it('Empty email field', () => {
            forgotPassPage.emailInput.click().blur()
            forgotPassPage.emailErrorText.should('contain', ' Email is required! ')
        })

        it('Not real email entered', () => {
            forgotPassPage.emailInput.type('test@t')
            forgotPassPage.emailInput.blur()
            forgotPassPage.emailErrorText.should('contain', ' Email should be the real one! ')
        })
    })

    context('Links Accessibility tests', () => {
        it('Back to Login Link', () => {
            forgotPassPage.backLoginLink.click()
            cy.location('pathname').should('eq', '/auth/login')
        })

        it('Register Link', () => {
            forgotPassPage.registerLink.click()
            cy.location('pathname').should('eq', '/auth/register')
        })
    })

    context('Request password test', () => {
        it('Happy pass', () => {
            forgotPassPage.requestPassword('test@test.io')
            cy.location('pathname').should('eq', '/pages')
        })

    })
    
})