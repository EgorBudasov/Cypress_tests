export class MobilePayment {
    typePhone(phone){
        cy.get('[data-qa-node="phone-number"]')
          .type(phone);
    }
    typeAmount(mobileAmount){
        
      cy.get('[data-qa-node="amount"]')
        .clear()
        .type(mobileAmount);
    }
    typeDebitCardData(cardNumber,expDate,cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv);
    }
    submitPayment(submit){
        cy.get('button[type="submit"]')
           .click();
    }
    phoneNumberCheck(checkPhone){
        cy.get('div[class="sc-chPdSV jAFnfe"]')
          .should('contain.text',checkPhone);
   }
   debitCardCheck(cardCheck){
       cy.get('[data-qa-node="card"]')
          .should('contain.text',cardCheck);
   }
   checkMobileAmount(mobileAmount){
     cy.get('div[data-qa-node="amount"]')
        .should('contain.text',mobileAmount);
   }
   checkComissionPhone(comission){
    cy.get('[data-qa-node="commission"]')
    .should('contain.text',comission);
   }
   checkCurrency(currency){
    cy.get('[data-qa-node="commission-currency"]')
    .should('contain.text',currency);
   }



}
export const mobilePayment = new MobilePayment ();