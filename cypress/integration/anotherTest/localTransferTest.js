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
    cy.get('.p-a-t > item-block > .items > .content.ng-star-inserted > .content > :nth-child(2) > .template').click()
    cy.get('#payer_account > .value').click() 
    cy.contains('Корпоративная').click() 
    cy.get('#payee > .value > :nth-child(1)').click()
    cy.contains('Информационные').click()
    cy.get('#payee_account > .value > :nth-child(2)').click()
    cy.contains('887').click()
    cy.get('#amount > .amount').type('1234')
    cy.get('#payment-purpose').click()
    cy.contains('За товар').click()
    cy.get('#save-and-sign > .button').click()
    cy.get('.integer').type('123456')
    cy.get('.ui-buttons > [ng-reflect-disabled="false"]').click()
})
