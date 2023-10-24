describe("User should be created", ()=>{
    it('should find text on the page 1', () => {
      cy.visit('pages/tables/smart-table')
      cy.get('[class="nb-plus"]').click()
      cy.get('input[ng-reflect-name="id" ]').type("81", { delay: 50 })
      cy.get('input[ng-reflect-name="firstName"]').type("Katerina", { delay: 50 })
      cy.get('input[ng-reflect-name="lastName"]').type("Kremenna", { delay: 50 })
      cy.get('input[ng-reflect-name="username"]').type("KatiaKat", { delay: 50 })
      cy.get('input[ng-reflect-name="email"]').type("Katerina678@icloud.com", { delay: 50 })
      cy.get('input[ng-reflect-name="age"]').type("23", { delay: 50 })

      cy.get('[class="nb-checkmark"]').click()

      cy.get('table tbody tr.ng-star-inserted').as("createdUser")
      cy.get("@createdUser").eq(0).should('contain', "Katerina")
      cy.get("@createdUser").eq(0).should('contain', "Kremenna")
      cy.get("@createdUser").eq(0).should('contain', "KatiaKat")
      cy.get("@createdUser").eq(0).should('contain', "Katerina678@icloud.com")
      cy.get("@createdUser").eq(0).should('contain', "23")

      cy.get('[class="nb-edit"]').eq(0).click()

      cy.get('input[ng-reflect-name="firstName"]').clear().type("Yelyzaveta", { delay: 50 })
      cy.get('input[ng-reflect-name="lastName"]').clear().type("Klymenko", { delay: 50 })
      cy.get('input[ng-reflect-name="username"]').clear().type("LizaVlad", { delay: 50 })
      cy.get('input[ng-reflect-name="email"]').clear().type("Klymenko_liz@icloud.com", { delay: 50 })
      cy.get('input[ng-reflect-name="age"]').clear().type("33", { delay: 50 })
      
      cy.get('[class="nb-checkmark"]').click()

  
      cy.get("@createdUser").eq(0).should('contain', "Yelyzaveta")
      cy.get("@createdUser").eq(0).should('contain', "Klymenko")
      cy.get("@createdUser").eq(0).should('contain', "LizaVlad")
      cy.get("@createdUser").eq(0).should('contain', "Klymenko_liz@icloud.com")
      cy.get("@createdUser").eq(0).should('contain', "33")
    });
})