describe('API 1: Get All Products List', () => {
	it('API 1: Get All Products List', () => {
		cy.request({
			method: 'GET',
			url: 'https://automationexercise.com/api/productsList',
		}).as('res')

		cy.get('@res').its('status').should('eq', 200)
		cy.get('@res').its('body').should('not.be.NaN')
	})
})
