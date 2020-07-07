describe('Actions', () => {
    it('First',() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
    it('Scond',() => {
        cy.get('#email1')
      .type('fake@email.com').should('have.value', 'fake@email.com')
      //.prev().should('have','Email address' )

      cy.get('.action-form')
      //.prev().should('eq','HALFOFF')
    }) 
  })
    describe('querying'()=>{

    
    it( '3rd', () => {
        cy.visit('https://example.cypress.io/commands/querying')
    })

    it ('4th',() => {
      cy.get('[data-toggle="dropdown"]').click()
      cy.get('.dropdown-menu').select()
    })

    
        

    })
    
    
    




