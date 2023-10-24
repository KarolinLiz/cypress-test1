// import {login} from "../../../utils/auth";
import {LoginPage} from "../../../pageObjects/auth/LoginPage.js";

describe("User should be created", ()=>{
//      it('should login with valid credentials', () => {
//        cy.visit('auth/login')
//        cy.get('form input[id="input-email"]').type("klymenko_liz@meta.ua", { delay: 50 })
//        cy.get('form input[id="input-password"]').type("elyzaveta23", { delay: 50 })
//        cy.get('form .custom-checkbox').click()
//        cy.get('div button').click()
//        cy.url().should('contain', '/pages')
//      });


    // it('should login with valid credentials', () => {
    //     login("klymenko_liz@meta.ua","elyzaveta23", true)
    // });


    // it('should login with valid credentials', () => {
    //     cy.login("klymenko_liz@meta.ua","elyzaveta23", true)
    // });

    it('should login with valid credentials', () => {
      const loginPage= new LoginPage()

      loginPage.navigate()
      loginPage.fill("klymenko_liz@meta.ua","elyzaveta23", true)
      loginPage.clickLoginButton()
    });

})