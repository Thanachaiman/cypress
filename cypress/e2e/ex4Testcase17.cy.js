const { ProductPage } = require('../page-objects/product-page')

describe('Test Case 17: Remove Products From Cart', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.fixture('user.json').as('userData')
		cy.fixture('page-element.json').as('pageElement')
		cy.fixture('product-page-element.json').as('productPageElement')
	})

	it('Remove Products From Cart', function () {
		ProductPage.checkPageLoadComplete(this.pageElement.elementForCheckPageLoad)
		ProductPage.hoverProduct(this.productPageElement.product1.imageLocator)
		ProductPage.clickProduct(this.productPageElement.product1.itemLocator)
		ProductPage.clickContinueShopping()
		ProductPage.clickCartButton()
		ProductPage.checkElementIsVisible(this.productPageElement.text.item)
		ProductPage.clickDeleteButton()
		ProductPage.checkElementIsVisible(this.productPageElement.text.cartEmpty)
	})
})
