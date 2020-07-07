/// <reference types="cypress" />





describe('My First Test', () => {
    

  
    it(' headings', () => {
        cy.visit('http://automationpractice.com/index.php')
        
  
        cy.get('#search_query_top').type('T-Shirts', { delay: 100 })
  
        cy.get('.button-search').click( { delay: 100 })
        
        cy.get('.right-block > .content_price > .price').then(($data) => {
            const txt = ($data.text().trim())
  
        cy.get('#color_2').click()

        cy.get('#our_price_display').should(($data2) => {

            expect($data2.text()).to.eq(txt)
          })
  
        cy.get('#thumb_4').trigger('mouseover')
  
        cy.get('#group_1').select('2')
          
        cy.get('[name="Submit"]').click()
  
        cy.get('[title="Continue shopping"]').click()
  
        cy.get('[title="View my shopping cart"]').trigger('mouseover')
  
        cy.get('[alt="My Store"]').click()
  
        //cy.scrollTo('bottom')
        //cy.scrollTo('center')
        cy.scrollTo('top')

        cy.get('.last-mobile-line > .product-container > .right-block > .content_price > .price-percent-reduction').then(($dis) => {
            const val = ($dis.text().trim())
            cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
            cy.get('[title="Continue shopping"]').click()

         cy.get('[title="View my shopping cart"]').click()
            
         cy.get('.price-percent-reduction').should(($dis2) => {

             expect($dis2.text().trim()).to.eq(val)
         })
        
        

        
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
            })
                
                
                
                
      

     

     
    
  
         
          
         cy.get('.cart_navigation > .button > span').click()
        //cy.xpath('//a[contains(@href,"step=1") and contains(@title,"Proceed to checkout")]').click()
        
        cy.get('#email').type('rocky3456@gmail.com')
            
        cy.get('#passwd').type('rocky3434')
        cy.get('#SubmitLogin > span').click()

        cy.get('#ordermsg > .form-control').type('i want my packeg as soon as possible', { delay: 100 })
        cy.get('.cart_navigation > .button > span').click()

        cy.get('#cgv').not('[disabled]')
        .check().should('be.checked')
        cy.get('.cart_navigation > .button > span').click()

        cy.get('.bankwire').click()

        cy.get('#cart_navigation > .button > span').click()
        
        cy.get('.account > span').click()
        cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').click()

        cy.fixture('example').then(function(data){
            this.data=data
        })

        cy.get('.first_item > .history_price').should(function($data2) {

            expect($data2.text().trim()).to.eq(this.data.totle_price)
         })
        
    
       
      
    })
})

cy.get('#contact-link > a').click()
cy.get('[id="id_contact"]').select('Customer service')
cy.get('#message')
.type('it nice to visdvdvd  it the website',{ delay: 100 })

const yourFixturePath = 'upload.png';
cy.get('#fileUpload').attachFile(yourFixturePath);

// cy.get('#id_order')
//.type('asdfbnhgfds')

cy.get('#submitMessage').dblclick()
cy.get('[alt="My Store"]').click()


cy.get('.logout').click()
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
              })*/
 /* cy.reload()
         cy.title().should('eq','Login - My Store')
  
         cy.go('back')
         cy.title().should('eq','Order - My Store')
  
         cy.go('back')
  
          //cy.get('#SubmitCreate').click()
  
         //cy.title().should('eq','Login - My Store')*/
              
          
  
  
  
  
          
          
    })