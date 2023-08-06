const { Page } = require('./page')

class LoginPage extends Page {
	static fillUsername(username) {
		cy.get('[data-qa="login-email"]').type(username)
	}

	static fillPassword(password) {
		cy.get('[data-qa="login-password"]').type(password)
	}

	static clickSubmitButton() {
		cy.get('[data-qa="login-button"]').click()
	}

	static clickLoginButton() {}
}
module.exports = { LoginPage }
