/// <reference types="cypress" />
/// <reference types="chai" />

describe('dependency_testing_chechk_the_discount', () => {
    

  
    it(' discount', () => {
        cy.visit('http://automationpractice.com/index.php')
        
  
            cy.get('#search_query_top')
            .type('T-Shirts', { delay: 100 })
  
          cy.get('.button-search').click( { delay: 100 })
          
          cy.get('#color_2').click()

          cy.get('#group_1').select('2')
        
          cy.get('[name="Submit"]').click()
  
          cy.get('[title="Continue shopping"]').click()

          cy.get('[alt="My Store"]').click()

          cy.get('.last-mobile-line > .product-container > .right-block > .content_price > .price-percent-reduction').then(($dis) => {
            const val = ($dis.text().trim())

            cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
            cy.get('[title="Continue shopping"]').click()

         cy.get('[title="View my shopping cart"]').click()
            
         cy.get('.price-percent-reduction').should(($dis2) => {

             expect($dis2.text().trim()).to.eq(val)
    
    
         })
    
        })


   
    
            
    
})
})
          
  
          

