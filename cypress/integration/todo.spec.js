describe('TODO App > ', () => {
    beforeEach(() => {
        cy.visit('https://my-vue-todos.netlify.app/')
    })

    it('OK, there are no TODOs and input todo >', () => {
        cy.get('.form-control')
        .type('Playing Valorant').should('have.value', 'Playing Valorant')
    })

    it('Create 2 todo', ()=>{
        cy.get('.form-control')
        .type('Nap Time').type('{enter}')
        .type('Playing genshin impact').type('{enter}')
    })

    it('Mark 1 done in todo', ()=>{
        cy.get('.list-group').type('{uparrow}')
    })

    it('Editing 1 in todo', () =>{
        cy.get('ul.list-group')
        cy.get('li').eq(0).find('.btn-outline-primary').click().type(' And Watching Anime')
    })

    it('Delete 1 todo',() =>{
        cy.get('ul.list-group')
        cy.get('li').eq(0).find('.btn-outline-danger').click()
    })
})