/// <reference types= "cypress" />

describe('First UI tests', ()=> {

    it('Change color scheme', ()=>{

        cy.visit('/')

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

    
})