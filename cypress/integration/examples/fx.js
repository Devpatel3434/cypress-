describe('file uplode',()=>{


    it('try',()=>{

        cy.visit('http://testautomationpractice.blogspot.com/')

cy.get('#draggable') .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 765, pageY: 150 })
  .trigger('mouseup')


  cy.get('#gallery > :nth-child(1) > img').trigger('mousedown', { which: 1, pageX: 800, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
  .trigger('mouseup')

  cy.get('.gallery > .ui-widget-content > .ui-icon').click()

  cy.get('[style="display: list-item; width: 48px;"] > .ui-icon').click()

  

  
  
    })
   /* it('1st',()=>{
        const filename='example.json'

        cy.fixture('example').then(function(filecontant){
        cy.get('#RESULT_FileUpload-10').upload({filecontant,filename,mimeType:'application/json'})
        cy.get    

        })

    })*/


})