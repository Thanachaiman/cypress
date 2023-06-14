const { ProductPage } = require('../page-objects/product-page')

describe('Test Case 17: Remove Products From Cart', () => {
	beforeEach(() => {
		ProductPage.visit('/')
		cy.fixture('user.json').as('data')
	})

	it('Test Case 17: Remove Products From Cart', function () {
		cy.get('a > img').should('be.visible')
		ProductPage.hoverProduct(
			'.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2'
		)
		ProductPage.clickProduct(
			'.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
		)
		ProductPage.clickContinueShopping()
		ProductPage.clickCardButton()
		cy.contains('Item').should('be.visible')
		ProductPage.clickDeleteButton()
		cy.contains('Cart is empty! Click here to buy products.').should(
			'be.visible'
		)
	})
})
