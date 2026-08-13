describe('Login and get user by username from env', () => {

    it('get user by their Username - GET', () => {
        let username = Cypress.env('serra').username;
        cy.request(`/user/${username}`).as('getUsername');
        cy.get('@getUsername').then(username => {
            expect(username.status).to.equal(200);
        })
    })

    it('Login with existed user - GET', () => {
            cy.request({
                method: 'GET',
                url: '/user/login',
                qs: {
                    username: Cypress.env('serra').username,
                    password: Cypress.env('serra').password
                }
                // env disimpan cypress.config.js
        
            }).then((response) => {
          expect(response.status).to.eq(200)
        })
        })
})
