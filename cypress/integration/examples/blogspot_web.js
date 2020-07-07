
describe('must try and try',()=>{

it('1st',()=>{
cy.visit('http://testautomationpractice.blogspot.com/')

cy.get('#Wikipedia1_wikipedia-search-input').click()
.type('bugatti chiron')
cy.get('.wikipedia-search-button').click()
cy.get('#Wikipedia1_wikipedia-search-results > :nth-child(1) > a').click()

//cy.visit ('https://en.wikipedia.org/wiki/Bugatti_Chiron')
//cy.title().should('eq','Bugatti Chiron - Wikipedia')




})

it('2nd',()=>{

    cy.get(':nth-child(7) > a').trigger('mouseover')

    cy.get(':nth-child(8) > a').trigger('mouseover')

    cy.get('#age').click().type('19')
})
// table 
it ('3rd',()=>{
   cy.xpath('//*[@id="HTML1"]/div[1]/table').contains('td','Learn JS').should('be.visible')
    //cy.get('table[name=BookTable]')
    cy.get('table[name=BookTable] > tbody > :nth-child(4) > :nth-child(2)').contains('Animesh').should('be.visible')


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