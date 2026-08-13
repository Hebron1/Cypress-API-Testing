describe('Petstore create user and login', () => {

    it('Create a user - POST', () => {
        let body = {
        "id": 0,
        "username": "Serra",
        "firstName": "Serra",
        "lastName": "Jane",
        "email": "serjen@yahoo.com",
        "password": "54321",
        "phone": "7138634",
        "userStatus": 1
        }
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then((createUser) => {
            expect(createUser.status).to.eq(200);
        })
    })

    it('get user by their Username - GET', () => {
        let username = "Serra";
        cy.request(`/user/${username}`).as('getUsername');
        cy.get('@getUsername').then(username => {
            expect(username.status).to.equal(200);
        })
    })
    
    it('Login with existed user', () => {
        let body = {
            username: 'Serra',
            password: '54321'
        }
        // cy.request('GET', '/user/login', body).as('getLogin');
        // cy.get('@getLogin').then(login => {
        //     expect(login.status).to.equal(200);
        // })
        cy.request({
            method: 'GET',
            url: '/user/login',
            body
        }).then((response) => {
      expect(response.status).to.eq(200)
    })
    })

    it('Logout user', () => {
        cy.request('/user/logout').then((response) => {
        expect(response.status).to.eq(200)
        })
    })
})
