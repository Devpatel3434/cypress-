describe('cust cmd',()=>{
// trying to login in  normal way .
it('login',()=>{

cy.visit('https://admin-demo.nopcommerce.com/login')
cy.get('input[name=Email]').clear().type('admin@yourstore.com')
cy.get('input[name=Password]').clear().type('admin')
cy.get('[type=submit]').click()

})
// try login using custom command created in command.js under support
it('login_2',()=>{

    cy.login('admin@yourstore.com','admin') // passing directly value  locater already define in command.js
    
    })
    //try login using custom command created in command.js under support
    it('login_3',()=>{

        cy.login('admin@yourstore.com','admin')
        
        })


})