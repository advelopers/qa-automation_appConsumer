#@signup-cust@mobile
Feature: Signup Enter Customer Details Flow

Background: The user is on the Sign Up Enter Customer Info screen
        Given i am on the initial view
        And i tap the Sign Up button
        And i am redirected to the What’s your number screen
        When the user fill the phone number input with phone number like "12514187060"
        #And i sign up with phone "15076085006" and pin "199308"
        And i tap the button with text "Verify your number"
        And the user fill the OTP input with code received by SMS from phone number "+15076085006"
        And The User is Redirected to the page titled "A little About you.."

    @id-5887
    Scenario Outline: The User Enters Symbols in first name field
    When The user types symbols in the name fields like "G@vin" and "Bann!$ter"
    And The User enters email address like "gavin.qa30@mailinator.com"
    And The User re-enter email address like "gavin.qa30@mailinator.com" to validate
    And The user clicks the continue button
    And the error message with text "Invalid name: only letters, -, '" is displayed


    @id-20221
    Scenario Outline: The user enters special Characters in Email Address
    When The user types symbols in the name fields like "Gavin" and "Bannister"
    And The User enters email address like "ga-vin.qa30@mailinator.com"
    And The User re-enter email address like "ga-vin.qa30@mailinator.com" to validate
    And The user clicks the continue button
    And The user is redirected to the Verify Identity Page

    @id-12493
    Scenario Outline: User Emails do not match
    When The user types symbols in the name fields like "Gavin" and "Bannister"
    And The User enters email address like "gavin.qa30@mailinator.com"
    And The User re-enter email address like "gavin.qa35@mailinator.com" to validate
    And The user clicks the continue button
    And the error message with text "It doesn’t look like your emails match." is displayed
    
    @id-5889
    Scenario Outline: User Signs up with an email that has already been used
    When The user types symbols in the name fields like "Gavin" and "Bannister"
    And The User enters email address like "gavin.qa30@mailinator.com"
    And The User re-enter email address like "gavin.qa30@mailinator.com" to validate
    And The user clicks the continue button
    And the message with text "Email registered" is displayed
    And the message with text "This email is already taken. Please, sign in with the phone number associated to this email or contact our customer support to help you." is displayed

    @id-12491
    Scenario Outline: A user enters an invalid email address
    When The user types symbols in the name fields like "Gavin" and "Bannister"
    And The User enters email address like "cc@c.i"
    And The User re-enter email address like "cc@c.i" to validate
    And The user clicks the continue button
    And the error message with text "Enter a valid email" is displayed
