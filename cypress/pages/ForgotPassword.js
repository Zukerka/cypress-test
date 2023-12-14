export class ForgotPasswordPage{
    get forgotPasswordTitle(){
        return cy.get('#title')
    }

    get emailInput(){
        return cy.get('#input-email')
    }

    get emailErrorText(){
        return cy.get('#input-email').next('.caption.status-danger')
    }

    get requestButton() {
        return cy.contains('button', ' Request password ')
    }

    get backLoginLink() {
        return cy.get('a[href="/auth/login"]')
    }

    get registerLink() {
        return cy.get('a[href="/auth/register"]')
    }
    
    requestPassword(email){
        this.emailInput.type(email)
        this.requestButton.click()
    }

}