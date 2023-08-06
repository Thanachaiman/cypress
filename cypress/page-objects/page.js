class Page {
	static visit(url) {
		cy.visit(url)
	}
	static clickDeletebutton() {
		cy.get(PageLocator.deleteBottonLocator).click()
	}

	static clickContinuebutton() {
		cy.get(PageLocator.continueButton).click()
	}

	static checkPageLoadComplete() {
		cy.get(PageLocator.imgCheckComplete).should('be.visible')
	}

	static clickSignupLoginButton() {
		cy.get(PageLocator.SignupLoginButton).click()
	}

	static checkPageLoadComplete(path) {
		cy.get(path).should('be.visible')
	}

	static checkElementIsVisible(path) {
		cy.contains(path).should('be.visible')
	}
}

class PageLocator {
	static deleteBottonLocator = '.shop-menu > .nav > :nth-child(5) > a'
	static continueButton = '[data-qa="continue-button"]'
	static imgCheckComplete = 'a > img'
	static SignupLoginButton = '.shop-menu > .nav > :nth-child(4) > a'
}
module.exports = { Page }
