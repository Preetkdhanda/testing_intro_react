describe('Comment', ()=>{

    beforeEach (()=>{
        cy.visit('http://localhost:3000')

    })

    it('Should have prepopulated comments', ()=>{

        const commetListItems = cy.get("#comment-list > li") //looking for the comment list and the li's attach
        //to the comment-list

        commetListItems.should('have.length', 2)
    })

    it('Should be able to add a comment', ()=>{

        cy.get('#name-input').type("Preet")
        cy.get('#comment-input').type("Hello World")
        cy.get('#comment-form').submit(); //comment form is the Forms ID in the app
        const commetListItems = cy.get("#comment-list > li") ///this has been taken from previous code
        commetListItems.should('have.length', 3)

    })

    })
