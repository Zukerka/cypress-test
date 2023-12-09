export class NavMenu{
    get menuItem(){
        return cy.get('.menu-title')
    }

    openMenuByTitle(menuTitle){
        this.menuItem.contains(menuTitle).click()
    }
}