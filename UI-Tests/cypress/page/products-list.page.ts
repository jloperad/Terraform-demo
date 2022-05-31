class ProductListPage {
    private firstTshirt: string;
    private checkoutButton: string

    constructor() {
        this.firstTshirt = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
        this.checkoutButton = '[style*=\"display: block;\"] .button-container > a'
    }

    public clickFirstTshirt(): void {
        cy.get(this.firstTshirt).click()
    }

    public goToCheckout(): void {
        cy.get(this.checkoutButton).click()
    }

}
export { ProductListPage }