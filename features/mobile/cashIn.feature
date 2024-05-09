@cashin @mobile
Feature: Cash In Feature

    # Background: The user is on the Cash in screen
    #     Given i am on the initial view
    #     And i sign in with phone "79366199905" and pin "040992"
    #     And I go through tips
        #And i tap the button with text "Cash In"

    # @id-6012 @id-6134 @id-6119
    # Scenario Outline: Cash in - with amount less than the NCB balance and greater
    #     When i enter the amount "<amount>" to cashin
    #     When i tap the button with text "<buttontext>"
    #     And the label with text "<message>" is displayed

    #     Examples:
    #         | amount | message             | buttontext          |
    #         | 5      | Cash in successful! | Click to cash in    |
    #         | 4.56   | Cash in successful! | Click to cash in    |
    #         | 0      | Complete to cash in | Complete to cash in |
    #         | 999999 | Insufficient funds  | Complete to cash in |

    @id-6012 @sanity
    Scenario: Validate user can do NCB Bank Cash in successfully
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When I cash-in with the amount "50" from NCB account


    @id-11274
    Scenario: Validate user cannot do NCB Bank Cash in for amount that is greater than available balance
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When I try to cash-in with an amount  greater than in my NCB account "999999"

    @id-11279
    Scenario: Validate Results if user attempts to cash in zero dollars
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When I try to cash in zero dollars


    @id-19369
    Scenario: Cash in via Cards enhancement - Biometric/Pin Verification - Choosing an already existing card
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When I cash-in with the amount "30" from Credit card

    @id-25619
    Scenario: Validate NCB Cash In/Out screen
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        And I enter pin "040992"
        And i tap the label with text "Continue"
        And i tap the label with text "Savings-NCB"
        Then Validate NCB Cash In-Out screen

    @id-25626
    Scenario: Validate Need to cash In screen
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        And I enter pin "199310"
        And i tap the label with text "Continue"
        Then validate need to Cash-in screen

    @id-16570
    Scenario: Test Case 16570: Cash in without bank account connected
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        And I enter pin "199310"
        And i tap the label with text "Continue"
        And i wait 5 seconds
        And the user scrolls
        And i tap the label with text "Continue"
        And User tries to link an NCB bank account
        Then validate Cash in without bank account connected screen

    @id-16572
    Scenario: Test Case 16572: Validate cash in drawer
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When The more button is clicked
        When The cash in button is clicked
        And i tap the label with text "Cash in" 
        Then Validate cash in drawer


    # @id-34931  /*Temporarily removing until I can link another bank account
    # Scenario: Verify that I change the cash in account
    #     Given i am on the initial view
    #     And i sign in with phone "79366199905" and pin "040992"
    #     And I go through tips
    #    # When The cash in button is clicked
    #     #And Bank Cash-in option is clicked
    #     #And I enter pin "040992"
    #     #And i wait 3 seconds
    #     #And i tap the label with text "Continue"
    #     #And i tap the label with text "Savings-NCB"
    #     And I change the cash in account

    @id-43596
    Scenario: Test Case 43596: Verify card cash in is limit 50k daily
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When I attempt to cash out more than the daily limit
        Then validate daily limit exceeded modal


    @id-42336
    Scenario: Validate upgrade to lucky lynk modal
        Given i am on the initial view
        And i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        Then validate update to lucky lynk modal

    @id-45091
    Scenario: Test Case 45091: NCB Cashin - Low KYC user attempts to access the NCB Cashin flow.
        Given i am on the initial view
        And i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        Then validate upgrade lynk tier modal

    @id-45092
    Scenario: Test Case 45092: E-top - Low KYC User attempts to access the e-top (Debit or credit card cashin) flow.
        Given i am on the initial view
        And i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        When The cash in button is clicked
        And Bank Cash-in option is clicked
        Then validate upgrade lynk tier modal - Etop