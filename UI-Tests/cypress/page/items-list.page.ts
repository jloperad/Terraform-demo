class ItemsListPage {
    private menuContentPageURL: string
    private addItemButton: string
    private editItemButton: string
    private deleteItemButton: string
    private insightsButton: string
    private validationRow: string
    

    constructor() {
        this.menuContentPageURL = 'http://ldfchdfst:4200/list'
        this.addItemButton=' button.list-add-button'
        this.editItemButton=".mat-icon[data-automation='list-edit-button']"
        this.deleteItemButton=".mat-icon[data-automation='list-delete-button']"
        this.insightsButton="button.list-insights-button"
        this.validationRow="[data-automation=list-item-row]"
        
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public AddItem(): void {
        cy.get(this.addItemButton).click()
    }

    public EditFirstItem():void {
        cy.get(this.editItemButton).first().click()
    }

    public DeleteFirstItem():void {
        cy.get(this.deleteItemButton).first().click()
    }

    public Insights():void{
        cy.get(this.insightsButton).click()
    }

    public ValidateItemIsDisplayed(name,sellIn,quality,type):void{
        cy.get(this.validationRow).then(rows => {
            let validated = false
            for (let i = 0; i < rows.length; i++) {
                const cols = rows[i].querySelectorAll(".list-col")
                if (cols[0].textContent === name &&
                    cols[1].textContent === sellIn.toString() &&
                    cols[2].textContent === quality.toString() &&
                    cols[3].textContent === type) {
                    validated = true
                }
            }
            expect(validated).to.be.true
        })
    } 
    public ValidateItemIsNotDisplayed(name,sellIn,quality,type):void{
        cy.get(this.validationRow).then(rows => {
            let validated = false
            for (let i = 0; i < rows.length; i++) {
                const cols = rows[i].querySelectorAll(".list-col")
                if (cols[0].textContent === name &&
                    cols[1].textContent === sellIn.toString() &&
                    cols[2].textContent === quality.toString() &&
                    cols[3].textContent === type) {
                    validated = true
                }
            }
            expect(validated).to.be.false
        })
    } 

    public validateInsights(type):void{
        cy.get(".insights-grid .insights-value").then(quantity => {
            let validated = false
            for (let i = 0; i < quantity.length-1; i++) {
                if(quantity[i].innerText === type && quantity[i+1].innerText === "1"){
                    validated = true
                }
            }
            expect(validated).to.be.true
        })
    }

}
export { ItemsListPage }