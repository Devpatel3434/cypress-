describe('My First Test', () => {
    

  
    it(' headings', () => {
        cy.visit('http://automationpractice.com/index.php?controller=order')
        
  
          


           cy.get('#product_price_1_4_0 > .price').should(($btn2) => {

             expect($btn2.text()).not.to.eq(txt)
          
           })
    })
})  