/// <reference types="cypress" />

faker.locale = 'ru';

const randomLastName = faker.name.lastName('male');
const randomFirstName = faker.name.firstName('male'); // Rowan Nikolaus
const randomEmail = faker.internet.email();
const randomPhone = faker.phone.number(' 99 ### ## ##');
const randomPassword = faker.internet.password(); // Kassandra.Haley@erich.biz

import { faker } from '@faker-js/faker';

describe('Registration,Autorization', () =>{
    beforeEach( ()=> {
        cy.visit('https://rozetka.com.ua/',{ failOnStatusCode: false });
    });
    it.only('Registration', () =>{

        cy.viewport(1280, 1080);
        cy.get('a[class="lang__link ng-star-inserted"]')
        .click();

        cy.get('[class="header-actions__item header-actions__item--user"]')
        .click();

        cy.get('div[class="modal__holder modal__holder_show_animation modal__holder--medium"]')
        .should('contain','Вход');
        cy.get('button[class="auth-modal__register-link button button--link ng-star-inserted"]')
        .should('contain','Зарегистрироваться ')
        .click();
        cy.get('div[class="modal__holder modal__holder_show_animation modal__holder--medium"]')
        .should('contain','Регистрация');

        cy.get('[id="registerUserName"]')
        .type(randomFirstName)
        .should('have.value',randomFirstName);

        cy.get('[id="registerUserSurname"]')
        .type(randomLastName)
        .should('have.value',randomLastName);

        cy.get('[id="registerUserPhone"]')
        .type(randomPhone)
        .should('have.value','+380'+ randomPhone);

        cy.get('[id="registerUserEmail"]')
        .type(randomEmail)
        .should('have.value',randomEmail);

        cy.get('[id="registerUserPassword"]')
        .type(randomPassword)
        .should('have.value',randomPassword);
        cy.get('[class="button_type_link form__toggle-password"]').click();

        cy.get('[class="button button--large button--green auth-modal__submit"]').should('contain','Зарегистрироваться').click();
        

    });
   

    it('random check', ()=>{
        cy.viewport(1280, 1080);
    cy.get('a[class="lang__link ng-star-inserted"]')
    .click();

    cy.get('[class="header-actions__item header-actions__item--user"]')
    .click();

    cy.get('div[class="modal__holder modal__holder_show_animation modal__holder--medium"]')
    .should('contain','Вход');
    
    cy.get('[id="auth_email"]')
    .type(randomEmail)
    .should('have.value',randomEmail);

    cy.get('[id="auth_pass"]')
    .type(randomPassword)
    .should('have.value',randomPassword);


    });


});

