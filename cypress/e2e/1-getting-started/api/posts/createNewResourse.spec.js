describe("Posts", ()=>{
    it('should create new resource', () => {
        const body = {
            title: 'English Fairy Tales',
            body: 'A lot of books',
            userId: 3,
          }
        cy.api({
            url: "/posts",
            method: 'POST',
            body,
              Headers:{
                'Content-type': 'application/json; charset=UTF-8',
              }
          }).as("createPost")

          cy.get("@createPost").its("status")
          .should("equal", 201)

          cy.get("@createPost").its("body")
          .should("deep.include", body)

        });
    })