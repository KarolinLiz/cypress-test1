import {BasePage} from "../BasePage.js"

export class LoginPage extends BasePage {
_emailInputSelector='form input[id="input-email"]'
_passwordInputSelector='form input[id="input-password"]'
_rememberMeSelector="form .custom-checkbox"
_loginButtonSelector="div button"

    constructor() {
        super("auth/login");
    }

    fill(email,password,rememberMe){
        cy.get(this._emailInputSelector).type(email)
        cy.get(this._passwordInputSelector).type(password)

        if(rememberMe){
            cy.get(this._rememberMeSelector).click()
        }
    }

    clickLoginButton(){
        cy.get(this._loginButtonSelector).click()
    }

   
}