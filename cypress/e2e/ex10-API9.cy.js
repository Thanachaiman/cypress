describe('API 9: DELETE To Verify Login', () => {
	it('API 9: DELETE To Verify Login', () => {
		cy.request({
			method: 'DELETE',
			url: 'https://automationexercise.com/api/verifyLogin',
			body: {},
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
