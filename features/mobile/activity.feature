# @activity @mobile

# Feature: Transaction History Activity 

#     Background: Sign in with a valid user that has a transaction history
#         Given i sign in with phone "18765619022" and pin "199310"
#         And I go through tips
#         And I click the see all transactions link

#     @id-5834
#     Scenario: Validate activity history screen
#     Given I am on the activities page
#     And the label with text "Activity" is displayed
#     And the label with text "All" is displayed
#     And the label with text "Sent" is displayed
#     And the label with text "Received" is displayed
#     And the label with text "Requests" is displayed