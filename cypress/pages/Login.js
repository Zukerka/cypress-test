import { NavMenu } from "./components/NavMenuComponent"

export class LoginPage {
    get loginTitle(){
        return cy.get('#title')
    }

    get emailInput() {
        return cy.get('#input-email')
    }

    get emailErrorText() {
        return cy.get('#input-email').next('.caption.status-danger')
    }

    get passwordInput() {
        return cy.get('#input-password')
    }

    get passwordErrorText() {
        return cy.get('#input-password').next('.caption.status-danger')
    }

    get rememberCheckbox() {
        return cy.get('span').contains('Remember me')
    }

    get forgotPassLink() {
        return cy.get('a.forgot-password')
    }

    get registerLink() {
        return cy.get('a').contains('Register')
    }

    get loginButton() {
        return cy.contains('button', ' Log In ')
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

    navMenu = new NavMenu();

    // elements = {
    //     emailInput: () => cy.get('#input-email'),
    //     emailErrorLabel: () => cy.get('div.form-control-group p').eq(0),
    //     passwordInput: () => cy.get('#input-password'),
    //     passwordErrorLabel: () => cy.get('div.form-control-group p').eq(1), //caption status-danger ng-star-inserted
    //     loginButton: () => cy.contains('button', ' Log In ')
    // }

    open() {
        cy.visit('/pages')
        this.navMenu.openMenuByTitle('Auth')
        this.navMenu.openMenuByTitle('Login')
        return this; 
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginButton.click()
    }
    // login(email, password){
    //     this.elements.emailInput().type(email)
    //     this.elements.passwordInput().type(password)
    //     this.elements.loginButton().click()
    // }
}