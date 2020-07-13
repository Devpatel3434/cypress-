

class LoginPagess { // created with class with name Loginpagess
   visit() 
   {
    cy.visit("https://the-internet.herokuapp.com/login"); // redirected to this url
    cy.url().should("include", "login"); // compare the url of redirected page
  }

  

fillusername(value)
{
const fd=cy.get('#username') // this line work as locater
fd.clear() // clear the filled
fd.type(value)  //  type methode  use to enter value
return this // this abouve methode of fillusername belong to this Login page 
}

fillpassword(value)
{

const fd=cy.get('#password')
fd.clear()
fd.type(value)
return this 
}
}
export default LoginPagess // this will enable to access this login page in another file