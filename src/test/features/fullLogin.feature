Feature: HRM login

@smoke
Scenario Outline: Login with valid and invalid credentials 
    Given I am at google
    When I input search term as "moon"
    When I click the google search button
    Then I should see moon h3 header with text "Moon"


