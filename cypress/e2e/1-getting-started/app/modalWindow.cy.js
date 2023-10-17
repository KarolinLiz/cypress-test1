describe("Modaloverlays page", ()=>{
    it('should appear the modal window', () => {
        cy.visit('pages/modal-overlays/dialog')

        cy.get('nb-card-body button').last().as("buttonEnterName")
        cy.get("@buttonEnterName").click()

        cy.get('ngx-dialog-name-prompt[class="ng-star-inserted"]').as("modalWindow")
        cy.get("@modalWindow").should("be.visible")

        cy.get('ngx-dialog-name-prompt > nb-card > nb-card-header').as("textInModalWindow")
        cy.get("@textInModalWindow").should('have.text', "Enter your name")

        cy.get('nb-card-body input').as("inputField")
        cy.get("@inputField").should("be.visible")

        cy.get('[status="danger"]').as("canselButton")
        cy.get("@canselButton").should("be.visible")

        cy.get('[status="success"]').as("submitButton")
        cy.get("@submitButton").should("be.visible")

    });
})
