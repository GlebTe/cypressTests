/// <reference types ="cypress" />


it('authorisation test', function(){
    cy.visit('https://isfront.ru/login')
    cy.get('.value > :nth-child(1) > div').click()
    cy.contains('Вход под СМС') .click() 
    cy.get('.text').type('demobank')
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`
    cy.get('.password').type(testname)
    cy.get('#login').click()
    cy.get('.integer').type('123456')
    cy.get('#login').click()
})