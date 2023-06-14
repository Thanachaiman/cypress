describe('API 9: DELETE To Verify Login', () => {
	it('API 9: DELETE To Verify Login', () => {
		cy.request({
			method: 'DELETE',
			url: 'https://automationexercise.com/api/verifyLogin',
			body: {},
		}).then(response => {
			// cy.log(response)
			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.contain(
				'This request method is not supported.'
			)
		})
	})
})
