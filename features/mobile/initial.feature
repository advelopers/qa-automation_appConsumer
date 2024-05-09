#@initial @mobile
Feature: Initial screen when you open the app and for the first time.

    @id-5790 @screen-validation
    Scenario: validate initial screen elements ( Carrousel )
        Given i am on the initial view
        Then the Carousel is displayed
        And the button with text "Sign Up" is displayed
        And the label with text "Already have an account?" is displayed
        And the button with text "Sign In" is displayed