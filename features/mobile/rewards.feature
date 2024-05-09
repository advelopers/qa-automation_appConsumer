@rewards @mobile

Feature: Rewards Screen

# Background: Move the user to the Signin screen
#     Given i am on the initial view
#     And i sign in with phone "16465780322" and pin "199310"
#     And I go through tips
#     And i tap the profile icon
#     And i tap the button with text "Rewards"


@id-15130
Scenario: Test Case 15130: Validate Rewards screen
    Given i am on the initial view
    And i sign in with phone "16465780322" and pin "199310"
    And I go through tips
    And i tap the profile icon
    And i tap the button with text "Rewards"
    Then Validate Contents of Rewards Screen

@id-42334
Scenario: Test Case 42334: "Rewards" From profile - Low KYC User
    Given i am on the initial view
    And i sign in with phone "18764138069" and pin "199310"
    And I go through tips
    And i tap the profile icon
    And i tap the button with text "Rewards"
    Then Validate Contents of tier upgrade modal


@id-9079
Scenario: Test Case 9079: Validate invites screen
    Given i am on the initial view
    And i sign in with phone "16465780322" and pin "199310"
    And I go through tips
    When i tap the profile icon
    And i tap the button with text "Rewards"
    And i tap the button with text "Invite friends"
    Then Validate Contents of Invites Screen

@id-9078
Scenario: Test Case 9078: Validate user receives referral bonus when invitees successfully sign up
    Given i am on the initial view
    And i sign in with phone "16465780322" and pin "199310"
    And I go through tips
    When i tap the profile icon
    And i tap the button with text "Rewards"
    And i tap the button with text "Claim bonus"
    And user inputs referral code
    Then Validate redeem code success modal

@id-9084
Scenario: Test Case 9084: Validate user can only claim welcome bonus once
    Given i am on the initial view
    And i sign in with phone "16465780322" and pin "199310"
    And I go through tips
    When i tap the profile icon
    And i tap the button with text "Rewards"
    And i tap the button with text "Claim bonus"
    And user inputs referral code
    Then Validate user can only redeem code once

