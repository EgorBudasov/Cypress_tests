export class Transfers {
    typeDebitCardData(cardNumber,expDate,cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv);
    }
    typeNameSurname(name,surname){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name);

        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(surname);
    }
    typeReceiverCard(recipientCard) {
        cy.get('[data-qa-node="numberreceiver"]')
            .type(recipientCard);
    }
    typeReceiverNameSurname(recipientName,recipientSurname){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(recipientName)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(recipientSurname);
    }
    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .type(amount);
    }
    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type(comment);
    }
    submitPayment(){
        cy.get('[class="sc-VigVT hcHAAV"]')
        .click();
    }
    checkDebitAndReceiverCards(debitCard,receiverCard){
        cy.get('[data-qa-node="payer-card"]')
        .should('have.text',debitCard);

        cy.get('[data-qa-node="receiver-card"]')
        .should('have.text',receiverCard);
    }
    checkDebitAmountAndTotalAmount(debitAmount,totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text',debitAmount)
            .get('[class="total_Gep8WAZQ3T"]')
            .find('div')
            .contains(totalAmount);
    }
    checkComission(comission){
        cy.get('[data-qa-node="payer-currency"]')
        .should('have.text',comission);
    }


}

export const transfers = new Transfers ();