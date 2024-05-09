@sendTransfer @mobile
Feature: Transfer Money

    # Background: Sign in the user that will send the request
    #     Given i sign in with phone "18765619022" and pin "199310"
    #     And   I go through tips
    #     And   the label with text "Last transactions" is displayed
    #     #When  I click the send or ask button

    @id-19139
    Scenario: Validate Transfer screen
        Given i sign in with phone "18765619022" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When  I click the send or ask button
        #And i search for and select user "alanzo-hamilton"
        Then User is redirected to transfers screen
        # And i tap the button with text "Ask"
        # And User is redirected to transfers screen

    # @id-6456 @id-6498 @id-6509 @id-6496 @id-6500 @id-6506
    # Scenario Outline: Validate Transfer feature with amount: <amount>
    #     Given  i search for user "<contact_number>"
    #     And    i double tap the button with text "@<contact_number>"
    #     And    the label with text "<contact_name>" is displayed
    #     And    i enter the amount "<amount>" to transfer
    #     When   the label with text "<button_text>" is displayed
    #     Then   i tap the button with text "<button_text>"
    #     Then   the label with text "<message>" is displayed

    #     Examples:
    #         | amount | button_text      | contact_number | contact | contact_name | message              |
    #         | 5      | Click to send    | alanzo-apple   | DF      | Alanzo Test  | Transfer successful! |
    #         | 4.56   | Click to send    | alanzo-apple   | DF      | Alanzo Test  | Transfer successful! |
    #         | 0      | Complete to send | alanzo-apple   | DF      | Alanzo Test  | Complete to send     |
    #         | 99999  | Complete to send | alanzo-apple   | DF      | Alanzo Test  | Complete to send     |

    @id-6456 @sanity
    Scenario: Send transfer Sucesfully
        #Given i search for and select user "alanzo-hamilton"
        Given i sign in with phone "18765619022" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I enter the amount "12" to transfer to "larry-king"

    @id-6509
    Scenario: Send transfer with amount equal 0
        Given i sign in with phone "18765619022" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I click the send or ask button
        And i search for and select user "alanzo-hamilton"
        And i enter the amount "0" to transfer
        And I swipe up to send
        Then Transfer cannot be completed


    # @id-6498
    # Scenario: Test Case 6498: Send transfer with decimals
    #     When I enter the amount with decimal "0." and "20" to transfer to "alanzo-hamilton"


    # @id-6499
    # Scenario: Send transfer with decimals ​​equal to the balance of the Lynk account
    #     Given i enter the Lynk balance to transfer
    #     When  i tap the button with text "Click to send"
    #     Then  the label with text "Transfer successful!" is displayed

    @id-6496
    Scenario: Attempt to make a transfer greater than the Lynk balance
        Given i sign in with phone "18765619022" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I enter the greater than lynk balance amount "99999" to transfer to "alanzo-hamilton"

    @id-6494
    Scenario: I transfer my entire lynk balance to another user
        Given i sign in with phone "18765619022" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I tranfer the lynk balance to "larry-king"

    # @id-6517 @id-6520
    # Scenario Outline: Validate Weekly limit for transfers
    #     Given  i search for user "<contact_number>"
    #     And    i double tap the button with text "@<contact_number>"
    #     And    the label with text "<contact_name>" is displayed
    #     And    i enter the amount "<amount>" to transfer
    #     When   the label with text "<button_text>" is displayed
    #     Then   i double tap the button with text "<button_text>"
    #     Then   the label with text "<message>" is displayed

    #     Examples:
    #         | amount | button_text   | contact_number | contact | contact_name | message                                         |
    #         | 175100 | Click to send | alanzo-apple   | DF      | Alanzo Test  | You have exceeded your weekly transaction limit |
    #         | 175000 | Click to send | alanzo-apple   | DF      | Alanzo Test  | Transfer successful!                            |

    @id-6520
    Scenario: I exceed the daily transfer limit
        Given i sign in with phone "16465780322" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I exceed the daily tranfer limit when I send to "alanzo-hamilton"
        Then Transfer limit exceeded modal is displayed

    @id-45068
    Scenario: Test Case 45068: P2P - User exceeds debit limit for low KYC tier - Unhappy Path
        Given i sign in with phone "18764138069" and pin "199310"
        And I go through tips
        Then the label with text "Recent Transactions" is displayed
        When I exceed the low KYC daily tranfer limit when I send to "larry-king"
        Then Transfer limit exceeded modal is displayed

    @id-45071
    Scenario: Task 59720: Test Case 45071: P2P - User operates within the low KYC user debit limits - Happy Path
        Given i sign in with phone "18764138069" and pin "199310"
        And   I go through tips
        Then   the label with text "Recent Transactions" is displayed
        When I use a low KYC account to send the amount "5" to "larry-king"

    @id-54511 @sanity
    Scenario: Test Case 54511: Validate confirm recipient modal is displayed for P2P link transactions with new recipient
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        Then the label with text "Recent Transactions" is displayed
        When Validate confirm recipient modal is displayed for P2P link transactions with new recipient "alanzo-track"

    @id-54512
    Scenario: Test Case 54512: Validate user is able cancel transaction with new recipient after P2P link click
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        Then the label with text "Recent Transactions" is displayed
        When Validate user is able to click cancel on P2P Confirmation Modal "taxess"

    @id-5897
    Scenario: Test Case 5897: Validate user can send money by QR
        Given i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When make a P2P transfer QR Code
        Then Verify transaction summary

    @id-54513
    Scenario: Test Case 54513: Validate user receives confirmation modal on P2P QR scan for a new recipient 
        Given i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        When Validate user receives confirmation modal on P2P QR scan for a new recipient

    @id-54514
    Scenario: Test Case 54514: Validate user is able cancel transaction with new recipient after P2P QR scan
        Given i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        When Validate user is able to cancel confirmation modal on P2P QR scan for a new recipient