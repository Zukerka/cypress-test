/// <reference types= "cypress" />

describe('Test color theme change', ()=> {
    
    // it('Change color theme sequentially', ()=>{
    //     cy.visit('/') 

    //     const colors = {
    //         "Light": "rgb(255, 255, 255)",
    //         "Dark": "rgb(34, 43, 69)",
    //         "Cosmic": "rgb(50, 50, 89)",
    //         "Corporate": "rgb(255, 255, 255)"
    //        };

    //     for (const color in colors) {
            
    //         cy.get('nb-select').click();
    //         cy.get('nb-option').contains(color).click(); 

    //         const expectedColor = colors[color];

    //         cy.get('nb-layout-header nav').should('have.css', 'background-color', expectedColor)
    //     }
    // })

    it('Change color theme sequentially', () => {
        cy.visit('/');

        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
        };

        cy.wrap(Object.entries(colors)).each(([color, expectedColor]) =>{
            cy.get('nb-select').click();
            cy.get('nb-option').contains(color).click();
            cy.get('nb-layout-header nav').should('have.css', 'background-color', expectedColor)
        }) 

    });
    
})