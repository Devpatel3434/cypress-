/// <reference types="cypress" />


describe('My First Test', () => {
    

  
  it(' headings', () => {
      cy.visit('http://automationpractice.com/index.php')
      

          cy.get('#search_query_top')
          .type('T-Shirts', { delay: 100 })

        cy.get('.button-search').click( { delay: 100 })

        cy.get('#color_2').click()

        cy.get('#thumb_4').trigger('mouseover')

        cy.get('#group_1').select('2')
        
        cy.get('[name="Submit"]').click()

        cy.get('[title="Continue shopping"]').click()

        cy.get('[title="View my shopping cart"]').trigger('mouseover')

        cy.get('[alt="My Store"]').click()

        //cy.scrollTo('bottom')

        cy.scrollTo('center')

       // cy.scrollTo('top')


       cy.get('[title="View my shopping cart"]').click()

       
        
       cy.get('.cart_navigation > .button > span').click()

       
       
       
       
       
       //cy.xpath('//a[contains(@href,"step=1") and contains(@title,"Proceed to checkout")]').click()
      
      cy.get('#email_create')
      .type('hello32e4234@gmail.com')

       /*cy.reload()
       cy.title().should('eq','Login - My Store')

       cy.go('back')
       cy.title().should('eq','Order - My Store')

       cy.go('back')*/

        cy.get('#SubmitCreate').click()

       //cy.title().should('eq','Login - My Store')
    
        })   
        
       /*it ('5th', ()=>{

          cy.get('[id="contact-link"]').click()
          cy.get('[id="id_contact"]').select('Customer service')
          cy.get('#message')
          .type('it nice to visdvdvd  it the website',{ delay: 100 })

          cy.get('#email')
          .type('dev123@gnu.ac.in', { delay: 100 })

         // cy.get('#id_order')
          //.type('asdfbnhgfds')

          cy.get('#submitMessage').dblclick()
          cy.get('[alt="My Store"]').click()
        })

         




          it ('7th', ()=>{
            cy.get('.login').click()

            cy.get('#email_create')
            .type('devpatel5643@gnu.ac.in',{delay: 50})

            //cy.get('.logo').click()

            cy.get('#SubmitCreate').click()

           

          })*/

        /* it ('8th', ()=>{
          cy.get('#id_gender1  [type="radio"]')
           .check('radio1').should('be.checked')
           
          cy.get('#id_gender2  [type="radio"]')
           .check('radio2').should('be.checked')
           
          cy.get('#id_gender1  [type="radio"]')
           .check('radio1').should('be.checked')
             
          cy.get('#customer_firstname')
            .type('DEV',{delay: 50})

          cy.get('#customer_lastname')
            .type('PATEL',{delay: 50})
            
          cy.get('#email')
            .value().should('eq','dev23@gmail.com')

          cy.get('#passwd')  
          .type('DEV_patel' )
          
          cy.get('#days').select('24')

          cy.get('#months').select('6')

          cy.get('#years').select('2000')

          cy.get('#newsletter [type="checkbox"]').not('[disabled]')
          .check().should('be.checked')
           
          cy.get('#optin [type="checkbox"]').not('[disabled]')
          .check().should('be.checked')



         
          })*/




        
        
  })