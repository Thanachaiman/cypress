describe('API 1: Get All Products List', () => {
	it('API 1: Get All Products List', () => {
		const reqBody = { name: 'test', salary: '123', age: '23' }
		cy.request({
			method: 'GET',
			url: 'https://automationexercise.com/api/productsList',
		}).as('res')

		cy.get('@res').its('status').should('eq', 200)
		cy.log('@res')
	})
})
