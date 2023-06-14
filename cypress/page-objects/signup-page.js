const { Page } = require('./page')

class signupPage extends Page {
	static visit(url) {
		cy.visit(url)
	}

	static fillName(name) {
		cy.get('[data-qa="signup-name"]').type(name)
	}

	static fillEmail(email) {
		cy.get('[data-qa="signup-email"]').type(email)
	}

	static clickSignUp() {
		cy.get('[data-qa="signup-button"]').click()
	}

	static selectTitle() {
		cy.get('#id_gender1').click()
	}

	static fillPassword(password) {
		cy.get('#password').type(password)
	}

	static fillDate(day, month, year) {
		cy.get('[data-qa="days"]').select(day)
		cy.get('[data-qa="months"]').select(month)
		cy.get('[data-qa="years"]').select(year)
	}

	static fillSelect() {
		cy.get('#newsletter').click()
	}

	static fillFirstname(firstname) {
		cy.get('#first_name').type(firstname)
	}

	static fillLastname(lastname) {
		cy.get('#last_name').type(lastname)
	}

	static fillCompany(company) {
		cy.get('#company').type(company)
	}

	static selectAddress(address, country, state, city, zipcode) {
		cy.get('[data-qa="address"]').type(address)
		cy.get('#country').select(country)
		cy.get('[data-qa="state"]').type(state)
		cy.get('[data-qa="city"]').type(city)
		cy.get('[data-qa="zipcode"]').type(zipcode)
	}

	static fillMobilephone(phonenember) {
		cy.get('[data-qa="mobile_number"]').type(phonenember)
	}

	static clickCreateAccount() {
		cy.get('[data-qa="create-account"]').click()
	}

	// static clickContinuebutton() {
	// 	cy.get('[data-qa="continue-button"]').click()
	// }
}
module.exports = { signupPage }
