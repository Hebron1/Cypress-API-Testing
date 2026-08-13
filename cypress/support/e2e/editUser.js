it('Edit entire a user data', () => {
    let username = "John";
    cy.request({
      method: 'PUT',
      url: `/user/${username}`,
      body: {
        id: 1,
        username: 'John',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        password: 'newPassword123',
        phone: '08123456789',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
})
})