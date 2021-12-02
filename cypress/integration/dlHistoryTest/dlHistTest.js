/// <reference types ="cypress" />
/*
предусловие авторизации необходимое для дальнешего теста 
*/
it('authorisation test', function(){
    cy.visit('https://isfront.ru/login')
    cy.get('.value > :nth-child(1) > div').click()
    cy.contains('Вход под СМС') .click() 
    cy.get('.text').type('demobank')
    cy.get('.password').type('123456')
    cy.get('#login').click()
    cy.get('.integer').type('123456')
    cy.get('#login').click()

    cy.get(':nth-child(3) > .finance-item > .finance-item-box > .finance-item-title > .icons-block > .btn-statement').click()
    cy.get('#statement > button > .button-wrapper').click()
    cy.get('#export-statement-pdf').click()
})
