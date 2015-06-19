describe('Test', function () {

	it('loading', function () {
		browser.get('http://localhost:8080');

		var rows = element.all(by.repeater('todo in todos'));

		rows.count().then(function(count) {

			element(by.model('form.descrizione')).sendKeys('prova')

			element(by.buttonText('Add')).click()

			expect(rows.count()).toBe(count + 1)

			console.log(rows.last())
		})


	});
	
});