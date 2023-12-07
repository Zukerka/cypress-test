/// <reference types= "cypress" />

describe('First UI tests', ()=> {
   
    it.skip('Test first accordeon visibility', ()=> {
        let text = 'A nebula is an interstellar cloud of dust,'
        cy.visit('pages/layout/accordion'); 

        cy.get('nb-accordion-item-body').first().as('firstAccordionBody')
        
        cy.get('@firstAccordionBody')
            .contains(text)
            .should('be.hidden'); 

        cy.get('nb-card button').click()

        cy.get('@firstAccordionBody')
            .contains(text)
            .should('be.visible'); 
    })

    it('Test mouse hover', ()=> {
        cy.visit('pages/modal-overlays/popover')

        cy.get('button[nbpopoverplacement="right"]').trigger('mouseenter')
        cy.get('nb-popover')
            .should('be.visible')
            .should('contain', 'Hello, how are you today?')
    })
    
})