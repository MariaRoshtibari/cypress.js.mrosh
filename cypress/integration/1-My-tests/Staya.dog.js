
describe('Тестирование форма логина и пароля', function () {

    it('Позитивный кейс - верные логин и пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mroshtibary@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Staya2022');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
    })

     it('Негативный кейс - верный логин и неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mroshtibary@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Staya2021');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
     })
 
})


