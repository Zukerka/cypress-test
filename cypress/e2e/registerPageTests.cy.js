import { RegisterPage } from "../pages/Register";

describe('Register Page tests', () => {
    const registerPage = new RegisterPage()

    beforeEach(() => {
        registerPage.open();
    })

    context('Fields validation tests', () => {

        it('Short name entered', () => {
            registerPage.nameField.type('tes')
            registerPage.emailField.click()
            registerPage.nameErrorText.should('contain', ' Full name should contains from 4 to 50 characters ')
        })

        it('No email entered', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.click().blur()
            registerPage.emailErrorText.should('contain', ' Email is required! ')
        })

        it('Not real email entered', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.type('test@te')
            registerPage.passwordField.click()
            registerPage.emailErrorText.should('contain', ' Email should be the real one! ')
        })

        it('No password entered', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.type('test@test.io')
            registerPage.passwordField.click().blur()
            registerPage.passwordErrorText.should('contain', ' Password is required! ')
        })

        it('Short password entered', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.type('test@test.io')
            registerPage.passwordField.type('pas')
            registerPage.rePasswordField.click()
            registerPage.passwordErrorText.should('contain', ' Password should contain from 4 to 50 characters ')
        })

        it('No confirm password entered', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.type('test@test.io')
            registerPage.passwordField.type('password')
            registerPage.rePasswordField.click().blur()
            registerPage.rePasswordErrorText.should('contain', ' Password confirmation is required! ')
        })

        it.only('Password and confirm password don\'t match', () => {
            registerPage.nameField.type('test')
            registerPage.emailField.type('test@test.io')
            registerPage.passwordField.type('password')
            registerPage.rePasswordField.type('pasword').blur()
            registerPage.rePasswordField.should('have.css', 'border-color', 'rgb(255, 61, 113)')
        })
    })

    context.only('Happy pass tests', () => {
        it('Successful register', ()=> {
            registerPage.register('Natalia', 'test@test.io', 'passsword', 'passsword')
            cy.location('pathname').should('eq', '/pages')
        })
    })
})