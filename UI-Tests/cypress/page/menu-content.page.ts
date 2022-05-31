class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private dressesMenu: string

    constructor() {
        this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
        this.menuContentPageURL = 'http://automationpractice.com/';
        this.dressesMenu = "#block_top_menu > ul > li > [title=Dresses]";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL);
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click();
    }

    public goToDressesMenu(): void {
        cy.get(this.dressesMenu).click();
    }

}
export { MenuContentPage }