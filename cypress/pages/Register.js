export class RegisterPage {

    get registerTitle(){
        return cy.get('#title')
    }

    get nameField(){
        return cy.get('#input-name')
    }

    get nameErrorText() {
        return cy.get('#input-name').next('.caption.status-danger')
    }

    get emailField(){
        return cy.get('#input-email')
    }

    get emailErrorText(){
        return cy.get('#input-email').next('.caption.status-danger')
    }

    get passwordField(){
        return cy.get('#input-password')
    }

    get passwordErrorText(){
        return cy.get('#input-password').next('.caption.status-danger')
    }

    get rePasswordField(){
        return cy.get('#input-re-password')
    }

    get rePasswordErrorText(){
        return cy.get('#input-re-password').next('.caption.status-danger')
    }

    get termsAndConditionsCheck(){
        return cy.get('span.custom-checkbox')
    }

    get termsAndConditionsLink(){
        return cy.contains('a', 'Terms & Conditions')
    }

    get registerButton() {
        return cy.contains('button', ' Register ')
    }

    get githubIconLink() {
        return cy.get('nb-icon[ng-reflect-icon="github"]').parent('a')
    }

    get fbIconLink() {
        return cy.get('nb-icon[ng-reflect-icon="facebook"]').parent('a')
    }

    get twitterIconLink() {
        return cy.get('nb-icon[ng-reflect-icon="twitter"]').parent('a')
    }

    get loginLink() {
        return cy.get('a').contains('Log in')
    }

    open() {
        return cy.visit('/auth/register')
    }

    register(name, email, password, rePassword){
        this.nameField.type(name)
        this.emailField.type(email)
        this.passwordField.type(password)
        this.rePasswordField.type(rePassword)
        this.termsAndConditionsCheck.click()
        this.registerButton.click()
    }

}