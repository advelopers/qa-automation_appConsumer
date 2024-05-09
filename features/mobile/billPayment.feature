@mobile @billpayment

Feature: Bill Payment

    # Background: The user signs in and is on the dashboard
    #     Given i am on the initial view
    #     When i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips

    
    @id-22892 
    Scenario: Validate user is able to navigate to Bill payment
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310" 
        Then Validate user can navigate to bill payment screen

    @id-22893
    Scenario: Test Case 22893: Validate Bill payment screen (first time user)
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310" 
        Then Validate content of bill payment screen for first time user

    @id-22894 @sanity
    Scenario: Validate user can save a new Payee
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310" 
        And User adds a bill payee

    @id-22895
    Scenario: Validate Choose biller screen
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And User navigates to choose biller screen

    @id-22897
    Scenario: Validate user is prompted on invalid account number format
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Verify user is prompted when invalid account number is added

    @id-22898
    Scenario: Validate A user gets error on new Payee screen on account number mismatch
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Verify user is prompted when there is an account number mismatch

    @id-22899
    Scenario: Validate Lynk user who is on the "New Payee" screen and click the information icon
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Verify modal when new Payee information icon is clicked

    @id-22900 @sanity
    Scenario: Validate user can submit amount for payment
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And i wait 5 seconds
        And Validate User can submit amount for payment
        Then Validate Successful bill payment summary screen

    @id-22911 @sanity
    Scenario: Test Case 22911: Validate user can make payment to an existing payee
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Verify user can submit a bill payment to an existing payee
        Then Validate Successful bill payment summary screen

    
    @id-22901
    Scenario: Validate user is unable to pay more than the available Lynk balance
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Verify User is unable to pay more than available lynk balance


    @id-22905
    Scenario: Validate user is able navigate to home screen after bill payment
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Validate user is able navigate to home screen after bill payment

    @id-22906
    Scenario: Validate user is able navigate to pay another bill after bill payment
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Validate user is able to pay another bill after bill payment

    @id-22907
    Scenario: Validate user is able to search for billers
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Validate user can search for biller

    @id-22908
    Scenario: Validate user is able to edit billers
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Validate user can edit biller


    @id-22910
    Scenario: Validate user is able to cancel delete request
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Validate user can cancel delete request

    @id-22913
    Scenario: Validate user can search for a payee
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And Validate user can search for a payee

    @id-26481
    Scenario: Validate user cannot add a payee that already exists
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992"
        And User adds a bill payee that already exists

    @id-22909
    Scenario: Validate user is able to delete billers
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Validate user can delete biller

    @id-45075
    Scenario: Test Case 45075: Bill Payment - Low KYC User attempts to pay bill for an amount that exceeds his debit limit for that tier - Unhappy Path
        Given i am on the initial view
        When i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Verify user is able to submit a bill payment amount with a low KYC user "40500"
        Then Low KYC Daily Limit modal is displayed

    @id-45076
    Scenario: Test Case 45076: Bill Payment - Low KYC User completes a bill payment for an amount within his debit limit for that tier - Happy Path
        Given i am on the initial view
        When i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310"
        And Verify user is able to submit a bill payment amount with a low KYC user "10"
        Then Low KYC User is redirected to bill payment Summary screen

    @id-22912
    Scenario: Test Case 22912: Validate users can see balance for payees
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When User navigates to bill payment "199310" 
        And User adds a bill payee that has balance available

    @id-39705
    Scenario: Verify user is able to make a full bill payment
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992" 
        And Verify user can make a full bill payment

    @id-39706
    Scenario: Test Case 39706: Verify user is able to make a partial bill payment
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When User navigates to bill payment "040992" 
        And Verify user can make a partial bill payment

    # @id-39759
    # Scenario: Test Case 39759: Validate new user who is paying bill with balance unavailable
    #     Given i am on the initial view
    #     When i sign in with phone "79366199905" and pin "040992"
    #     And I go through tips
    #     When User navigates to bill payment "040992" 
    #     And Verify that bill balance unavailable text is visible

    #  @id-39760
    # Scenario: Test Case 39760: Validate user can view unavailable help bubble
    #     Given i am on the initial view
    #     When i sign in with phone "79366199905" and pin "040992"
    #     And I go through tips
    #     When User navigates to bill payment "040992" 
    #     And Verify that user can view unavailable help bubble