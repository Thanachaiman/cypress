const { ApiPage } = require('../page-objects/api-page')

describe('API 1: Get All Products List', () => {
	let apiData
	before(() => {
		cy.fixture('api-data.json').then(fData => {
			apiData = fData
		})
	})
	it('Get All Products List', () => {
		cy.request({
			method: 'GET',
			url: '/api/productsList',
		}).as('res')

		ApiPage.checkStatus('@res', apiData.status.ok)
		ApiPage.checkIsNotNan('@res')
	})
})
