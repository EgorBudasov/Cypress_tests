describe('Rozetka', () => {
    beforeEach(() =>{
        cy.visit('https://rozetka.com.ua/',{ failOnStatusCode: false });   //Перед каждым тестом будет заходить на сайт
    });
    
    it('search', () =>{
       
        // cy.visit('https://rozetka.com.ua/',{ failOnStatusCode: false });
        cy.viewport(1280, 1080);
        cy.get('a[class="lang__link ng-star-inserted"]').click();
        cy.get('[class="button button--medium button--with-icon menu__toggle ng-star-inserted"]').click();
        cy.getByClass("'menu__hidden-content ng-star-inserted'").should('be.visible');//getByClass это просто класс сохраненный в коммандс js.
        cy.get('li').eq(0).click().should('contain','Ноутбуки и компьютеры');
       });
         
       context('Shop cart', () => {
        it.only('Shop : Adding an item to the cart', () => {
            cy.viewport(1280, 1080);

            cy.get('a[class="lang__link ng-star-inserted"]')
            .click();

            cy.get('input[class="search-form__input ng-untouched ng-pristine ng-valid"]')
            .type('Ром')
            .should('have.value','Ром');

            cy.get('[class="button button_color_green button_size_medium search-form__submit ng-star-inserted"]')
            .click();

            //cy.get('a[class="btn-link-i exponea-close{timeout : 5000}"]')
            //.contains('Да, исполнилось')
            //.click();

            cy.get('span[class="goods-tile__title"]')
            .contains(" Ром Dead Man's")
            .click();
            cy.location('pathname')
              .should('eq','/dead_man_s_fingers_dmf_5011166061601/p260891781/');

            cy.get('button[class="buy-button button button--with-icon button--green button--medium ng-star-inserted"]')
            .should('exist')
            .contains('Купить')
            .click();

            cy.contains('Корзина');
            


       });
       

       });
        
    });
