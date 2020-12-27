Feature: Show or hide an events details

Scenario: An event element is collapsed by default
    Given the list of events has been loaded
    When the user did not click the Show Details yet
    Then the event element content is not shown

Scenario: User can open the event to see the content
    Given the app is loaded
    When the user clicks the Show Details button
    Then the event content should show

Scenario: User can hide the event details by pressing the button
    Given the app is loaded
    And event element is expanded and shows detail
    When the user clicks the Hide Details button
    Then the content of the event bar should be hidden