describe('cust cmd',()=>{

it('login',()=>{

cy.visit('https://admin-demo.nopcommerce.com/login')
cy.get('input[name=Email]').clear().type('admin@yourstore.com')
cy.get('input[name=Password]').clear().type('admin')
cy.get('[type=submit]').click()

})

it('login_2',()=>{

    cy.login('admin@yourstore.com','admin')
    
    })
    it('login_3',()=>{

        cy.login('admin@yourstore.com','admin')
        
        })


})