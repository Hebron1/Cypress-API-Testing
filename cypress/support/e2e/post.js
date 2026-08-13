it('Create a user - POST', () => {
    let body = {
    "id": 0,
    "username": "John",
    "firstName": "John",
    "lastName": "Doe",
    "email": "johnd@yahoo.com",
    "password": "12345",
    "phone": "712345",
    "userStatus": 1
    }
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then((createUser) => {
        expect(createUser.status).to.eq(200);
    })
})