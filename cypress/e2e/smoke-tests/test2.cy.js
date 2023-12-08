/// <reference types= "cypress" />

describe('First UI tests', ()=> {

    it('Test first accordeon visibility', ()=> {
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
    
})