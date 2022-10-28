/// <reference types="cypress" />

describe('Rozetka user data', () => {
beforeEach(() =>{
    cy.visit('https://rozetka.com.ua/');
});
it.only('capcha test', () =>{
    cy.viewport(1280, 1080);

    cy.get('a[class="lang__link ng-star-inserted"]')
    .click()
    .should('be.focused');

    cy.get('[class="header-actions__item header-actions__item--user"]')
    .click();

    cy.get('input[id="auth_email"]')
    .focus()
    .type('+380992374432 {enter}')
    //.should('have.value','+380992374432');
    
    .blur()

    cy.get('input[id="auth_pass"]')
    .type('EE2234567ee')
    .should('have.value','EE2234567ee');

   cy.get('.auth-modal__remember-checkbox')
   .click()
   .should('be.visible');

   cy.contains('Войти')
   .should('be.visible')
   .click();

  // cy.contains('Необходимо подтвердить, что вы не робот')
   //.should('be.visible');
} );

it('change name', ()=>{
    cy.visit('https://rozetka.com.ua/cabinet/orders/');
});

});