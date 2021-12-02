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

    cy.get('.customer-select-block').click()
    cy.get('.links > :nth-child(1) > .menu-block').click()
    cy.get('start-page-settings.ng-star-inserted > .settings-item').click()
    cy.get('[ng-reflect-dragula="bag-items"] > :nth-child(1) > .icon-show').click()
    cy.get('[ng-reflect-dragula="bag-items"] > :nth-child(2) > .icon-show').click()
    cy.get('ui-button').click()
    cy.get('.modal-body > .buttons-block > ui-button').click()
    cy.get('#menu-item-0').click()
})