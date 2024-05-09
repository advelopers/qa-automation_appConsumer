#@VerifyIdentity @mobile
Feature: Validate Verify Identity Screen

Background: The user is Navigates to Verify Identity Screen
        Given i am on the initial view
        And i tap the Sign Up button
        And i am redirected to the What’s your number screen
        And i sign up with phone "15076085006" and pin "199308"
        And the user fill the OTP input with code received by SMS from phone number "+15076085006"
        And The User is Redirected to the page titled "A little About you.."
        And The user types symbols in the name fields like "Gavin" and "Bannister"
        And The User enters email address like "gavin.qa40@mailinator.com"
        And The User re-enter email address like "gavin.qa40@mailinator.com" to validate
        And The user clicks the continue button
    
    @id-5890 @sanity
    Scenario Outline: Validating the Contents of the Verify your Identity Page
    When The user is redirected to the Verify Identity Page
    Then Validate Contents of the Verify your Identity Page