#@bankNickName @mobile

Feature: Setting and Updating Bank Account Nickname


    Background: User is on the user profile page
        Given i am on the initial view
        When i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        And i tap the profile icon


        @id-33983
        Scenario: Verify user is able to set a bank account nickname
            When Bank and Cards is clicked
            And User edits or sets bank nickname to "GavinTest"
            #Then the label with text "TestName" is displayed

        @id-34116
        Scenario: Verify user is unable to set a bank account nickname with greater than 15 characters
            When Bank and Cards is clicked
            And User edits or sets bank nickname to greater than 15 characters "GavinTestAccount"

        
        @id-34117
        Scenario: Verify if is possible set a bank account nickname with alphanumeric characters
            When Bank and Cards is clicked
            And User edits or sets bank nickname with Alpha Numeric characters "Gavin121"

        @id-34118
        Scenario: Verify user is unable to set a bank account nickname with special characters
            When Bank and Cards is clicked
            And User edits or sets bank nickname with special characters "Gavin123@#"

        @id-34119
        Scenario: Verify if is possible set a bank account nickname with hyphen character 
            When Bank and Cards is clicked
            And User edits or sets bank account nickname with hyphen character "Gavin-Joel"

        @id-34120
        Scenario: Verify if the new bank account nickname appears in Bank & Cards screen 
            When Bank and Cards is clicked
            And new bank account nickname appears in Bank & Cards screen "Gavin-Joel"

        @id-34121
        Scenario: Verify if the new bank account nickname appears in Cash In via NCB bank screen
            When Bank and Cards is clicked
            And Verify bank account nickname appears in Cash out via NCB bank screen
        
        @id-34122
        Scenario: Verify if the new bank account nickname appears in Cash Out via NCB bank screen
            When Bank and Cards is clicked
            And Verify bank account nickname appears in Cash in via NCB bank screen

        # @id-34123
        # Scenario: Verify if the new bank account nickname appears in Transaction Activity screen
        #     When Bank and Cards is clicked
        #     And Verify if the new bank account nickname appears in Transaction Activity screen
        
