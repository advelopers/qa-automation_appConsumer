@transactionHistory @mobile @sanity

Feature: Transaction History Page Validation

    Background: Move the user to the Signin screen
    Given i am on the initial view
    #When  i sign in with phone "<phone>" and pin "<pin>"
    #And   I go through tips
    #And   i tap the label with text "See all"

    @id-5918
    Scenario: Validate the Activity screen with no transactions in "All"
        When  i sign in with phone "<phone>" and pin "<pin>"
        And   I go through tips
        Then validate empty All tab
        #Then i should be redirected to the transaction History Page
        #And User is redirected to empty transaction history screen

        Examples:
            | phone        | pin    |
            | 18768607971  | 199310 |
    
    @id-6518
    Scenario: Validate activity history "Received" Empty
        When  i sign in with phone "<phone>" and pin "<pin>"
        And   I go through tips
        Then validate empty received tab
        # Then i should be redirected to the transaction History Page
        # When i tap the label with text "Received"
        # Then User is redirected to empty transactions received screen

        Examples:
            | phone        | pin     |
            | 18768607971  | 199310  |


    @id-5919
    Scenario: Validate the Activity screen "All" to show transaction by group ( Pending, Today, This week, By month )
        When  i sign in with phone "<phone>" and pin "<pin>"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And the label with text "Activity" is displayed
        And the label with text "Respond" is displayed
        And the user scrolls
        And User is redirected to all transactions screen

        Examples:
            | phone        | pin    |
            | 18765619022  | 199310 |   

    @id-5950
    Scenario: Validate the Activity screen "Sent" tab ( Today, This week, By month )
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And the label with text "Activity" is displayed
        And i tap the label with text "Sent"
        And User is redirected to sent transactions screen

    @id-8245
    Scenario: Validate the Activity screen "Received" tab
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And the label with text "Activity" is displayed
        And i tap the label with text "Received"
        And User is redirected to received transactions screen

    @id-8309
    Scenario: Validate transaction details modal when a request is received
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Requested,"
        And the label with text "TRANSACTION DETAILS" is displayed
        And the label with text "Request" is displayed
        And the button with text "Report a problem" is displayed
        And the button with text "Respond" is displayed
        And transaction details are visible
        #And the label with text "Requested," is displayed

    @id-8311
    Scenario: Validate transaction details modal when a sent request is pending
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Requests"
        When User clicks pending item
        And Validate the contents of a pending request modal

    @id-8312
    Scenario: Test Case 8312: Validate transaction details modal when a sent request is accepted
        When  i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        When User clicks accepted request item

    @id-8310
    Scenario: Validate transaction details modal when a received request is declined
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Requests"
        And the user scrolls
        And the user scrolls
        And the user scrolls
        And i tap the label with text "Declined"
        And Validate the contents of a declined request modal

    @id-4929
    Scenario: Test Case 4929: [FE-QA] Contact us- "Report a problem" button dont work
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And  i tap the label with text "Received"
        And i tap the label with text "Received,"
        And i tap the label with text "Report a problem"
        And Validate the contents of the report a problem screen
        
    @id-8316
    Scenario: Validate  transaction details modal when a request is sent to a lynk user with notes
        When  i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        #And i tap the label with text "Requests"
        When i open a transaction with notes
        Then Validate the contents of a request modal that has notes

    @id-8313
    Scenario: Test Case 8313: Validate transaction details screen when a sent request with notes is accepted
        When i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        When i open a transaction with notes
        Then Validate transaction detail screen when request with notes is accepted

    @id-8319
    Scenario: Validate  transaction details modal when funds are Cashed in from NCB
        When  i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And   I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        And i wait 5 seconds
        And Scroll until NCB Cash in element is displayed
        And i tap the label with text "Savings-NCB"
        Then Validate the contents of a transaction activity modal of a cash-in transaction

    @id-8320
    Scenario: Validate transaction details modal when funds are Cashed out to NCB
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And Scroll until NCB Cash out element is displayed
        And i tap the label with text "Savings-NCB"
        Then Validate the contents of a transaction activity modal of a cash-out transaction

    @id-6518
    Scenario: Validate transaction details modal when funds are Cashed in via Card
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        And i tap the label with text "Auto"
        Then Validate transaction details screen after card cash in

    @id-33538
    Scenario: Validate transaction details screen for ACH transfers
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And i tap the label with text "Matthew budram"
        Then Validate transaction details screen for ACH transfers

    @id-33539
    Scenario: Validate cash out again via ACH transfer details screen
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And i tap the label with text "Matthew budram"
        And i tap the label with text "Cash out again"
        And I enter pin "040992"
        And i tap the button with text "Continue"
        Then Validate cash out again via ACH transfer details screen
    
    @id-33545
    Scenario: Validate transaction details screen after Bill payment
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And Scroll until Bill Payment element is displayed
        And i tap the label with text "JPS"
        Then Validate transaction details screen for Bill Payment

    @id-33546
    Scenario: Validate user can pay again on Bill payment details screen
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And Scroll until Bill Payment element is displayed
        And i tap the label with text "JPS"
        And i tap the label with text "Pay again"
        Then Validate user can pay again from Bill payment details screen

    @id-33549
    Scenario: Validate transaction details screen after Mobile Top Up
        When i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And i tap the label with text "Gavin"
        Then Validate transaction details screen after Mobile Top Up

    @id-33550
    Scenario: Validate user can do Top again while on MTOP transaction details screen
        When i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And i tap the label with text "Gavin"
        And i tap the label with text "Top up again"
        And I enter pin "199310"
        And i tap the button with text "Continue"
        Then Validate user can do Top again while on MTOP transaction details screen

    @id-33950 @cbd
    Scenario: Validate transaction details screen on JMD to JAM-Dex exchange
        When i sign in with phone "18592164115" and pin "981223"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And the user scrolls
        And the user scrolls
        And i tap the label with text "Lynk to JAM-DEX"
        Then Validate transaction details screen on JMD to JAM-Dex exchange

    @id-33951 @cbd
    Scenario: Validate transaction details screen on JAM-Dex to JMD exchange
        When i sign in with phone "18592164115" and pin "981223"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And the user scrolls
        And the user scrolls
        And i tap the label with text "JAM-DEX to Lynk"
        Then Validate transaction details screen on JAM-Dex to JMD exchange

    @id-29712 @cbd
    Scenario: Validate User switch from JMD activity screen to CBDC activity screen
        When i sign in with phone "18592164115" and pin "981223"
        And I go through tips
        And i tap the label with text "Lynk balance"
        And i tap the label with text "See all Transactions"
        Then i should be redirected to the transaction History Page
        And Verify User can switch currency from Lynk to JAM-DEX

    @id-29713 @cbd
    Scenario: Validate User switch from CBDC activity screen to JMD activity screen
        When i sign in with phone "18592164115" and pin "981223"
        And I go through tips
        And i tap the label with text "JAM-DEX Balance"
        And i tap the label with text "See all Transactions"
        # Then i should be redirected to the transaction History Page
        And Verify User can switch currency from JAM-DEX to Lynk

    @id-29723 @cbd
    Scenario: Instead of "Request" tab, "Exchanges" tab appears.
        When i sign in with phone "18592164115" and pin "981223"
        And I go through tips
        And i tap the label with text "JAM-DEX Balance"
        And i tap the label with text "See all Transactions"
        Then Verify that instead of the Request tab being displayed the Exchange tab appears

    @id-8247
    Scenario: Validate cash in again via Card Cash-in transfer details screen
        When i sign in with phone "79366199905" and pin "040992"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        And i tap the label with text "Auto"
        And i tap the label with text "Cash in again"
        And I enter pin "040992"
        And i tap the button with text "Continue"
        And I input card CVV "843"
        And I click the continue button
        Then Validate user can pay again from cash-in via cards details screen

    @id-34061
    Scenario: Test Case 34061: Validate transaction details modal when a request is Referral bonus
        When i sign in with phone "18765619022" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        And Scroll until Refferal Bonus element is displayed
        And i tap the label with text "Referral Bonus"
        Then Validate transaction details screen for Refferal Bonus

    @id-34062
    Scenario: Test Case 34062: Validate transaction details modal when a request is welcome bonus
        When i sign in with phone "16465780322" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Received"
        And Scroll until Welcome Bonus element is displayed
        And i tap the label with text "Welcome Bonus"
        Then Validate transaction details screen for Welcome Bonus

    @id-27767
    Scenario: Test Case 27767: Validate user is able to see merchant payments in activity history
        When i sign in with phone "16465780322" and pin "199310"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Sent"
        And i tap the label with text "Test Merchant"
        Then Validate the contents of a transaction activity modal of a merchant payment transaction

    @id-33955
    Scenario: Test Case 33955: User taps exchange again on JMD to JAM-dex details screen
        When i sign in with phone "18592164115" and pin "981223"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "Lynk to JAM-DEX"
        And i tap the label with text "Exchange again"
        And I enter pin "981223"
        And i tap the button with text "Continue"
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate user can perform Lynk to JAM-DEX exchange again

    @id-33956
    Scenario: Test Case 33956: User taps exchange again on JAM-dex to JMD details screen
        When i sign in with phone "18592164115" and pin "981223"
        And i wait 3 seconds
        And I go through tips
        And i wait 3 seconds
        And the user scrolls on the dashboard
        And the user scrolls on the dashboard
        And i tap the label with text "View all transactions"
        Then i should be redirected to the transaction History Page
        And i tap the label with text "JAM-DEX to Lynk"
        And i tap the label with text "Exchange again"
        And I enter pin "981223"
        And i tap the button with text "Continue"
        And i wait 3 seconds
        And I go through exchange tips
        Then Validate user can perform JAM-DEX to Lynk exchange again
