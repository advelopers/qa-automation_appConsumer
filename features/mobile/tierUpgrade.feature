@tierUpgrade @mobile
Feature: Tier Upgrade Feature

  Background: Move the user to the user profile screen
    Given i am on the initial view
    ##And   i tap the sign in button
    # And   i sign in with phone "18764138069" and pin "199310"
    # And   I go through tips
    # And   i tap the profile icon

  @id-41054
  Scenario: Test Case 41054: Tiers and Limits Section.
    When i sign in with phone "18764138069" and pin "199310"
    And I go through tips
    And i tap the profile icon
    And i tap the button with text "My account"           
    And i tap the button with text "Tier and limits"
    Then Verify tier limit screen

  @id-41056
  Scenario: Test Case 41056: Select upgrade button from Tiers and limits section.
    When i sign in with phone "18764138069" and pin "199310"
    And I go through tips
    And i tap the profile icon
    And i tap the button with text "My account"           
    And i tap the button with text "Tier and limits"
    And Upgrade button is clicked
    Then Verify upgrade tier screen
    And i tap the button with text "Continue"
    And the label with text "Choose your document" is displayed

  @id-33843
  Scenario: Test Case 33843: Tiers and Limits Section - Tier 2 User
    When i sign in with phone "18765619022" and pin "199310"
    And I go through tips
    And i tap the profile icon
    And i tap the button with text "My account"           
    And i tap the button with text "Tier and limits"
    Then Verify tier limit screen - Lucky Lynk