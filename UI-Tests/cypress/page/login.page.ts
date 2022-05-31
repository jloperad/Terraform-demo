class LoginPage {
    private email: string;
    private password: string;
    private submitButton: string;

    constructor() {
        this.email = '#email';
        this.password = '#passwd'
        this.submitButton = '#SubmitLogin'
    }

    public logInEmail(emailString: string): void {
        cy.get(this.email).type(emailString)
    }

    public logInPassword(passwordString): void {
        cy.get(this.password).type(passwordString)
    }

    public submitLogIn(): void {
        cy.get(this.submitButton).click()
    }

}
export { LoginPage }