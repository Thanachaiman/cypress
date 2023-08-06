const { Page } = require('./page')

class CartPage extends Page {
	static checkDataOfProduct(element, data) {
		cy.get(element).contains(data).should('be.visible')
	}
}
module.exports = { CartPage }
