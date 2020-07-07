class LoginPage
{

 visit()
{
cy.visit('https://admin-demo.nopcommerce.com/login')
 

}

fillEmail(value)
{
const fd=cy.get('#Email')
fd.clear()
fd.type(value)
return this
}

fillpassword(value)
{

const fd=cy.get('#Password')
fd.clear()
fd.type(value)
return this 
}

submit()
{

   const  bt=cy.get('[type=submit]')
   bt.click()
}

}

export default LoginPage
