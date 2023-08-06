const { ProductPage } = require('../page-objects/product-page')
const { CartPage } = require('../page-objects/cart-page')

describe('Test Case 12: Add Products in Cart', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.fixture('user.json').as('userData')
		cy.fixture('page-element.json').as('pageElement')
		cy.fixture('product-page-element.json').as('productPageElement')
		cy.fixture('cart-page-element.json').as('cartPageElement')
	})

	it('Test Case 12: Add Products in Cart', function () {
		ProductPage.checkPageLoadComplete(this.pageElement.elementForCheckPageLoad)
		ProductPage.hoverProduct(this.productPageElement.product1.imageLocator)
		ProductPage.clickProduct(this.productPageElement.product1.itemLocator)
		ProductPage.clickContinueShopping()

		ProductPage.hoverProduct(this.productPageElement.product2.imageLocator)
		ProductPage.clickProduct(this.productPageElement.product2.itemLocator)

		ProductPage.clickContinueShopping()
		ProductPage.clickProduct(this.productPageElement.product2.itemLocator)

		ProductPage.clickViewCart()
		CartPage.checkElementIsVisible(this.cartPageElement.product1.name)
		CartPage.checkElementIsVisible(this.cartPageElement.product2.name)

		CartPage.checkDataOfProduct(
			this.cartPageElement.product1.priceLocator,
			this.cartPageElement.product1.price
		)
		CartPage.checkDataOfProduct(
			this.cartPageElement.product2.priceLocator,
			this.cartPageElement.product2.price
		)
		CartPage.checkDataOfProduct(
			this.cartPageElement.product1.amountLocator,
			this.cartPageElement.product1.amount
		)
		CartPage.checkDataOfProduct(
			this.cartPageElement.product2.amountLocator,
			this.cartPageElement.product2.amount
		)

		CartPage.checkDataOfProduct(
			this.cartPageElement.product1.totalPriceLocator,
			this.cartPageElement.product1.totalPrice
		)
		CartPage.checkDataOfProduct(
			this.cartPageElement.product2.totalPriceLocator,
			this.cartPageElement.product2.totalPrice
		)
	})
})
