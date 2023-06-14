describe('API 3: Get All Brands List', () => {
	it('API 3: Get All Brands List', () => {
		cy.request({
			method: 'GET',
			url: 'https://automationexercise.com/api/brandsList',
			body: '5555',
		}).as('res')

		cy.get('@res').its('status').should('eq', 200)
		// cy.log('@res')
	})
})
