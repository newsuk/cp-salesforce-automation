import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps';

Given('I am in salesforce login page', () => {
    cy.visit('/')
  })

When('I enter valid username and password', () => {
    cy.fixture('users.json').then((users) => {
    cy.get('input[id=username]').type(users.username)
    cy.get('input[id=password]').type(users.password)
  })
})

And('I click on login button' , () => {
   cy.get('input[id= Login]').click()
})

Then('I should logged in and redirected to dashboard page', () => {
  cy.get('h1[class=currentStatusUserName]',{timeout:10000}).should('be.visible')
})