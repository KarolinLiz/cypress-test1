describe("Posts", ()=>{
    it('should update post by id', () => {
        const body = {
            id: 1,
            title: 'Yelyzaveta',
            body: 'Klymenko',
            userId: 1,
          }
        cy.api({
            url: "/posts/1",
            method: 'PUT',
            body,
              Headers:{
                'Content-type': 'application/json; charset=UTF-8',
              }
          }).as("updatePost")

          cy.get("@updatePost").its("status")
          .should("equal", 200)

          cy.get("@updatePost").its("body")
          .should("deep.include", body)

        });
    })