describe('API 2: POST To All Products List', () => {
	it('API 2: POST To All Products List', () => {
		cy.request({
			method: 'POST',
			url: 'https://automationexercise.com/api/productsList',
			failOnStatusCode: false, // Replace with the URL of your API endpoint
			form: true,
			body: { search_product: 'jean' },
		}).then(response => {
			cy.log(response.body)
			cy.log(Object.keys(response))

			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.contain(
				'This request method is not supported.'
			)
		})

		// cy.log('@res')
	})
})
