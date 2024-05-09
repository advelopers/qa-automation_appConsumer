@run @mobile @login_mobile
Feature: Sign In workflow

  @id-5922
  Scenario: Sign in screen validation
    Given i am on the initial view
    When i tap the sign in button
    Then User is redirected to sign-in page

  @id-5739 @sanity
  Scenario: An existing user do a sign in successfully
    When i sign in with phone "18765619022" and pin "199310"
    And  i wait 5 seconds
    And  I go through tips
    Then The user is successfully signed in and redirected to the dashboard
    # And  i tap the profile icon
    # And  the profile menu should display the displayname "Deyvid Ferrer"
    # And  the profile menu should display the username "@deyvid-ferrer-3"

  # @id-5920
  # Scenario Outline: A user attempts to SignIn with a non existing phone number  //Specific Wording was changed to make the error message more ambiguous 
  #   When i sign in with phone "<phone>" and pin "<pin>"
  #   Then User is unable to sign in using non existing phone number

  #   Examples:
  #     | phone        | pin    |
  #     | 541111189408 | 125589 |
  #     | 18762740628  | 458985 |

  @id-5921
  Scenario Outline: A user attempts to SignIn with an existing phone number but invalid PIN
    Given i sign in with phone "<phone>" and pin "<pin>"
    Then User is unable to sign in with invalid PIN

    Examples:
      | phone        | pin    |
      | 541139484008 | 314189 |
      | 18762105628  | 458985 |

# @id-6458
# Scenario Outline: A user is blocked after they enter an incorrect PIN 3 times
#   When Verify a user is blocked after entering PIN incorrectly 3 times phone "<phone>" and PIN "<pin>"
#   Then the error message with text "<Message>" is displayed
#   #And  Verify a user is blocked after entering PIN incorrectly 3 times

#   Examples:
#     | phone       | pin    | Message                                                                                                                                   |
#     | 18762105628 | 458985 | Your phone number or PIN is incorrect.                                                                                                    |
#     | 18762105628 | 458985 | Your phone number or PIN is incorrect.                                                                                                    |
#     | 18762105628 | 458985 | Your phone number or PIN is incorrect.                                                                                                    |
#     | 18762105628 | 040992 | Your account has been blocked after multiple consecutive login attempts. We've sent you an email with instructions on how to unblock it.  |
