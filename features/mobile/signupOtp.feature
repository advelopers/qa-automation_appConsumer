@signupotp @mobile
Feature: Sign Up OTP workflow

    Background: The user is on the Sign Up OTP screen
        Given i am on the initial view
        And i tap the Sign Up button
        And i am redirected to the What’s your number screen
        When the user fill the phone number input with phone number like "18765619022"
        #And the user fill the PIN input field with PIN like "244756"
        And i tap the button with text "Verify your number"
        And i tap the button with text "Verify your number"
        #And i sign up with phone "12514187060" and pin "244756"

    # @id-screen-validation @id-9999
    # Scenario Outline: Signup - Verify your number - screen validation
    #     Then Sign up OTP screen validation

    # @id-opt @id-5860
    # Scenario Outline: The user enter the right OTP sms code
    #     When the user fill the OTP input with code received by SMS from phone number "+12514187060"
    #     Then The User is Redirected to the personal info screen

    @id-5881
    Scenario Outline: a user wants to send the OTP to a different number in Verify your number
        When i tap the button with text "Send to different number"
        Then The user is taken back to the Sign Up Screen

    @id-5861
    Scenario Outline: the user enter and incorrect OTP number in Verify your number screen
        When i wait 5 seconds
        When the user type "000333" in the sms input code
        Then the error message with text "Wrong code. Please, try again" is displayed

    @id-5875
    Scenario Outline: a user click resend option in Verify your number
        When i tap the button with text "Resend code"
        Then the label with text "Resend code" is displayed
        And the label with text "Sometimes, text messages take a minute to arrive. So that we don’t send you multiple codes and confuse you, please wait until the counter resets. You may get the message while you wait!" is displayed
        And the button Resend Code is displayed