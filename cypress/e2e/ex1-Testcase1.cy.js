const { signUpPage } = require('../page-objects/signup-page')

describe('Test Case 1: Register User', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.fixture('user.json').as('userData')
		cy.fixture('page-element.json').as('PageElement')
		cy.fixture('signup-page-element').as('signUpPageElement')
		cy.fixture('login-page-element').as('loginPageElement')
	})
	it('Register User with valid data', function () {
		signUpPage.checkPageLoadComplete(this.PageElement.elementForCheckPageLoad)
		signUpPage.clickSignupLoginButton(this.PageElement.signUpLoginButton)
		signUpPage.checkPageLoadComplete(
			this.loginPageElement.elementForCheckLoginPageLoad
		)
		signUpPage.fillName(this.userData.user1.nameForSignUp)
		signUpPage.fillEmail(this.userData.user1.emailForSignUp)
		signUpPage.clickSignUp()
		signUpPage.fillPassword(this.userData.user1.password)
		signUpPage.checkElementIsVisible(this.signUpPageElement.text.checkPageLoad)
		signUpPage.fillDate(
			this.userData.user1.day,
			this.userData.user1.month,
			this.userData.user1.year
		)
		signUpPage.selectSignUpForOurNewsletter()
		signUpPage.fillFirstname(this.userData.user1.firstname)
		signUpPage.fillLastname(this.userData.user1.lastname)
		signUpPage.fillCompany(this.userData.user1.company)
		signUpPage.selectAddress(
			this.userData.user1.address,
			this.userData.user1.country,
			this.userData.user1.state,
			this.userData.user1.city,
			this.userData.user1.zipcode
		)
		signUpPage.fillMobilephone(this.userData.user1.mobile)
		signUpPage.clickCreateAccount()
		signUpPage.checkElementIsVisible(this.signUpPageElement.text.accountCreated)
		signUpPage.clickContinuebutton()
		signUpPage.clickDeletebutton()
		signUpPage.checkElementIsVisible(this.signUpPageElement.text.accountDeleted)
		signUpPage.clickContinuebutton()
	})
})
