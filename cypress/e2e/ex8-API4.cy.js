const { ApiPage } = require('../page-objects/api-page')

describe('API 4: PUT To All Brands List', () => {
	let apiData
	before(() => {
		cy.fixture('api-data.json').then(fData => {
			apiData = fData
		})
	})
	it('PUT To All Brands List', () => {
		cy.request({
			method: 'PUT',
			url: '/api/brandsList',
			failOnStatusCode: false, // Replace with the URL of your API endpoint
			body: {},
			headers: {},
		}).then(response => {
			ApiPage.checkResponseCodeWithExpect(
				response.body.responseCode,
				apiData.status.methodNotAllowed
			)
			ApiPage.checkMessageWithExpect(
				response.body.message,
				apiData.message.responseMessage405
			)
		})
	})
})
