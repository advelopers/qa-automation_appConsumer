@newDevice @mobile

Feature: New Device Workflow when a new device attempts to login to an existing account

    @id-16303 @sanity
    Scenario: Login with New Device and Validate Screen Elements
    Given i am on the initial view
    And i sign in with phone "18764767783" and pin "040992"
    And I should be Redirected to New Device Page

