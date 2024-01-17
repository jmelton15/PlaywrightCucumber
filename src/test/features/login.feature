Feature: HRM Login Function

Scenario: Login and Logout With Valid Creds
Given I am on the login page
When I login with valid credentials
And I click on the logout button
Then I should be back on the login page