@addBeneficiary @mobile

Feature: Adding and updating a beneficiary for ACH transfer

    Background: The user has opened the cash out app drawer
        Given i am on the initial view
        And i sign in with phone "18765619022" and pin "199310"
        And i wait 5 seconds
        And I go through tips
        And i wait 10 seconds
        Then The more button is clicked
        And i wait 3 seconds
        And the user scrolls
        And the user scrolls
        And The user clicks the cashout button

        # @id-28416 
        # Scenario: Validate user can add a new beneficiary
        #     When I click other bank transfer
        #     And The user enters PIN that was prompted for "199310"
        #     Then i tap the button with text "Continue"
        #     And The User clicks continue button
        #     And User is redirected to transfers page

        @id-10097
        Scenario: Validate user can access the Add beneficiary
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            And  i tap the button with text "Continue"
            And i tap the button with text "Continue"
            Then User is redirected to add beneficiary page
            

        @id-10098 @sanity @beneficiary-cleanup
        Scenario: Validate user can add a new beneficiary
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects a beneficiary type
            And The user adds beneficiary details like "121100" and "Jon" and "Snow"
            And User selects bank branch
            And i wait 5 seconds
            When I click the beneficiary page continue button
            Then the message with text "New account added!" is displayed

        @id-42039 @beneficiary-cleanup
        Scenario: Validate user can add a new beneficiary with special characters in nickname
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects a beneficiary type
            And The user adds beneficiary details with special characters in nickname like "122100" and "Jon" and "Snow"
            And The user adds a nickname with special character "Gav-Joe"
            And User selects bank branch
            And i wait 5 seconds
            When I click the beneficiary page continue button
            And the message with text "New account added!" is displayed

        @id-42001 @beneficiary-cleanup
        Scenario: Validate user can add a new beneficiary with special characters in first name field
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects a beneficiary type
            And The user adds beneficiary details like "122101" and "J@n" and "Snow"
            And The user adds a first name with special character "J@n"
            And User selects bank branch
            And i wait 5 seconds
            When I click the beneficiary page continue button
            And the message with text "New account added!" is displayed

        @id-42038 @beneficiary-cleanup 
        Scenario: Validate user can add a new beneficiary with special characters in last name field
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects a beneficiary type
            And The user adds beneficiary details like "122105" and "Jon" and "Sn#w"
            And The user adds a last name with special character "Sn#w"
            And User selects bank branch
            And i wait 5 seconds
            When I click the beneficiary page continue button
            And the message with text "New account added!" is displayed

        @id-42079 @beneficiary-setup @beneficiary-cleanup
        Scenario: Validate user cannot search for non existent beneficiaries
            When I click other bank transfer
            Then i wait 10 seconds
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And User searches for a beneficiary "Mac"
            Then Verify that non-existent beneficiary cannot be seen

        @id-42040 @beneficiary-setup @beneficiary-cleanup
        Scenario: Validate user is able update a beneficiary
            When I click other bank transfer
            Then i wait 10 seconds
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            Then i wait 10 seconds
            When I click the edit beneficiary button
            #Then I am redirected to the Benficiary details screen
            When I edit an existing beneficiary

        @id-42041 @beneficiary-setup @beneficiary-cleanup
        Scenario: Validate user is able update a beneficiary to include special characters in names field
            When I click other bank transfer
            Then i wait 10 seconds
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            Then i wait 10 seconds
            When I click the edit beneficiary button
            When I edit an existing beneficiary to include special characters in names field

        @id-42072 @beneficiary-setup @beneficiary-cleanup
        Scenario: Validate user is able cancel the update beneficiary operation
            When I click other bank transfer
            Then i wait 10 seconds
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            Then i wait 10 seconds
            When I click the edit beneficiary button
            When I cancel updating an existing beneficiary

        @id-42044 @beneficiary-setup
        Scenario: Validate user is able to delete a beneficiary
            When I click other bank transfer
            Then i wait 10 seconds
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            Then i wait 10 seconds
            When I click the edit beneficiary button
            When I delete a beneficiary

        @id-50382
        Scenario: Test Case 50382: Validate user is able to select business account type
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects business beneficiary type
            Then Validate add business beneficiary screen

        @id-50383 @beneficiary-cleanup
        Scenario: Test Case 50383: Validate user is able to add business account
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects a non-ncb beneficiary bank
            And The user selects business beneficiary type
            And The user adds business beneficiary details like "000199506" and "Test Inc."
            And User selects bank branch
            Then i tap the button with text "Continue"
            And the message with text "New account added!" is displayed

        @id-50384 @sanity @beneficiary-cleanup-ncb
        Scenario: Test Case 50384: Validate user is able to create beneficiary account-NCB
            When I click other bank transfer
            And The user enters PIN that was prompted for "199310"
            Then i tap the button with text "Continue"
            And The User clicks continue button
            When The user selects ncb beneficiary bank
            And The user selects a beneficiary type
            And The user adds ncb beneficiary details like "191100" and "Robb" and "Stark"
            And User selects NCB bank branch
            Then i tap the button with text "Continue"
            And the message with text "New account added!" is displayed