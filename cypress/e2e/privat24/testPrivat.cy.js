/// <reference types="cypress" />

import{ transfers} from "../../support/pages/transfers"//подключается файл с кодом
import{mobilePayment} from "../../support/pages/mobilePaiment"

it('Test transver', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card')
        .viewport(1080,900)
        .wait(2000);

        transfers.typeDebitCardData('4552331448138217','0524','528');//
        transfers.typeNameSurname('Simon','Cassady');
        transfers.typeReceiverCard('4006895689048337');
        transfers.typeReceiverNameSurname('Peter','Edwards');
        transfers.typeAmount('400');
        transfers.typeComment('Sypress automation test');
        transfers.submitPayment();
        transfers.checkDebitAndReceiverCards('4552 3314 4813 8217','4006 8956 8904 8337');
        transfers.checkDebitAmountAndTotalAmount('400 UAH','518.49 UAH');
        transfers.checkComission('118.49 UAH');



});

it.only('mobile payment', () => {
    cy.visit('https://next.privat24.ua/mobile');

    mobilePayment.typePhone('992374432');
    mobilePayment.typeAmount('130');
    mobilePayment.typeDebitCardData('4552331448138217','0524','528');//
    mobilePayment.submitPayment();
    mobilePayment.phoneNumberCheck('+380992374432');
    mobilePayment.debitCardCheck('4552 **** **** 8217');
    mobilePayment.checkMobileAmount('130');
    mobilePayment.checkComissionPhone('4');
    mobilePayment.checkCurrency('UAH');
    

});
 
