@mobile @merchant

Feature: Merchant Payments

    @id-27603
    Scenario: Test Case 27603: Validate user is able to Scan merchant QR
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When Merchant QR Code is scanned

    @id-27604
    Scenario: Test Case 27604: Validate user is able to make payment to merchant using their QR code
        Given i sign in with phone "16465780322" and pin "199310"
        And I go through tips
        When make payment with merchant QR Code
        Then Verify merchant payment summary

    @id-27760
    Scenario: Test Case 27760: Validate users are unbale to search for merchant accounts
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When Verify user cannot search for a merchant "test-merchant"

    @id-27761
    Scenario: Test Case 27761: Validate user is unable to enter an amount greater than Lynk Balance (unlinked)
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When Validate user is unable to make payment with merchant QR Code that exceed available balance - unlinked acc

    @id-27762
    Scenario: Test Case 27762: Validate user is unable to enter an amount greater than Lynk Balance (Acct. linked)
        Given i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When Validate user is unable to make payment with merchant QR Code that exceed available balance - linked acc

    @id-39429
    Scenario: Test Case 39429: Validate user is taken to the payment screen for unpaid request
        Given i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When Vallidate user is taken to payment screen for unpaid request for amount 15

    @id-39431
    Scenario: Test Case 39431: Validate user is able to make paymet (happy path)
        Given i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When Validate user is able submit payment of amount 10 with PWL link

    @id-39428
    Scenario: Test Case 39428: Vallidate user is shown error modal once payment was already made
        Given i sign in with phone "79366199905" and pin "040992"
        And I go through tips
        When Vallidate user is shown error modal once payment was already made

    @id-39430
    Scenario: Test Case 39430: Validate user receives insufficient message on low Lynk balance
        Given i sign in with phone "18765619022" and pin "199310"
        And I go through tips
        When Vallidate user receives insufficient message on low Lynk balance 7000

    @id-39427
    Scenario: Test Case 39427: Validate user is redirected to Lynk app on click of link
        When Validate user is redirected to Lynk app on click of link 5