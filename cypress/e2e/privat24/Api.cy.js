
/// <reference types="cypress" />

it.only('Api test get', () =>{
    cy.request('https://restful-booker.herokuapp.com/booking/69')
      .then((responce) =>{
        console.log(responce);
      });
  
 });

