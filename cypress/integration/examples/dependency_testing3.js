/// <reference types="cypress" />
/// <reference types="chai" />

describe('My First Test', () => {
  const txt1 = ('$16.51')    

  
    it(' headings', () => {
        cy.visit('http://automationpractice.com/index.php')
        
  
            cy.get('#search_query_top')
            .type('T-Shirts', { delay: 100 })
  
          cy.get('.button-search').click( { delay: 100 })
          
          cy.get('.right-block > .content_price > .price').then(($data) => {
            const txt = ($data.text().trim())
            
          
         // cy.get('[title="Faded Short Sleeve T-shirts"]').then(($btn) => {
         // const txt = $btn.text()
  
          cy.get('#color_2').click()

          
          cy.get('#our_price_display').should(($data2) => {

            expect($data2.text()).to.eq(txt)
          })
  
          

//cy.get('.cart_description > .product-name > a').should(($btn2) => {
           // expect($btn2.text()).not.to.eq(txt)

           //cy.get('#product_price_1_4_0 > .price').should(($btn2) => {

             //expect($btn2.text()).not.to.eq(txt)
            
        })
    })
})  