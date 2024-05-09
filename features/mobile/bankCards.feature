@bankandcards @mobile

Feature: Linking a bank account or card to your lynk account

    # Background: User is on the user profile page
    #     Given i am on the initial view
    #     And i sign in with phone "18765619022" and pin "199310"
    #     And I go through tips
    #     And i tap the profile icon


        @id-16568
        Scenario: Banks and card without Credit Card account previously linked
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            Then User is redirected to Bank and Cards page without linked cards


        @id-10936
        Scenario: User enters an invalid card
            Given i am on the initial view
            When i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            #And I click the connect card button
            #And Enter PIN "199310"
            And i tap the label with text "Continue"
            #And I click the continue button
            And The user selects the bank that the card is from
            And i tap the label with text "Type of card"
            And i tap the label with text "Debit"
            And I click the continue button
            And User Click Currency drop down list
            And i tap the label with text "JMD"
            And I click the continue button
            And I input card number "5359059237047"
            Then Invalid Card number error message should be displayed
            And Continue button should be disabled

        @id-10938 
        Scenario: Test Case 10938: Validate message when user enters invalid expiration date
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            #And I click the connect card button
            #And Enter PIN "199310"
            #And I click the continue button
            And i tap the label with text "Continue"
            And The user selects the bank that the card is from
            And i tap the label with text "Type of card"
            And i tap the label with text "Debit"
            And I click the continue button
            And User Click Currency drop down list
            And i tap the label with text "JMD"
            And I click the continue button
            And I input card number "5100270000000072"
            And I click the continue button
            And I input card expriation date "02/21"
            Then Invalid expiry date error message should be displayed
            And Continue button should be disabled

        @id-36602
        Scenario: Verify card registration flow has 6 currencies to choose from
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            And i tap the label with text "Continue"
            And The user selects the bank that the card is from
            And i tap the label with text "Type of card"
            And i tap the label with text "Debit"
            And I click the continue button
            And User Click Currency drop down list
            Then The six approved currencies are displayed

        


        @id-17880 @sanity
        Scenario: Validate user can register a Jamaican issued card
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            #And I click the connect card button
            #And Enter PIN "199310"
            #And I click the continue button
            And i tap the label with text "Continue"
            And The user selects the bank that the card is from
            And i tap the label with text "Type of card"
            And i tap the label with text "Debit"
            And I click the continue button
            And User Click Currency drop down list
            And i tap the label with text "JMD"
            And I click the continue button
            And I input card number "4012010000020070"
            And I click the continue button
            And I input card expriation date "02/27"
            And I click the continue button
            And i wait 5 seconds
            And I input name on card "Luiz Bellucci"
            And I click the continue button
            And I input card CVV "856"
            And I click the continue button
            And I input card nickname "Luiz"
            And I click the continue button
            And the user scrolls
            Then User is redirected to the verify card screen

        # @id-48724
        # Scenario: Test Case 48724: Verify the behavior when the user registers a non 3DS card
        #     Given i am on the initial view
        #     And i sign in with phone "18765619022" and pin "199310"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     And i tap the label with text "Add payment method"
        #     #And i tap the label with text "Add another account"
        #     And The user selects the bank that the card is from
        #     And i tap the label with text "Type of card"
        #     And i tap the label with text "Debit"
        #     And I click the continue button
        #     And User Click Currency drop down list
        #     And i tap the label with text "JMD"
        #     And I click the continue button
        #     And I input card number "4590728404262556"
        #     And I click the continue button
        #     And I input card expriation date "01/28"
        #     And I click the continue button
        #     And i wait 5 seconds
        #     And I input name on card "Evald Nucci"
        #     And I click the continue button
        #     And I input card CVV "856"
        #     And I click the continue button
        #     And I input card nickname "Evald"
        #     And I click the continue button
        #     Then Non-3DS card Lynking error is displayed


        # @id-17881
        # Scenario: Validate user is blocked from adding a card that isn't a Jamaican card
        #     Given i am on the initial view
        #     And i sign in with phone "18765619022" and pin "199310"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     And User Click add payment method button
        #     And i tap the label with text "Card"
        #     And Enter PIN "199310"
        #     And I click the continue button
        #     And i tap the label with text "Type of card"
        #     And i tap the label with text "Debit"
        #     And I click the continue button
        #     And User Click Currency drop down list
        #     And i tap the label with text "USD"
        #     And I click the continue button
        #     And I input card number "5359059237047487"
        #     And I click the continue button
        #     And I input card expriation date "06/25"
        #     And I click the continue button
        #     And I input name on card "Arman Finckh"
        #     And I click the continue button
        #     And I input card nickname "Arman"
        #     And I click the continue button
        #     Then Non-Jamaican card Lynking error is displayed
            

        @id-16569
        Scenario: Banks and Cards with Credit Card accounts already linked
            Given i am on the initial view
            And i sign in with phone "16465780322" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            Then Screen Verification with credit cards already linked

        @id-19375
        Scenario: Cash via Cards enhancements - Biometric/PIN Verification - Card Limit Reached
            Given i am on the initial view
            And i sign in with phone "16465780322" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            #Then the label with text "Banks and cards" is displayed
            Then i tap the label with text "Add payment method"
            #And i tap the label with text "Add another account"
            And The user selects the bank that the card is from
            And the message with text "Maximum amount reached" is displayed
            And Maximum Card amount message is displayed
            # And the button with text "Go to profile" is displayed


        # @id-34362
        # Scenario: Verify if is possible to choose a preferred account - via Banks and Cards
        #     Given i am on the initial view
        #     And i sign in with phone "16465780322" and pin "199310"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     And User updates preffered account


        # @id-34363
        # Scenario: Verify if is possible to cancel the preferred account option - via Banks and Cards
        #     Given i am on the initial view
        #     And i sign in with phone "16465780322" and pin "199310"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     And User cancels update preffered account


        # @id-34503
        # Scenario: Verify is the user is able to unlink his preferred account - via Banks and Cards
        #     Given i am on the initial view
        #     And i sign in with phone "79366199905" and pin "040992"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     And User can unlink preffered account

        @id-47319
        Scenario: Validate charge for verification card help modal on add card screen
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            And i tap the label with text "Continue"
            #And i tap the label with text "Add another account"
            And The user selects the bank that the card is from
            And The user taps the learn more link
            Then Verify contents of verification charge modal

        @id-47320
        Scenario: Test Case 47320: Validate charge for verification card help modal on Verify your card screen
            Given i am on the initial view
            And i sign in with phone "16465780322" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And I am on the Connect Bank account or Cards Screen
            And The user opens the registered but unverified card
            Then Verify contents verification card help modal on Verify your card screen

        @id-50315
        Scenario: Test Case 50315: Validate user is able to navigate to connect a card flow (NCB card)
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And i tap the label with text "Continue"
            #And i tap the label with text "Add another account"
            And i tap the label with text "National Commercial Bank"
            Then Verify NCB bank account addition type

        @id-50316
        Scenario: Test Case 50316: Validate user is able to navigate to connect a bank account (via homescreen)
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And i tap the label with text "Continue"
            #And i tap the label with text "Add another account"
            And i tap the label with text "National Commercial Bank"
            And i tap the label with text "Connect account"
            Then Verify user is able to navigate to add NCB bank

        @id-50350
        Scenario: Test Case 50350: Validate user is able to navigate to connect a card flow (other bank )
            Given i am on the initial view
            And i sign in with phone "18765619022" and pin "199310"
            And I go through tips
            And i tap the profile icon
            When Bank and Cards is clicked
            And i tap the label with text "Continue"
            #And i tap the label with text "Add another account"
            And i tap the label with text "Bank Of Nova Scotia (Jamaica) Limited"
            Then Verify user is able to navigate to add non-NCB card flow

        # @id-delete
        # Scenario: Delete Linked Card
        #     Given i am on the initial view
        #     And i sign in with phone "18765619022" and pin "199310"
        #     And I go through tips
        #     And i tap the profile icon
        #     When Bank and Cards is clicked
        #     Then Delete Linked Cards "199310"