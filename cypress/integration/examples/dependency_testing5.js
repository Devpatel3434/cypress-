/// <reference types="cypress" />
/// <reference types="chai" />

describe('My First Test', () => {
    

  
    it(' headings', () => {
        cy.visit('http://automationpractice.com/index.php')
        
  
            cy.get('#search_query_top')
            .type('T-Shirts', { delay: 100 })
  
          cy.get('.button-search').click( { delay: 100 })
          
          cy.get('#color_2').click()

          cy.get('#group_1').select('2')
        
          cy.get('[name="Submit"]').click()
  
          cy.get('[title="Continue shopping"]').click()

          cy.get('[alt="My Store"]').click()

          cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

          cy.get('.continue > span').click()
         
          cy.get('[alt="My Store"]').click()
          
         cy.get( '#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

         cy.get('.continue > span').click() 

         cy.get('[alt="My Store"]').click()

         cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        
         cy.get('.continue > span').click() 

         cy.get('[title="View my shopping cart"]').click()
    })

    it('2',()=>{

        
        cy.get('#cart_summary > tbody > tr  td:nth-child(4)').each((em,no,list )=>{
            const text=em.text()
            //if(text.includes("In stock"))
            if(text.includes("-20%"))
    
            {
                cy.get('#cart_summary> tbody > tr  td:nth-child(3)').eq(no).then(function(pname)
                {
                    const name= pname.text()
                    expect(name).to.equal("In stock")
                })
    
            }
            
            //expect(text).to.equal("-20%")
            
            
    })
})
})
          
  
          

