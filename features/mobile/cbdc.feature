@cbdc @mobile

Feature: CBDC Feature

    Background: The user signs in and goes through tips
        Given i am on the initial view
        And i sign in with phone "18592164115" and pin "981223"
        And I go through tips

    # @id-32314 @sanity
    # Scenario: Succesfull JamDex transfer
    #     When I click the JamDex option
    #     And I make a successful JamDex Transfer to "18761010933" of amount "2"

    @id-32318 @sanity
    Scenario: Succesfull JAMDEX to JMD Exchange
        When The exchange button is clicked
        And i wait 3 seconds
        Then I go through exchange tips
        And I select JamDex to JMD option
        When I make a successful JamDex to JMD exchange of amount "10"

    @id-32316 @sanity
    Scenario: Succesfull JMD to JamDex Exchange
        When The exchange button is clicked
        And i wait 3 seconds
        Then I go through exchange tips
        And I select JMD to JamDex option
        When I make a successful JMD to Jamdex exchange of amount "10"


    @id-28343
    Scenario: Test Case 28343: Join to ExhcangeMoneyScreen
        When The exchange button is clicked
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate Exchange money screen

    @id-28345
    Scenario: Test Case 28345: the amount is correct vs CBDC balance
        When The exchange button is clicked
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate user can input amount up to current cbdc balance

    @id-31890
    Scenario: Test Case 31890: Make a JMD to JamDex exchange with an amount greater than the funds.
        When The exchange button is clicked
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate user gets error message and is unable to exchange amount greater than is available

    @id-31891
    Scenario: Test Case 31891: Try to type an special character in the exchange amount.
        When The exchange button is clicked
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate user unable input special character in amount field

    # @id-31892
    # Scenario: Test Case 31892: Make a JMD to JamDex exchange with decimals succesfully.
    #     When The exchange button is clicked
    #     And i wait 3 seconds
    #     Then I go through exchange tips
    #     And I select JMD to JamDex option
    #     When I make a successful JMD to Jamdex exchange with cents of amount "10" & "50"

    @id-31884
    Scenario: Test Case 31884: Switch from JMD - JamDex to JamDex - JMD by two-side arrows.
        When The exchange button is clicked
        And i wait 3 seconds
        And I go through exchange tips
        And i wait 3 seconds
        Then Validate user can switch currency using arrows