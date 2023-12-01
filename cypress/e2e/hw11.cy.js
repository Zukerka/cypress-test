/// <reference types= "cypress" />

describe('First UI tests', ()=> {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Change color scheme', ()=>{
        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
           };

        for (const color in colors) {
            
            cy.get('nb-select').click();
            cy.get('nb-option').contains(color).click(); 

            const expectedColor = colors[color];

            cy.get('nb-layout-header nav').should('have.css', 'background-color', expectedColor)
        }
    })

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

    it('Test mouse hover', ()=> {
        cy.visit('pages/modal-overlays/popover')

        cy.get('button[nbpopoverplacement="right"]').trigger('mouseenter')
        cy.get('nb-popover')
            .should('be.visible')
            .should('contain', 'Hello, how are you today?')
    })

    it.only('some test', ()=>{
        expect(true).to.equal(false); 
    })
    
})