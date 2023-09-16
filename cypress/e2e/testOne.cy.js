/// <reference types= "cypress" />


describe('Login page',()=>{
  it('Test one', () => {
  cy.visit("https://www.saucedemo.com/");

   cy.get('[data-test="username"]').type("standard_user");

   cy.get('[data-test="password"]').type("secret_sauce");

   cy.get('[data-test="login-button"]').click();

   //cy.get('[data-test="add-to-cart"]').click({ multiple: true, force: true })

   cy.get('button')
  .click({ multiple: true, force: true })


  });

  // it("Test two",()=>{
  //   cy.visit("https://www.google.com")

    
  // })
})
