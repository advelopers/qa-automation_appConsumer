@sendRequest @mobile
Feature: Send Request

    Background: Sign in with user to do a payment request
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And I click the send or ask button
        #And i tap the button with text "Ask"

    # @screen-validation
    # Scenario: Screen Validation
    #     Then the label with text "Send" is displayed
    #     And  the input with placeholder "Search name, number, or email" is displayed
    #     And  the input with placeholder "0" is displayed
    #     And  the label with text "J$" is displayed
    #     And  the label with text "Add a note (optional)" is displayed
    #     And  the label with text "Complete to send" is displayed

    @id-6658 @sanity
    Scenario: Make a P2P request Successfully
        When i search for and select user "larry-king"
        And i tap the button with text "Ask"
        And i enter the amount "4" to make a request
        And I swipe up to confirm
        Then Request was successful is displayed

    @id-7223
    Scenario: Send Transfer multiples times in less than 60 seconds
        When i search for and select user "alanzo-hamilton"
        And i tap the button with text "Ask"
        And i enter the amount "5" to make a request
        And i wait 2 seconds
        And user swipe to confirm
        And i wait 3 seconds
        And I click the send or ask button
        When i search for and select user "alanzo-hamilton"
        And i tap the button with text "Ask"
        #When i search for and select user "alanzo-hamilton"
        And i enter the amount "5" to make a request
        And user swipe to confirm
        Then Verify duplicate recent transfer

    @id-6664
    Scenario: Request with the amount equal to zero
        When i search for and select user "alanzo-hamilton"
        And i tap the button with text "Ask"
        And i enter the amount "0" to make a request
        Then Request cannot be completed

    #  @id-54517
    # Scenario: Test Case 54517: Validate confirm recipient modal not displayed for P2P requests
    #     #When i tap the button with text "Ask"
    #     When Validate confirm recipient modal not displayed for P2P requests "taxess"


        # Examples:
        #     | amount | message             | button_text         | contact_number | contact_name |
        #     | 0      | Complete to request | Complete to request | 18764767783    | AH           |
        #     | 5      | Request successful! | Click to request    | 18764767783    | AH           |
        #     | 4.53   | Request successful! | Click to request    | 18764767783    | AH           |
        #     | 99999  | Request successful! | Click to request    | 18764767783    | AH           |