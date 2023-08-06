const { Page } = require('./page')

class ProductPage extends Page {
	static clickProductbutton() {
		cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
	}

	static hoverProduct(element) {
		cy.get(element).trigger('mouseover')
	}

	static clickProduct(element) {
		cy.get(element).click()
	}

	static clickContinueShopping() {
		cy.get('.modal-footer > .btn').click()
	}

	static clickViewCart() {
		cy.get('u').click()
	}

	static clickCartButton() {
		cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
	}

	static clickDeleteButton() {
		cy.get('.cart_quantity_delete').click()
	}
}
module.exports = { ProductPage }
