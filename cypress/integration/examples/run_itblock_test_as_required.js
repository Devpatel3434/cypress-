describe('Actions', () => {
    it.only('First',() => { // when we use only whit itblock only run this it block
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
    xdescribe('querying'()=>{ // mute this whole contant and all it block

    
    it.skip( '3rd', () => { // this will skip this it block
        cy.visit('https://example.cypress.io/commands/querying')
    })

    xit ('4th',() => { // this will mute it block
      cy.get('[data-toggle="dropdown"]').click()
      cy.get('.dropdown-menu').select()
    })

    
        

    })
    
    
    




