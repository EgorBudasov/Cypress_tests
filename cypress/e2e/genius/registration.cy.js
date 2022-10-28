/// <reference types="cypress" />

describe('registration', () => {
// beforeEach(() => {
//  cy.visit('https://genius.space/');
// });
it('autorization', () =>{
    cy.visit('https://genius.space/');
 cy.get('[class="lang-item lang-item-2 lang-item-ru"]').click();
 cy.contains('Войти').click();
});

it.only('entert to te site', () => {
        cy.visit('https://edu.genius.space/ru/login');
        cy.get('input[type="email"]')
        .type('egor.budasow@gmail.com')
        .should('have.value', 'egor.budasow@gmail.com');

        cy.get('input[type="password"]')
        .type('EE2234567ee')
        .should('have.value', 'EE2234567ee');

        cy.get('button[class="main-button"]')
        .click();
        cy.location('href')
        .should('eq','https://edu.genius.space/uk/courses?category=all');

        cy.get('div[index="1"]')
        .children('[href="/uk/courses/audiokurs-zvichki-milionera"]')
        .click();
        cy.location('href')
        .should('eq', 'https://edu.genius.space/uk/courses/audiokurs-zvichki-milionera/dashboard');




});
});