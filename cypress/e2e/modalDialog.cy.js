/// <reference types= "cypress" />

describe('Test Modal Dialog', ()=> {

    it('Test Return Result From Dialog', ()=>{
        cy.visit('/pages/modal-overlays/dialog')

        // Selecting the card and button
        cy.contains('nb-card-header', 'Return Result From Dialog').parent('nb-card').as('returnResultCard')
        cy.get('@returnResultCard').within(()=> {
            cy.get('button').contains('Enter Name').click()
        })
        
         // Input and submit in the modal
        let newName = 'Natalia'

        cy.get('ngx-dialog-name-prompt input[placeholder="Name"]').type(newName)
        cy.get('ngx-dialog-name-prompt button').contains('Submit').click()
        
        cy.get('@returnResultCard').should('contain', newName)
    
    })
    
})