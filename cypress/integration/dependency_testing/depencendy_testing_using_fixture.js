
describe('dependency using fixture',function(){
    before(function() 
    {
        cy.fixture('example').then(function(data){   // this will loacate to example.json in fixture folder to get/use the value in it
        
        this.data=data
    
        })
      })
it('comparing price ',function(){
    //cy.input()
    cy.visit('http://automationpractice.com/index.php?id_product=1&controller=product#/size-s/color-blue')
    
    
    //const txt1= require('../examples/12_3')
    cy.get('#our_price_display').should(function($data2) {

       expect($data2.text()).to.eq(this.data.price) // 
    })

})

})