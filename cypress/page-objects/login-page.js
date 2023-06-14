const { Page } = require('./page')

class LoginPage extends Page {
	static visit(url) {
		cy.visit(url)
	}

	static fillUsername(username) {
		cy.get('[data-qa="login-email"]').type(username)
	}

	static fillPassword(password) {
		cy.get('[data-qa="login-password"]').type(password)
	}

	static clickSubmit() {
		cy.get('[data-qa="login-button"]').click()
	}
}
module.exports = { LoginPage }
