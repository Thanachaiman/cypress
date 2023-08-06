const { LoginPage } = require('../page-objects/login-page.js')

describe('Test Case 2: Login', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.fixture('user.json').as('userData')
		cy.fixture('page-element.json').as('pageElement')
		cy.fixture('login-page-element').as('loginPageElement')
	})

	it('Login with incorrect email and password', function () {
		LoginPage.checkPageLoadComplete(this.pageElement.elementForCheckPageLoad)
		LoginPage.clickSignupLoginButton(this.pageElement.button.signupLoginButton)
		LoginPage.checkPageLoadComplete(
			this.loginPageElement.elementForCheckLoginPageLoad
		)
		cy.wait(2000)
		LoginPage.fillUsername(this.userData.incorrectData.invalidusername)
		LoginPage.fillPassword(this.userData.incorrectData.invalidpassword)
		LoginPage.clickSubmitButton()
		LoginPage.checkElementIsVisible(this.loginPageElement.text.incorrectData)
	})
	it('Login with correct email and password', function () {
		LoginPage.checkPageLoadComplete(this.pageElement.elementForCheckPageLoad)
		LoginPage.clickSignupLoginButton(this.pageElement.button.signupLoginButton)
		LoginPage.checkPageLoadComplete(
			this.loginPageElement.elementForCheckLoginPageLoad
		)
		cy.wait(2000)
		LoginPage.fillUsername(this.userData.user1.username)
		LoginPage.fillPassword(this.userData.user1.password)
		LoginPage.clickSubmitButton()
		LoginPage.checkElementIsVisible(
			`${this.loginPageElement.text.loginSuccessfully} ${this.userData.user1.idName}`
		)
	})
})
