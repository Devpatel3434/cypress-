/// <reference types="cypress" />

describe('try',()=>{

    
it('1st',()=>{
cy.visit('https://www.amazon.in/')

cy.get('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click()

//cy.get(':nth-child(12) > .a-row > :nth-child(1) > .a-list-item > .a-declarative > .a-checkbox > label > input').not('[disabled]')
//.check().should('be.checked')
cy.xpath('//*[@id="leftNav"]/ul[5]/div/li[2]/span/span/div/label/input').not('[disabled]')
.check().should('be.checked')
cy.xpath('//*[@id="p_36/1318507031"]/span/a').click()

//cy.xpath('//*[@id="p_n_is_cod_eligible/4931671031"]/span/a/div').not('[disabled]')
//cy.xpath('//*[@id="p_n_is_cod_eligible/4931671031"]/span/a/div/label/input')
//.check().should('be.checked')
cy.get('[data-asin="B08444S68Q"] > :nth-child(1) > .celwidget > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > :nth-child(1) > .sg-col-inner > .a-spacing-none > .rush-component > .a-link-normal > .a-section > .s-image').click()



})

it('2nd',()=>{
cy.visit('https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B08444S68Q/ref=sr_1_10?dchild=1&fst=as%3Aoff&qid=1592423846&refinements=p_89%3ASamsung%2Cp_36%3A1318507031&rnid=1318502031&s=electronics&sr=1-10')
    

})

})