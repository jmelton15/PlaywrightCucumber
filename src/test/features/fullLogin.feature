@Google
Feature: Google Tests

@Google_Search @smoke
Scenario: Searching Google For Search Term
    Given I am at google
    When I input search term as <searchterm>
    When I click the google search button
    Then I should see moon h3 header with text "Moon"

    Examples:
    | searchterm |
    | moon       |
    | banana     |

