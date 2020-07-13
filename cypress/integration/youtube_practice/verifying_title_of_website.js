describe('My First Test', () => 
{
    it('Verifying  Title', () =>
     {
      cy.visit('https://www.ict.gnu.ac.in/') // this will take to that website
      cy.title().should('eq','Ganpat University Institute of 1234 Computer Technology') // this will compare the actual value and value we entered
    })
    
  })