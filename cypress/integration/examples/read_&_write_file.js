describe('read and write',()=>{

  
     

    
    it('work in txt',()=>{
        cy.readFile('cypress/fixtures/try.txt')
        cy.writeFile('cypress/fixtures/try.txt', {
            id: 8739,
            name: 'abc',
            email: 'abc@example.com',
            
          })


    })

    it.skip('work on xlsx',()=>{
        cy.readFile('cypress/fixtures/try_to_convert.xlsx')
        cy.writeFile('cypress/fixtures/try_to_convert.xlsx', {
            id: 8739,
            name: 'abc',
            email: 'abc@example.com'
          })


    })




})