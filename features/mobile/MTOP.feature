@mtop @mobile

Feature: Mobile Top up

    # Background: Sign in with user to do a payment request
    # Given i am on the initial view
    # And i sign in with phone "18765619022" and pin "199310"
    # And I go through tips
    # And i tap the label with text "More"
        
    
    @id-21732 @sanity
    Scenario: Validate user is able to add recipient's Phone Number & Top-Up Amount
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i wait 3 seconds
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Lynk"
        And User adds top up information phone number "18764767783" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        #And i tap the label with text "$100"
        And i tap the label with text "0"
        When  I enter the top up amount "1"
        And i tap the button with text "Submit for review"
        Then I am redirected to the top up review page
        And i wait 3 seconds
        When I swipe to confirm top up
        Then The top up was successful

    @id-21735 @sanity
    Scenario: Validate top up review page
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And User adds top up information phone number "18764767783" and name "Gavin"
        And i wait 3 seconds
        #And I select a carrier
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Lynk"
        And User adds top up information phone number "18764767783" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        #And i tap the label with text "$100"
        And i tap the label with text "0"
        When  I enter the top up amount "1"
        And i tap the button with text "Submit for review"
        Then Validate the top up review page

    
    @id-21734
    Scenario: Validate Top Up screen contacts not synced
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then Contacts not synced screen validation

    # @id-21737 //* Test is no longer valid in BETA ENV, user is allowed to top-up with less than $100
    # Scenario: Validate user is unable to enter less than the minimum amount
    #     Given i am on the initial view
    #     When i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     Then i tap the label with text "Top-up"
    #     And the input with placeholder "PIN" is displayed
    #     And I enter pin "199310"
    #     And i tap the button with text "Continue"
    #     Then User is redirected to top up screen
    #     And i tap the button with text "Create new Top Up"
    #     And i wait 3 seconds
    #     And the label with text "Top Up" is displayed
    #     And the label with text "Enter the phone number you want to top up." is displayed
    #     And the input with placeholder "Carrier" is displayed
    #     And the input with placeholder "Name (optional)" is displayed
    #     And the button with text "Continue" is displayed
    #     And Continue button is disabled
    #     And i wait 3 seconds
    #     And i tap the label with text "Carrier"
    #     And i tap the label with text "Carrier"
    #     And i tap the label with text "Lynk"
    #     And User adds top up information phone number "18765619022" and name "Gavin"
    #     Then Continue button should be enabled
    #     And i tap the button with text "Continue"
    #     And i tap the label with text "0"
    #     When  I enter the top up amount "99"
    #     Then Validate minimum amount message
        
    @id-21738
    Scenario: Validate user is unable to enter an amount greater than Lynk Balance (unlinked)
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i wait 3 seconds
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Lynk"
        And User adds top up information phone number "18765619022" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        When i tap the label with text "0"
        And I enter the top up amount "5000"
        Then Validate insufficent funds to top up message - Unlinked Bank account

    @id-21741
    Scenario: Validate user receives error when carrier and phone number does not match
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i wait 3 seconds
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Digicel"
        And User adds top up information phone number "18762105628" and name "Test"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        #And i tap the label with text "$100"
        And i tap the label with text "0"
        When  I enter the top up amount "1"
        And i tap the button with text "Submit for review"
        Then I am redirected to the top up review page
        And i wait 3 seconds
        When I swipe to confirm top up
        Then Verify error modal when carrier is incorrect

    # @id-21742
    # Scenario: Validate user receives error if phone number is on post paid plan
    #     Then i tap the label with text "Top-up"
    #     And the input with placeholder "PIN" is displayed
    #     And I enter pin "199310"
    #     And i tap the button with text "Continue"
    #     Then User is redirected to top up screen
    #     And i tap the button with text "Create new Top Up"
    #     And i wait 3 seconds
    #     And the label with text "Top Up" is displayed
    #     And the label with text "Enter the phone number you want to top up." is displayed
    #     And the input with placeholder "Carrier" is displayed
    #     And the input with placeholder "Name (optional)" is displayed
    #     And the button with text "Continue" is displayed
    #     And Continue button is disabled
    #     And i tap the label with text "Carrier"
    #     And i tap the label with text "Digicel"
    #     And User adds top up information phone number "18764767783" and name "Test"
    #     Then Continue button should be enabled
    #     And i tap the button with text "Continue"
    #     Then the label with text "Unable to Top Up" is displayed
    #     And the label with text "Seems like you selected a number that is post paid so you won't be able to top up that account. Check the number and try again" is displayed
    #     And the button with text "Try again" is displayed
    #     And the label with text "Nevermind" is displayed

    # @id-21746
    # Scenario: Validate user is able to see recent recipients
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     Then i tap the label with text "Top-up"
    #     And the input with placeholder "PIN" is displayed
    #     And I enter pin "199310"
    #     And i tap the button with text "Continue"
    #     Then User is redirected to top up screen
    #     When I click a recent top up
    #     Then the button with text "Submit for review" is displayed
    #     And the label with text "$100" is displayed
    #     And the label with text "18765619022" is displayed

    @id-21881
    Scenario: Validate user is able to choose from a pre-defined amount for Top-Up
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i wait 3 seconds
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Digicel"
        And User adds top up information phone number "18765619022" and name "Gavin"
        And i tap the button with text "Continue"
        Then User is able to select from pre-defined amounts

    @id-21886
    Scenario: Validate user receives Cash In option when they have insufficient funds for Top-Up
        Given i am on the initial view
        When i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "040992"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Digicel"
        And User adds top up information phone number "18765619022" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        When i tap the label with text "0"
        And I enter the top up amount "5000"
        Then the label with text "Your Lynk account doesn’t have enough to top up this much... Cash in to complete the top up." is displayed
        Then the label that contains text "CASH IN" is not displayed
        Then Click input amount field
        Then Verify Cash In Button is visible
        Then Verify Cash-In button can be clicked

    @id-21902
    Scenario: Validate the character limit on mobile number field
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And User adds top up information phone number "18765619022123456" and name "Gavin"
        Then Mobile number field is empty

    # @id-21902
    # Scenario: Validate name only accepts 20 characters
    #     Given i am on the initial view
    #     When i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     Then i tap the label with text "Top-up"
    #     And the input with placeholder "PIN" is displayed
    #     And I enter pin "199310"
    #     And i tap the button with text "Continue"
    #     Then User is redirected to top up screen
    #     And i tap the button with text "Create new Top Up"
    #     And i wait 3 seconds
    #     And the label with text "Top Up" is displayed
    #     And the label with text "Enter the phone number you want to top up." is displayed
    #     And the input with placeholder "Carrier" is displayed
    #     And the input with placeholder "Name (optional)" is displayed
    #     And the button with text "Continue" is displayed
    #     And Continue button is disabled
    #     And User adds top up information phone number "18765619022" and name "GavinJoelBannistera--"
    #     Then Text field automatically removes excess characters
    
    @id-21903
    Scenario: Validate name only accepts letters
        Given i am on the initial view
        When i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And User adds top up information phone number "18765619022" and name "GavinJoelBannistera-9"
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Digicel"
        Then Name field should have text "GavinJoelBannistera-"

    @id-45074
     Scenario: Test Case 45074: M-TOP - Low KYC User performs purchase within operating limits for that tier - Happy Path
        Given i am on the initial view
        And i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Lynk"
        And User adds top up information phone number "18764767783" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        #And i tap the label with text "$100"
        And i tap the label with text "0"
        When  I enter the top up amount "1"
        And i tap the button with text "Submit for review"
        Then I am redirected to the top up review page
        And i wait 3 seconds
        When I swipe to confirm top up
        Then The top up was successful for low KYC account
        # And i tap the button with text "Go to home"
        # Then i should be redirected to the dashboard
        # And the label that contains text "successful" is displayed


    @id-52377 @sanity
    Scenario: Test Case 52377: Validate user can purchase mobile data plan
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Flow"
        And i tap the label with text "Product"
        And i tap the label with text "Data Plan"
        And User adds top up information phone number "18768607971" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        And i tap the label with text "Flow 2 Day"
        And i tap the button with text "Submit for review"
        Then Validate data plan purchase review page

    # @id-52378 /* Removing test case, changes made has resulted in it not being applicable anymore
    # Scenario: Test Case 52378: Validate screen when no data plan is available
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     And i tap the label with text "More"
    #     Then i tap the label with text "Top-up"
    #     And the input with placeholder "PIN" is displayed
    #     And I enter pin "199310"
    #     And i tap the button with text "Continue"
    #     Then User is redirected to top up screen
    #     And i tap the button with text "Create new Top Up"
    #     And i wait 3 seconds
    #     And the label with text "Top Up" is displayed
    #     And the label with text "Enter the phone number you want to top up." is displayed
    #     And the input with placeholder "Carrier" is displayed
    #     And the input with placeholder "Name (optional)" is displayed
    #     And the button with text "Continue" is displayed
    #     And Continue button is disabled
    #     And i tap the label with text "Carrier"
    #     And i tap the label with text "Carrier"
    #     And i tap the label with text "Digicel"
    #     And i tap the label with text "Product"
    #     And i tap the label with text "Data Plan"
    #     And User adds top up information phone number "18765619022" and name "Gavin"
    #     Then Continue button should be enabled
    #     And i tap the button with text "Continue"
    #     Then Validate Screen when no plan is available


    @id-52385
    Scenario: Test Case 52385: Validate error when user has insufficient funds (no loan balance)
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Flow"
        And i tap the label with text "Product"
        And i tap the label with text "Data Plan"
        And User adds top up information phone number "18768607971" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        And i wait 10 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "Flow 30 Day"
        Then Validate insufficient funds message


    @id-52384
    Scenario: Test Case 52384: Validate error modal when a user attempts to use a postpaid device
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Flow"
        And i tap the label with text "Product"
        And i tap the label with text "Data Plan"
        And User adds top up information phone number "18768663799" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        And i wait 10 seconds
        Then Validate error modal when a user attempts to use a postpaid device

    @id-52388
    Scenario: Test Case 52388: Validate error modal phone number carrier mismatch
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        And i tap the label with text "More"
        Then i tap the label with text "Top-up"
        And the input with placeholder "PIN" is displayed
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then User is redirected to top up screen
        And i tap the button with text "Create new Top Up"
        And i wait 3 seconds
        And the label with text "Top Up" is displayed
        And the label with text "Enter the phone number you want to top up." is displayed
        And the input with placeholder "Carrier" is displayed
        And the input with placeholder "Name (optional)" is displayed
        And the button with text "Continue" is displayed
        And Continue button is disabled
        And i tap the label with text "Carrier"
        And i tap the label with text "Carrier"
        And i tap the label with text "Flow"
        And i tap the label with text "Product"
        And i tap the label with text "Data Plan"
        And User adds top up information phone number "18765619022" and name "Gavin"
        Then Continue button should be enabled
        And i tap the button with text "Continue"
        And i wait 10 seconds
        Then Validate error modal phone number carrier mismatch