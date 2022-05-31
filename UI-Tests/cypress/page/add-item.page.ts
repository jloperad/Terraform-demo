class AddItemPage {

    private nameInput: string
    private sellInInput: string
    private qualityInput: string
    private typeInput: string
    private typeSelector: string
    private confirmationButton: string
    private errorMessage: string

    constructor() {
        this.nameInput="#mat-input-0"
        this.sellInInput="#mat-input-1"
        this.qualityInput="#mat-input-2"
        this.typeInput='.mat-select-arrow-wrapper'
        this.typeSelector="[role=option]"
        this.confirmationButton="[data-automation=item-form-confirm-button]"
        this.errorMessage=".mat-form-field-subscript-wrapper .mat-error"
    }

    public fillInNameInput(name :string ): void {
        cy.get(this.nameInput).type(name)
    }
    public fillInSellInInput(sellin): void {
        cy.get(this.sellInInput).type(sellin)
    }
    public fillInQualityInput(quality): void {
        cy.get(this.qualityInput).type(quality)
    }
    public clickType(): void {
        cy.get(this.typeInput).click()
    }
    public chooseType(type): void {
        cy.get(this.typeSelector).contains(type).click()
    }
    public confirmAdd():void{
        cy.get(this.confirmationButton).click()
    }
    public checkAddButton():void{
        cy.get(this.confirmationButton).should("be.disabled")
    }
    public checkErrorMessage():void{
        cy.get(this.errorMessage).should("have.text", " Expected value between 0 and 80 ")
    }

}
export { AddItemPage }