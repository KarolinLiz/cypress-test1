export function login(email, password, rememberMe) {
    cy.visit('auth/login')

      cy.get('form input[id="input-email"]').type(email, { delay: 50 })
      cy.get('form input[id="input-password"]').type(password, { delay: 50 })

      if (rememberMe){
        cy.get('form .custom-checkbox').click()
      }

      cy.get('div button').click()
      cy.url().should('contain', '/pages')
}