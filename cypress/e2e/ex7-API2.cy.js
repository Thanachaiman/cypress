const { ApiPage } = require('../page-objects/api-page')

describe('API 2: POST To All Products List', () => {
	let apiData
	before(() => {
		cy.fixture('api-data.json').then(fData => {
			apiData = fData
		})
	})
	it('POST To All Products List', () => {
		cy.request({
			method: 'POST',
			url: '/api/productsList',
			failOnStatusCode: false, // Replace with the URL of your API endpoint
			form: true,
			json: true,
			body: { search_product: 'jean' },
			headers: {
				accept: 'application/json',
			},
		}).as('res')
		ApiPage.checkResponseCode('@res', apiData.status.methodNotAllowed)
		ApiPage.checkMessage('@res', apiData.message.responseMessage405)
	})
})
