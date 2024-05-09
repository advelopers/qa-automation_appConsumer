@mobile @remittance

Feature: Remittances

    @id-42703
    Scenario: Verify user can navigate to remittance from More features
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        Then I should be redirected to the remittances page

    @id-42705
    Scenario: Verify user is unable to do remittance transaction with expired ID
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        Then User receives the expired ID modal

    @id-42706
    Scenario: Verify error modal on reference number mismatch
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And i wait 5 seconds
        And Input reference number "66815776"
        And i wait 3 seconds
        And User clicks continue button
        Then User receives the reference number mismatch modal

    @id-42707
    Scenario: Verify invalid reference number error message
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And i wait 3 seconds
        And Input reference number "341233"
        Then User receives the incorrect format error message for reference number


    @id-42734
    Scenario: Verify error modal when user enters invalid reference number for 3 attempts
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And i wait 3 seconds
        And Input reference number "402745891"
        And i wait 3 seconds
        And User clicks continue button
        And i wait 3 seconds
        And Input reference number "402745892"
        And i wait 3 seconds
        And User clicks continue button
        And i wait 3 seconds
        And Input reference number "402745893"
        And i wait 3 seconds
        And User clicks continue button
        Then User receives the error modal after more than 3 failed attempts

    
    @id-42736
    Scenario: Verify modal when product requires additional information
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And Input reference number "35927060"
        And i wait 3 seconds
        And User clicks continue button
        Then Remittance Details are displayed
        When User clicks continue button
        Then Verify Remittance Info Screen

    @id-42737
    Scenario: Verify error modal if user goes over 100k remittance limit
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And Input reference number "26163838"
        And i wait 3 seconds
        And User clicks continue button
        Then Remittance Details are displayed
        When User clicks continue button
        Then Verify Transaction Limit exceeded modal
        

    @id-42746
    Scenario: Verify user is able to submit remittance for processing (happy path)
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And Input reference number "49983238"
        And i wait 3 seconds
        And User clicks continue button
        Then Remittance Details are displayed
        When User clicks continue button
        Then Verify Remittance Info Screen
        When Input additional remittance info
        And Click the proceed to review button
        And I enter pin "199310"
        And i tap the button with text "Continue"
        And i tap the button with text "Continue"
        Then Verify remittance review screen
        When User swipes to collect remittance
        Then User is redirected processing remittance screen

    @id-61909
    Scenario: Test Case 61909: Validate user is only shown one ID number option
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        And I click the remittance option
        And I click the MoneyGram option
        #And User inputs street address details
        #And User inputs parish details
        And User clicks continue button
        And Input reference number "37501424"
        And i wait 3 seconds
        And User clicks continue button
        Then Remittance Details are displayed
        When User clicks continue button
        Then Verify Remittance Info Screen
        Then Click secondary ID drop down list
        When Validate user is only shown one ID number option
        

    # @id-42745 //*Commenting out, this will be difficult to test right now, as I am unable to cancel a remittance
    # Scenario: Verify error modal when sender cancels transaction
    #     Given i am on the initial view
    #     When i sign in with phone "16465780322" and pin "199310"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     And I click the remittance option
    #     And User inputs street address details
    #     And User inputs parish details
    #     And User clicks continue button
    #     And Input reference number "80577108"
    #     And i wait 3 seconds
    #     And User clicks continue button
    #     Then Remittance Details are displayed
    #     When User clicks continue button
    #     Then Verify Remittance Info Screen
    #     When Input additional remittance info
    #     And Click the proceed to review button
    #     And I enter pin "040992"
    #     And i tap the button with text "Continue"
    #     Then Verify remittance review screen
    #     When User swipes to collect remittance
    #     Then Verify the cancelled remittance modal

    
    # @id-42746
    # Scenario: Verify user can share proof of remittance processing
    #     Given i am on the initial view
    #     When i sign in with phone "79366199905" and pin "040992"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     And I click the remittance option
    #     And User inputs street address details
    #     And User inputs parish details
    #     And User clicks continue button
    #     And Input reference number "23622674"
    #     And i wait 3 seconds
    #     And User clicks continue button
    #     Then Remittance Details are displayed
    #     When User clicks continue button
    #     Then Verify Remittance Info Screen
    #     When Input additional remittance info
    #     And Click the proceed to review button
    #     And I enter pin "040992"
    #     And i tap the button with text "Continue"
    #     Then Verify remittance review screen
    #     When User swipes to collect remittance
    #     Then 