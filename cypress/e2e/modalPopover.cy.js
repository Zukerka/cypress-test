/// <reference types= "cypress" />

describe('Test modal popover', ()=> {

    it('Test mouse hover', ()=> {
        cy.visit('pages/modal-overlays/popover')

        cy.get('button[nbpopoverplacement="right"]').trigger('mouseenter')
        cy.get('nb-popover')
            .should('be.visible')
            .should('contain', 'Hello, how are you today?')
    })
    
})