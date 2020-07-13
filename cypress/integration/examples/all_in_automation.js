/// <reference types="cypress" />





describe('END-TO-END testing', () => {
    

  
    it('Use of all commands ()', () => {
        cy.visit('http://automationpractice.com/index.php') // it will redirect to this url website. 
        
  
        cy.get('#search_query_top').type('T-Shirts', { delay: 100 }) //This is  a selector used to filter matching DOM elements on this webpage & type the context which we have give like T-shirt & delay will used to set typing speed. 
  
        cy.get('.button-search').click( { delay: 100 })// it will locate and perform click event 
        
        // below code is used for dependency testing
        cy.get('.right-block > .content_price > .price').then(($data) => { //it will get the value and store in $data
            const txt = ($data.text().trim()) // here const with variable txt store $data in text form and also trime is used to remove the extra space
  
        cy.get('#color_2').click()

        // again depandency testing code which compare store value  use in early code line 20 & 21
        cy.get('#our_price_display').should(($data2) => {

            expect($data2.text()).to.eq(txt) // this will compare the current value with stored value 
          })
  
        cy.get('#thumb_4').trigger('mouseover') // this is will take mouse curser to that loaction 
  
        cy.get('#group_1').select('2') // this will select 1 option from dropdown menu 
          
        cy.get('[name="Submit"]').click() //it will locate and perform click event
  
        cy.get('[title="Continue shopping"]').click() // it will locate and perform click event
  
        cy.get('[title="View my shopping cart"]').trigger('mouseover') // this is will take mouse curser to that loaction 
  
        cy.get('[alt="My Store"]').click() // it will locate and perform click event
          
        
        cy.scrollTo('top') // use to scroll the page to top 
        /*cy.scrollTo('bottom') // use to scroll the page to bottom
        cy.scrollTo('center')*/ // use to scroll the page to center


        // dependency testing code store the value for future use  
        cy.get('.last-mobile-line > .product-container > .right-block > .content_price > .price-percent-reduction').then(($dis) => {
            const val = ($dis.text().trim())
            cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
            cy.get('[title="Continue shopping"]').click()

         cy.get('[title="View my shopping cart"]').click()

           //  again depandency testing code which compare store value  use in early code line 50 & 51
         cy.get('.price-percent-reduction').should(($dis2) => {

             expect($dis2.text().trim()).to.eq(val)
         })
        
        

         // below code is example of for each loop in table form 
            cy.get('#cart_summary > tbody > tr  td:nth-child(4)').each((em,no,list )=>{ //it will locate to 4th colom of table and run loop
                const text=em.text() 
                
                if(text.includes("-20%")) // it will check the condition
        
                {
                    cy.get('#cart_summary> tbody > tr  td:nth-child(3)').eq(no).then(function(pname) //it will locate to 3rd colom and run loop
                    
                    {
                        const name= pname.text()
                        expect(name).to.equal("In stock") // it will compare value full fill the condition
                    })
        
                }
            })
                
                
                
                
      

     

     
    
  
         
          
         cy.get('.cart_navigation > .button > span').click()
        //cy.xpath('//a[contains(@href,"step=1") and contains(@title,"Proceed to checkout")]').click()
        
        cy.get('#email').type('rocky3456@gmail.com') // locate and type the context which we have give like rocky3456@gmail.com
            
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
        
        // here we use the fixture to take value from example.json
        cy.fixture('example').then(function(data){
            this.data=data // here this key word is use to make data use in any  other it block
        })

        cy.get('.first_item > .history_price').should(function($data2) {

            expect($data2.text().trim()).to.eq(this.data.totle_price) // here totle price will get value which is passed in example.json in fixture folder
         })
        
    
       
      
    })
})

cy.get('#contact-link > a').click()
cy.get('[id="id_contact"]').select('Customer service')
cy.get('#message')
.type('it nice to visdvdvd  it the website',{ delay: 100 })

const yourFixturePath = 'upload.png'; // this will store image in var
cy.get('#fileUpload').attachFile(yourFixturePath); // this is file uploade code use it as this syntex 

// cy.get('#id_order')
//.type('asdfbnhgfds')

cy.get('#submitMessage').dblclick()
cy.get('[alt="My Store"]').click()


cy.get('.logout').click()
})
      
    })