@UserProfile @mobile
Feature: User Profile Workflow

  Background: Move the user to the Signin screen
    Given i am on the initial view
    ##And   i tap the sign in button
    And   i sign in with phone "18765619022" and pin "199310"
    And   I go through tips
    And   i tap the profile icon

  @id-5816
  Scenario: User validates user profile screen
    Then User is redirected to User Profile Screen

  @id-5797 @id-5741
  Scenario: User validates the personal infomation screen
    Then i tap the button with text "My account"           
    Then  i tap the button with text "Personal info"
    And   User is redirected to Personal Info Screen

  @id-5799
  Scenario: Validate security screen
    Then   i tap the button with text "Security"
    And   User is redirected to Security Info Screen

  @id-5800 @sanity
  Scenario: Validate contact us screen
   Then  the user scrolls
   And  the user scrolls
   And   i tap the button with text "Contact us"
   And   User is redirected to Contact Us Screen

  @id-5801
  Scenario: Validate FAQ screen
   Then the user scrolls
   And the user scrolls
   And i tap the button with text "FAQs"
   And User is redirected to FAQs Screen

  @id-5802
  Scenario: Validate Terms and condition screen
   Then  the user scrolls
   And  the user scrolls
   And   i tap the button with text "Terms & Conditions"
   And   User is redirected Terms and condition screen
 
  # @id-5811   //A test that does the same thing as this already exists in the Bank & Cards feature, and keeping this test would result in some false negatives
  # Scenario:Validate banks and cards screen when the user has an NCB account linked
  #  And   the user scrolls
  #  And   i tap the button with text "Banks and cards"
  #  And   the label with text "Banks and cards" is displayed
  #  And   the message with text "Connected bank and card accounts provide a fast and easy way to cash in and out. They also allow you to cover larger payments than your current lynk balance — we’ll just use them to cover the remainder." is displayed
  #  And   the message with text "You have connected the following accounts:" is displayed
  #  And   the label with text "Savings" is displayed
  #  And   the button with text "Add payment method" is displayed

  @id-15131
  Scenario: Validate Change PIN Screen
    Then i tap the button with text "Security"
    And i tap the button with text "Change PIN"
    Then User is redirected change PIN screen
   
  @id-15132
  Scenario: Validate Connect Device screen
    Then i tap the button with text "Security"
    Then User is redirected Security screen
    And i tap the button with text "Connected devices"
    And the label with text "Connected Device(s)" is displayed

    @id-16655
    Scenario: Display Name Blacklist
      Then i tap the button with text "My account"
      Then i tap the button with text "Personal info"
      And i tap the button with text "Display name"
      And The user enters a blacklisted name "<Name>"
      And The user clicks the save button
      And the error message with text "Sorry, you can't use that name. Try another one." is displayed
      
      Examples:
      | Name              |
      | Marketing Account |
      | Lynk Bonus        |
      | Welcome Bonus     |
      | Referral Bonus    |
      | Lynk              |
      | User Not found    |

    @id-5805
    Scenario: Change Display Name to a Valid Name
      Then i tap the button with text "My account"
      Then i tap the button with text "Personal info"
      And i tap the button with text "Display name"
      And The user enters the name "<Name>"
      And The user clicks the save button   
      And The Name "<Name>" is being displayed         

     Examples:
      | Name              |
      | Joe Bannister    |

    @id-26796 @sanity
    Scenario: Change PIN
      When Security is clicked
      And Change PIN is clicked
      And Current PIN is confirmed "199310"
      Then i tap the button with text "Confirm PIN"
      When New PIN is added "199310"
      Then i tap the button with text "Save"
      And the message that contains text "Your PIN has been Changed!" is displayed