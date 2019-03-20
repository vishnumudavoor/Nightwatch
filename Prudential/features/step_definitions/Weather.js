const { client } = require('nightwatch-cucumber')
const { Given, Then, When, And } = require('cucumber')
var locators=require('./locators.js');

Given(/^I navigate to OpenWeathermap website$/, () => {
  return client
    .url('https://openweathermap.org/')
})

Then(/^Verify that all the important links are visible$/,() => {
  return client
 .useXpath()
 .assert.visible(locators.link_Weather)
 .assert.visible(locators.link_Maps)
 .assert.visible(locators.link_Guide)
 .assert.visible(locators.link_API)
 .assert.visible(locators.link_Price)
 .assert.visible(locators.link_Partners)
 .assert.visible(locators.link_Stations)
 .assert.visible(locators.link_Widgets)
 .assert.visible(locators.link_Blog)
 .assert.visible(locators.link_SupportCentre)
})

Then(/^Verify the signIn and SignOut options are present$/, () => {
  return client
  .useXpath()
  .assert.visible(locators.link_SignIn)
  .assert.visible(locators.link_SignUp)
})

When(/^User enters an invalid city name$/, () => {
  return client
  .useXpath()
  .click(locators.txt_SearchBox)
  .setValue(locators.txt_SearchBox,"hello")
 
})

Then(/^Click on search button$/, () => {
  return client
  .useXpath()
  .click(locators.btn_SearchButton)
})

Then(/^the website should suggest that the city is not found$/, () => {
  return client
  .useXpath()
  .waitForElementVisible(locators.div_NotFoundAlert, 1000)
  .assert.containsText(locators.div_NotFoundAlert,"Not found")
})

When(/^User enters a valid city name "(.*?)"$/, (text) => {
  return client.
  useXpath()
   .click(locators.txt_SearchBox)
  .setValue(locators.txt_SearchBox,text)

})

Then(/^the website should provide the weather details$/, () => {
  return client
  .useXpath()
  .assert.containsText(locators.link_WeatherDetail,"London")

})

Then(/^User clicks on SignIn options$/, () => {
  return client
  .useXpath()
  .click(locators.link_SignIn)

})

Then(/^provide invalid credentials$/, () => {
  return client
  .useXpath()
  .click(locators.txt_Email)
  .setValue(locators.txt_Email,"text")
  .click(locators.txt_Password)
  .setValue(locators.txt_Password,"text")

})

Then(/^User clicks on Submit button$/, () => {
  return client
  .useXpath()
  .click(locators.btn_Submit)

})

Then(/^proper Alert should be displayed$/, () => {
  return client
  .useXpath()
  .waitForElementVisible(locators.div_Alert, 1000)
  .assert.containsText(locators.div_Alert,"Invalid Email or password")

})