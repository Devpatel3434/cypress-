// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

import 'cypress-iframe';

Cypress.Commands.add("login",(email,password)=>{

    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('input[name=Email]').clear().type(email)
    cy.get('input[name=Password]').clear().type(password)
    cy.get('[type=submit]').click()


})

Cypress.Commands.add("register",(email)=>{

    
    cy.get('#email_create').clear().type(email)
    
    cy.get('#SubmitCreate').click()


})

Cypress.Commands.add("input",()=>{

cy.visit('http://automationpractice.com/index.php?id_category=5&controller=category')
cy.get('.right-block > .content_price > .price').then(($data) => {
    const txt = ($data.text().trim())
})
})