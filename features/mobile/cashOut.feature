@cashout @mobile
Feature: Cash Out Feature

    Background: The user have an NCB account Linked and is on the Cashout Screen
        Given i am on the initial view
        And i sign in with phone "79366199905" and pin "040992"
        And i wait 5 seconds
        And I go through tips
        And i wait 10 seconds

    @id-6011 @sanity
    Scenario: Validate user can NCB Bank Cash out
        Then i tap the profile icon
        When Bank and Cards is clicked
        And Savings account is clicked
        And i tap the button with text "Cash out"
        #When I select the account to cash out from
        When I cash out the amount "20" to my NCB Account

    @id-10055 @sanity
    Scenario: Test Case 10055: Validate ability to transfer money to my beneficiary - other bank
        Then The more button is clicked
        And the user scrolls on more features page
        Then The user clicks the cashout button
        And I perform an ACH cashout of the amount "10"

    # @id-6212
    # Scenario: Cash out with amount equal to the balance of the lynk account
    #     Then The more button is clicked
    #     And the user scrolls
    #     And The user clicks the cashout button
    #     #When I select the account to cash out from
    #     And Cash out with amount equal to the balance of the lynk account

    @id-6213
    Scenario: Cash out with amount greater than the balance of the lynk account
        Then The more button is clicked
        And the user scrolls
        And the user scrolls
        And The user clicks the cashout button
        And Cash out with amount greater than the balance of the lynk account "99999"


    @id-6258
    Scenario: Access to cash out from bank and card screen
        Then i tap the profile icon
        When Bank and Cards is clicked
        And Savings account is clicked
        And i tap the button with text "Cash out"
        Then User is redirected to cash out page

    @id-6228
    Scenario: Attempt to cash out with zero dollars
        Then The more button is clicked
        And the user scrolls
        And the user scrolls
        And The user clicks the cashout button
        And I try to cash out zero dollars

    @id-29773
    Scenario: Validate users cannot cashout of amount greater than Lynk Balance - other bank
        Then The more button is clicked
        And the user scrolls
        And the user scrolls
        Then The user clicks the cashout button
        And I perform an ACH cashout of amount greater than Lynk Balance "999999"

    @id-28418
    Scenario: Test Case 28418: [Cash Out to NCB bank account via ACH] - performing a successful transfer during the week or anytime on the weekend
        Then The more button is clicked
        And the user scrolls on more features page
        And the user scrolls on more features page
        Then The user clicks the cashout button
        And I perform an ACH cashout to a NCB account of the amount "10"

    @id-29769
    Scenario: Test Case 29769: [Cash Out to NCB bank account via ACH] - enter an amount greater than to their Lynk Balance
        Then The more button is clicked
        And the user scrolls on more features page
        And the user scrolls on more features page
        Then The user clicks the cashout button
        And I attempt to perform an ACH cashout to a NCB account that is greater than available lynk balance



    # @id-7914 @id-6011 @id-6216 @id-6228 @id-6219 @id-6213 @id-9227
    # Scenario Outline: Cash out - with amount less than the lynk balance and greater
    #     Given i tap the button with text "Cash out"
    #     And i enter the amount "<amount>" to cashout
    #     When i tap the button with text "<buttontext>"
    #     Then the message with text "<message>" is displayed

    #     Examples:
    #         | amount | message              | buttontext           |
    #         | 5      | Cash out successful! | Click to cash out    |
    #         | 4.56   | Cash out successful! | Click to cash out    |
    #         | 0      | Complete to cash out | Complete to cash out |
    #         | 99999  | Insufficient funds   | Complete to cash out |
    #         | .56    | Cash out successful! | Click to cash out    |

    @id-6212
    Scenario: Cash out with amount equal to the balance of the lynk account
        Then The more button is clicked
        And the user scrolls
        And the user scrolls
        And The user clicks the cashout button
        #When I select the account to cash out from
        And Cash out with amount equal to the balance of the lynk account