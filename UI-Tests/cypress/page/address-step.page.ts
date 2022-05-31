class AddressStepPage {
    private checkoutButton: string;

    constructor() {
        this.checkoutButton = '#center_column > form > p > button';
    }

    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click()
    }

}
export { AddressStepPage }