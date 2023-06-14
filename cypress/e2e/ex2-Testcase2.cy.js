const { LoginPage } = require('../page-objects/login-page.js')

describe('Test Case 2: Login User with correct email and password', () => {
	beforeEach(() => {
		LoginPage.visit('/')
		cy.fixture('user.json').as('data')
	})
	it('Test Case 2: Login User with correct email and password', function () {
		cy.get('a > img').should('be.visible')
		cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
		cy.get('.login-form > h2').should('be.visible')
		cy.wait(2000)
		LoginPage.fillUsername(this.data.username)
		LoginPage.fillPassword(this.data.password)
		LoginPage.clickSubmit()
		cy.contains(`Logged in as ${this.data.myname}`).should('be.visible')
		// LoginPage.clickDeletebutton()
		// cy.contains('Account Deleted!').should('be.visible')
		// LoginPage.clickContinuebutton()
	})
})
