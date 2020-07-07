describe('My First Test', () => 
{
    it('Verifying  Title', () =>
     {
      cy.visit('https://www.ict.gnu.ac.in/')
      cy.title().should('eq','Ganpat University Institute of 1234 Computer Technology')
    })
    
  })