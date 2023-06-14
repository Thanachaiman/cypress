describe('API 4: PUT To All Brands List', () => {
	it('API 4: PUT To All Brands List', () => {
		cy.request({
			method: 'PUT',
			url: 'https://automationexercise.com/api/brandsList',
			failOnStatusCode: false, // Replace with the URL of your API endpoint
			body: {},
			headers: {},
		}).then(response => {
			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.contain(
				'This request method is not supported.'
			)
		})
	})
})
