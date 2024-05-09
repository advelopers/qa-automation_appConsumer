@resetPIN @mobile

Feature: User has fotgotten their PIN and wants to reset it

@id-5993
Scenario: A user wants to recover the PIN and the phone number is empty
    Given i am on the initial view
    And i tap the sign in button
    And the label with text "Sign In" is displayed
    And I click the Forgot PIN link
    And the label with text "Secure verification" is displayed
    And I enter information on the Forgot PIN page "+15076085006"