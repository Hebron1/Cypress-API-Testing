it('get user by their Username - GET', () => {
    let username = "John";
    cy.request(`/user/${username}`).as('getUsername');
    cy.get('@getUsername').then(username => {
        expect(username.status).to.equal(200);
    })
})