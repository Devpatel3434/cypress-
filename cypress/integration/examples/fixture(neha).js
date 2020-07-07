// <eference types="cypress" />

describe('MyTestSuite',function() {

    before(function() {
        cy.fixture('p-16demo').then(function(data){
            
        this.data=data

        })

    })


    it('fixturesdemotest', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email').clear().type(this.data.email) //email
        cy.get('input[name=Password').clear().type(this.data.password) //password
        cy.get('input[type=submit]').click() 
    })
})