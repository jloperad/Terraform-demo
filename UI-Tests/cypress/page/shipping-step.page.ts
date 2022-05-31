class ShippingStepPage {
    private termsButton: string;
    private checkoutButton: string;

    constructor() {
        this.termsButton = '#cgv';
        this.checkoutButton = '#form > p > button';
    }

    public acceptTerms(): void {
        cy.get(this.termsButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click()
    }

}
export { ShippingStepPage }