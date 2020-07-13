
describe('Try to exituce some command which was not coverd in automation.js',()=>{

    it('input value in the fild',()=>{ 
    cy.visit('http://testautomationpractice.blogspot.com/')  // it will redirect to this url website. 
    
    cy.get('#Wikipedia1_wikipedia-search-input').click() //it will locate and perform click event 
    .type('bugatti chiron')
    cy.get('.wikipedia-search-button').click()
    cy.get('#Wikipedia1_wikipedia-search-results > :nth-child(1) > a').click()
    
    
    
    
    
    
    })
    
    it('2nd',()=>{
    
        cy.get(':nth-child(7) > a').trigger('mouseover') // take the mouse curser to that location
    
        cy.get(':nth-child(8) > a').trigger('mouseover')
    
        cy.get('#age').click().type('19')// locate the fild & click on it & type 19 in the fild
    })
    //Below code is for compare and check value in table 
    it ('3rd',()=>{
        // 1st and simple methode to get any value inside the table
       cy.xpath('//*[@id="HTML1"]/div[1]/table').contains('td','Learn JS').should('be.visible') // it will compare the value under 1st colum of table
        
       // 2nd method to get value in table according to row and colum
        cy.get('table[name=BookTable] > tbody > :nth-child(4) > :nth-child(2)').contains('Animesh').should('be.visible')//it will locate to 4th colom and 2nd row init of table and check the condition
    
    // use of foe each in table to get the value and compared it 
        cy.get('table[name=BookTable] > tbody > tr  td:nth-child(2)').each((em,no,list )=>{ //it will locate to 2th colom of table and run loop
            const text=em.text() // here const with variable text store em in text form
            if(text.includes("Animesh"))// it will check the condition
    
            {
                cy.get('table[name=BookTable] > tbody > tr  td:nth-child(1)').eq(no).then(function(pname) // this is for comparing the value
                {
                    const Bookname= pname.text() 
                    expect(Bookname).to.equal("Learn JS")// it will compare the actual value and value we have given
                })
    
            }
    
        })
    })

    it('try',()=>{

       
// below code is for drag and drop 
cy.get('#draggable') .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })// mousedown will take courser to that location and perform click event $ this is considerd as x and y axis for the reference 
  .trigger('mousemove', { which: 1, pageX: 765, pageY: 150 }) // mousemove will move the curser to that loaction & by change the value of x and y mouse will drag
  .trigger('mouseup') // mouseup will release the click event which is started on 55 line  


  cy.get('#gallery > :nth-child(1) > img').trigger('mousedown', { which: 1, pageX: 800, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 1000, pageY: 400 })
  .trigger('mouseup')

  cy.get('.gallery > .ui-widget-content > .ui-icon').click()

  cy.get('[style="display: list-item; width: 48px;"] > .ui-icon').click()

  
  
    })
    
    
    })