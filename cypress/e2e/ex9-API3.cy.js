const { ApiPage } = require('../page-objects/api-page')

describe('API 3: Get All Brands List', () => {
	let apiData
	before(() => {
		cy.fixture('api-data.json').then(fData => {
			apiData = fData
		})
	})
	it('Get All Brands List', () => {
		cy.request({
			method: 'GET',
			url: '/api/brandsList',
		}).as('res')

		ApiPage.checkStatus('@res', apiData.status.ok)
		ApiPage.checkIsNotNan('@res')
	})
})
