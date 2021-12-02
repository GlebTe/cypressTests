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

    cy.get('#menu').click()
    cy.contains('Валютные операции').click()
    cy.get(':nth-child(1) > .template').click()
    cy.get('#debitAccount').click()
    cy.contains('Корпоративная карта').click()
    cy.get('#creditAccount').click()
    cy.contains('Долларовый счет').click()
    cy.get('#debitAmount > .amount').type('1234')
    cy.get('#save-and-sign').click()
    cy.get('#sms').type('123456')
    cy.get('.ui-buttons > [ng-reflect-disabled="false"]').click()
    cy.get('#done').click()
})