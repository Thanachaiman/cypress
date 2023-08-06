const { Page } = require('./page')
class ApiPage extends Page {
	static checkStatus(element, status) {
		cy.get(element).its('status').should('eq', status)
	}

	static checkIsNotNan(element) {
		cy.get(element).its('body').should('not.be.NaN')
	}

	static checkResponseCode(element, status) {
		cy.get(element).its('body').should('contain', `"responseCode": ${status}`)
	}

	static checkResponseCodeWithExpect(element, status) {
		expect(element).to.eq(status)
	}

	static checkMessage(element, message) {
		cy.get(element).its('body').should('contain', `"message": "${message}"`)
	}

	static checkMessageWithExpect(element, message) {
		expect(element).to.contain(message)
	}
}

module.exports = { ApiPage }
