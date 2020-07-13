
describe('must try and try',()=>{
   


// table 
it ('3rd',()=>{


    cy.visit('http://testautomationpractice.blogspot.com/')
    // 1st and simple methode to get any value inside the table
   cy.xpath('//*[@id="HTML1"]/div[1]/table').contains('td','Learn JS').should('be.visible')
    //cy.get('table[name=BookTable]')
    // 2nd method to get value in table according to row and colum
    cy.get('table[name=BookTable] > tbody > :nth-child(4) > :nth-child(2)').contains('Animesh').should('be.visible')

    // use of foe each in table to get the value and compared it 
    cy.get('table[name=BookTable] > tbody > tr  td:nth-child(2)').each((em,no,list )=>{
        const text=em.text()
        if(text.includes("Animesh"))

        {
            cy.get('table[name=BookTable] > tbody > tr  td:nth-child(1)').eq(no).then(function(pname)
            {
                const Bookname= pname.text()
                expect(Bookname).to.equal("Learn JS")
            })

        }

    })
})


})