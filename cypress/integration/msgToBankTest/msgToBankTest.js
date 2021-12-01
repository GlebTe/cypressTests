/// <reference types ="cypress" />

/*
функция для генерации случайной строки как пример текста
*/
function randStr() 
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
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
    cy.get(':nth-child(3) > .menu-block').click()
    cy.get('.new-message').click()
    cy.get('#subject > .ng-untouched').type(randStr())
    cy.get('#category > .value > :nth-child(1)').click()
    cy.contains('техническую').click()
    cy.get('#content > .ng-untouched').type(randStr())
    cy.get('.ui-buttons > :nth-child(2)').click()
    cy.get('.integer').type('123456')
    cy.get('.ui-buttons > [ng-reflect-disabled="false"]').click()
    cy.get('.modal-body > .ui-buttons > ui-button').click()
})

