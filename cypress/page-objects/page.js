class Page {
	static visit(url) {
		cy.visit(url)
	}
	static clickDeletebutton() {
		cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
	}

	static clickContinuebutton() {
		cy.get('[data-qa="continue-button"]').click()
	}
}
module.exports = { Page }
