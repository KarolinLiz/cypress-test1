describe("Posts", ()=>{
    it('should delete post by id', () => {
        const postId = 1
        cy.api({
            url: `/posts/${postId}`,
            method: 'DELETE',
          }).as("deletedPost")

          cy.get("@deletedPost").its("status")
          .should("equal", 200)

          .its("body").should('not.exist')
        });
    })