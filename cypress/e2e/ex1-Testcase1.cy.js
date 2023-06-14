const { signupPage } = require('../page-objects/signup-page')

describe('Test Case 1: Register User', () => {
	beforeEach(() => {
		signupPage.visit('/')
		cy.fixture('user.json').as('userData')
	})
	it('Test Case 1: Register User', function () {
		cy.get('a > img').should('be.visible')
		cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
		cy.get('.login-form > h2').should('be.visible')
		signupPage.fillName(this.userData.name)
		signupPage.fillEmail(this.userData.email)
		signupPage.clickSignUp()
		signupPage.fillPassword(this.userData.password)
		cy.contains('Enter Account Information').should('be.visible')
		signupPage.fillDate(
			this.userData.day,
			this.userData.month,
			this.userData.year
		)
		signupPage.fillSelect()
		signupPage.fillFirstname(this.userData.firstname)
		signupPage.fillLastname(this.userData.lastname)
		signupPage.fillCompany(this.userData.company)
		signupPage.selectAddress(
			this.userData.address,
			this.userData.country,
			this.userData.state,
			this.userData.city,
			this.userData.zipcode
		)
		signupPage.fillMobilephone(this.userData.moblile)
		signupPage.clickCreateAccount()
		cy.contains('Account Created!').should('be.visible')
		signupPage.clickContinuebutton()
		signupPage.clickDeletebutton()
		cy.contains('Account Deleted!').should('be.visible')
		signupPage.clickContinuebutton()
	})
})
