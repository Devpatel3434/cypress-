


describe('My First Test', () => {
  before(function() {
    cy.fixture('example').then(function(data){ // this will loacate to example.json in fixture folder to get/use the value in it
        
    this.data=data // this key word used to use tha value store in data in outside of this block also

    })

})
    

  
  it(' headings', function() 
   {
      cy.visit('http://automationpractice.com/index.php') // visit to this url
      

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

      

        cy.scrollTo('center')

       


       cy.get('[title="View my shopping cart"]').click()

       
        
       cy.get('.cart_navigation > .button > span').click()
      //cy.xpath('//a[contains(@href,"step=1") and contains(@title,"Proceed to checkout")]').click() ( another method to get)
      
       
       
       
       
       
      
      //cy.get('#email_create').type('absuc27e8y327@gmail.com')
      cy.get('#email_create').type(this.data.emails) //Use this for fixture
       //cy.get('#email_create').should('contain', this.data.emails)

        cy.get('#SubmitCreate').click()

       
    
        })   

})