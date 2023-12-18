Feature: Search functionality

    Scenario: Search for apartment rental in Paris within 1500€ max
        Given I am on home page
        And I set property type to "appartement"
        And I set project type to "location"
        And I set project location to "Paris"
        And I set maximum price to "1500"
        When I launch the research
        Then I should see "LOCATION APPARTEMENT PARIS (75) À LOUER"
        And I check result


    Scenario: Search for apartment rental in Paris within 1500€ max (JSON)
        Given I load the test data from JSON
        When I visit the home page
        Then I perform a search for each set of criteria


        