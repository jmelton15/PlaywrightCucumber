Feature: HRM login

@smoke
Scenario Outline: Login with valid and invalid credentials 
Given I am on the login page
When I input username as "<username>" and password as "<password>"
And I click the login button
Then I should be on the orange hrm home page

Examples:
|username|password|
|Admin|admin123|
|WrongUser|WrongPass|