Feature: End to End Tests

Background: Navigate to website
 Given I navigate to OpenWeathermap website

Scenario: Verify all the important details are present in the homepage
 
  Then Verify that all the important links are visible
  And Verify the signIn and SignOut options are present

  Scenario:Verify The response 'Not Found' once the user enter an invalid City 
  When User enters an invalid city name
  And Click on search button
  Then the website should suggest that the city is not found

  Scenario:Verify login with Invalid credentials
  Then User clicks on SignIn options
  And provide invalid credentials
  When User clicks on Submit button
  Then proper Alert should be displayed

  Scenario Outline:Verify the weather details are successfully returned when the user enters a valid city name 
  When User enters a valid city name "<City>"
  And Click on search button
  Then the website should provide the weather details

  

  Examples:
  |City |
  |London|