class LoginPage
{

 visit()
{
cy.visit('https://admin-demo.nopcommerce.com/login')
 

}

fillEmail(value)
{
const fd=cy.get('#Email') // this line work as locater
fd.clear() // clear the filled
fd.type(value) //  type methode  use to enter value
return this //   this abouve methode of fillEmail belong to this Login page 
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

export default LoginPage // this will enable to access this login page in another file
