@signup @mobile
Feature: Sign Up workflow

    Background: The user is on the Sign Up Workflow
        Given i am on the initial view
        And i tap the Sign Up button
        And i am redirected to the What’s your number screen

    @id-5835
    Scenario Outline: Validate "What’s your number?" screen
        Then User redirected to sign up screen

    @id-5854 @sanity
    Scenario Outline: a user do the happy path in What’s your number? screen
        When the user fill the phone number input with phone number like "18765619022"
        #And the user fill the PIN input field with PIN like "199310"
        And i wait 5 seconds
        And i tap the button with text "Verify your number"
        And i tap the button with text "Verify your number"
        Then The user is redirected to the sign up OTP screen

    # @id-5847
    # Scenario Outline: A user enters incorrect PIN number like <PIN> on What's your number screen
    #     When the user fill the phone number input with phone number like "1876561902"
    #     And The user enters an invalid PIN like "<PIN>"
    #     Then the error message with text "<Message>" is displayed

    #     Examples:
    #         | PIN    | Message                                           |
    #         | 123456 | You cannot use sequential numbers (eg.: 123456)   |
    #         | 654321 | You cannot use sequential numbers (eg.: 123456)   |
    #         | 111256 | You cannot repeat the same digit 3 times in a row |
    #         | 111111 | You cannot repeat the same digit 3 times in a row |
    #         | 11     | Set a 6-digit PIN                                 |
    #         | 85647  | Invalid PIN format. PIN should be six digits      |
    #         | 1325%* | Please enter only numbers                         |

    # @id-5845
    # Scenario Outline: A User enters an incorrect phone number
    #     When The user enters an invalid phone number like "1833671"
    #     #And the user fill the PIN input field with PIN like "199310"
    #     Then The verify number button is disabled
        
    
    # @id-5888 //* Test Removed due to OTP Blocker
    # Scenario Outline: A user tries to sign up with a number that already exists
    #     When the user fill the phone number input with phone number like "15076085006"
    #     #When i sign up with phone "+15076085006" and pin "199310"
    #     And i tap the button with text "Verify your number"
    #     And the user fill the OTP input with code received by SMS from phone number "+15076085006"
    #     And i wait 5 seconds
    #     Then The phone number number already exists modal is displayed


    @id-38027
    Scenario Outline: A User enters an incorrect phone number
        When The user enters a phone number like "187618336"
        Then The verify number button is disabled
        And Verify phone number validation error text
