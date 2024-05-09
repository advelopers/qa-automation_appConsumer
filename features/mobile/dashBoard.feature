@dashboard @mobile
Feature: Home Screen / Dash Board Feature

    @dashboard-screen-validation
    Scenario: validate Dashboard screen KYC pass
        Given i sign in with phone "18765619022" and pin "199310"
        And  i wait 5 seconds
        And  I go through tips
        Then the balance is displayed
        And The user is successfully signed in and redirected to the dashboard


    @id-50228
    Scenario: Test Case 50228: Quick tour - Lite Lynk Users:
        Given i sign in with phone "18764138069" and pin "199310"
        And  i wait 5 seconds
        Then I verify quick tour content lynk lite

    @id-50229
    Scenario: Test Case 50229: Quick tour - Lucky Lynk Users:
        Given i sign in with phone "18764138069" and pin "199310"
        And  i wait 5 seconds
        Then I verify quick tour content lucky lynk