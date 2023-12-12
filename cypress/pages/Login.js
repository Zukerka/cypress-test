import { NavMenu } from "./components/NavMenuComponent"

export class LoginPage{
    get emailInput(){
        return cy.get('#input-email')
    }
    get emailErrorLabel(){
        return cy.get('p.caption.status-danger').eq(0)
    }

    get passwordInput(){
        return cy.get('#input-password')
    }   

    get loginButton(){
        return cy.contains('button', ' Log In ')
    }  



    
    navMenu = new NavMenu(); 

    // elements = {
    //     emailInput: () => cy.get('#input-email'),
    //     emailErrorLabel: () => cy.get('div.form-control-group p').eq(0),
    //     passwordInput: () => cy.get('#input-password'),
    //     passwordErrorLabel: () => cy.get('div.form-control-group p').eq(1), //caption status-danger ng-star-inserted
    //     loginButton: () => cy.contains('button', ' Log In ')
    // }

    open(){
        return cy.visit('/auth/login')
    }

    login(email, password){
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