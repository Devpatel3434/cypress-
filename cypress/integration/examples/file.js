describe('1st',()=>{

  
     

    
    it('2nd',()=>{
        cy.readFile('cypress/fixtures/try.txt')
        cy.writeFile('cypress/fixtures/try.txt', {
            id: 8739,
            name: 'abc',
            email: 'abc@example.com'
          })


    })

    it('3rd',()=>{
        cy.readFile('cypress/fixtures/Tools COMP.xlsx')
        cy.writeFile('cypress/fixtures/Tools COMP.xlsx', {
            id: 8739,
            name: 'abc',
            email: 'abc@example.com'
          })


    })




})