it('Delete user from usename', () => {
    let username = "John"
    cy.request('DELETE', `/user/${username}`)
    .then(response => {
        expect(response.status).to.eq(200)
    })
})