@requestResponse @mobile
Feature: Respond to a received Request

    # @request-response-screen-validate
    # Scenario: Screen Verification for the Request Response Screen
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And i wait 5 seconds
    #     And I go through tips
    #     And i wait 10 seconds
    #     And the user scrolls on the dashboard
    #     And i tap the label with text "View all transactions"
    #     And i tap the button with text "Respond"
    #     And i wait 5 seconds
    #     Then the label that contains text "You have a money request from" is displayed
    #     And Requester Display Name with username and Request Amount should be displayed

    @id-6674 @id-6659 @sanity @requestResponseSetup
    Scenario: Respond to request from Activity screen "All" Tab
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And i wait 5 seconds
        And I go through tips
        And i wait 10 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i wait 5 seconds
        When I accept a request from all Tab

    @id-6675 @requestResponseSetup
    Scenario: Respond to request from Activity screen "Requests" tab
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And i wait 5 seconds
        And I go through tips
        And i wait 10 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        When I accept a request from Request Tab

    # @id-19122
    # Scenario: Validate user can send transfer on responding to a request from Notifications
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     When I accept a request from Notification section

    # @id-6660-validation
    # Scenario: Decline Request - Screen Validation
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And i wait 5 seconds
    #     And I go through tips
    #     And i wait 10 seconds
    #     And the user scrolls on the dashboard
    #     And i tap the label with text "View all transactions"
    #     And i tap the button with text "Respond"
    #     And i tap the button with text "Decline"
    #     Then User is redirected to the Decline Request Validation Screen

    @id-6660 @requestResponseSetup
    Scenario: Decline Request
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And i wait 5 seconds
        And I go through tips
        And i wait 10 seconds
        #And the user scrolls on the dashboard
        When I Decline a request

