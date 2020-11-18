/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // cy.visit('/')
  })

  it('can click the button without stubbing', () => {
    cy.get('button').click()
    cy.get('pre').should(pre => expect(pre).to.contain('typicode'))
  })

  it('can stub using route', () => {
    cy.server()
    cy.route('/profile', { fake: 'response' }).as('profile')
    cy.get('button').click()
    cy.wait('@profile')
    cy.get('pre').should(pre => expect(pre).to.contain('fake'))
  })

  it('can spy using route2', () => {
    cy.route2({ pathname: '/profile' }).as('profile')
    cy.get('button').click()
    cy.wait('@profile')
    cy.get('pre').should(pre => expect(pre).to.contain('fake'))
  })
})
