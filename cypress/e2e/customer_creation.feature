Feature: As a user, I want to check customer creation is successful in salesforce

Scenario: Validate the login is successful in salesforce
    Given I am in salesforce login page
    When I enter valid username and password
    And I click on login button
    Then I should logged in and redirected to dashboard page