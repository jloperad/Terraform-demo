class PaymentStepPage {
    private bankButton: string;
    private confirmOrderButton: string
    private orderResume: string

    constructor() {
        this.bankButton = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
        this.confirmOrderButton = '#cart_navigation > button'
        this.orderResume = '#center_column > div > p > strong'
    }

    public chooseBankPayment(): void {
        cy.get(this.bankButton).click()
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public orderConfirmation(confirmationString: string): void {
        cy.get(this.orderResume).should("have.text", confirmationString)
    }

}
export { PaymentStepPage }