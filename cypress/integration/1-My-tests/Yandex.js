
describe('Тестирование Yandex.ru', function () {
	it('Проверка, что при поиске котят на Yandex.ru в выдаче есть картинки по запросу', function () {
		cy.visit('https://yandex.ru');
		cy.get('#text').type('котята').type('{enter}');
		cy.contains('Картинки по запросу «котята»');

	})
})

