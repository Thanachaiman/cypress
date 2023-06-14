const { LoginPage } = require('../page-objects/login-page.js')

describe('Test Case 3: Login User with incorrect email and password', () => {
	beforeEach(() => {
		LoginPage.visit('/')
		cy.fixture('user.json').as('data')
	})
	it('Test Case 3: Login User with incorrect email and password', function () {
		cy.get('a > img').should('be.visible')
		cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
		cy.get('.login-form > h2').should('be.visible')
		cy.wait(2000)
		LoginPage.fillUsername(this.data.invalidusername)
		LoginPage.fillPassword(this.data.invalidpassword)
		LoginPage.clickSubmit() /
			cy.contains('Your email or password is incorrect!').should('be.visible')
	})
})
