const { ProductPage } = require('../page-objects/product-page')

describe('Test Case 12: Add Products in Cart', () => {
	beforeEach(() => {
		ProductPage.visit('/')
		cy.fixture('user.json').as('data')
	})

	it('Test Case 12: Add Products in Cart', function () {
		cy.get('a > img').should('be.visible')
		ProductPage.hoverProduct(
			'.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2'
		)
		ProductPage.clickProduct(
			'.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
		)
		ProductPage.clickContinueShopping()
		ProductPage.hoverProduct(
			'.features_items > :nth-child(5) > .product-image-wrapper > .single-products > .productinfo > h2'
		)
		ProductPage.clickProduct(
			'.features_items > :nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn'
		)
		ProductPage.clickContinueShopping()
		ProductPage.clickProduct(
			'.features_items > :nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn'
		)

		ProductPage.clickViewCart()
		cy.contains('Blue Top').should('be.visible')
		cy.contains('Sleeveless Dress').should('be.visible')

		ProductPage.checkproduct('#product-1 > .cart_price > p', 'Rs. 500')
		ProductPage.checkproduct('#product-3 > .cart_price > p', 'Rs. 1000')
		ProductPage.checkproduct('#product-1 > .cart_quantity > .disabled', '1')
		ProductPage.checkproduct('#product-3 > .cart_quantity > .disabled', '2')
		ProductPage.checkproduct(
			'#product-1 > .cart_total > .cart_total_price',
			'Rs. 500'
		)
		ProductPage.checkproduct(
			'#product-3 > .cart_total > .cart_total_price',
			'Rs. 2000'
		)

		// cy.get('#product-1 > td.cart_price').should('eq', 'Rs. 500')
	})
})
