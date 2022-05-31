class DeleteItemPage {
    private deleteButton: string

    constructor() {
    this.deleteButton="[data-automation=delete-dialog-confirm-button]"
    }
    public confirmDelete():void{
        cy.get(this.deleteButton).click()
    }
}
export { DeleteItemPage }