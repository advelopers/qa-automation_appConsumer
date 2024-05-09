import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import MtopPage from '../../pages/mobile/mtop.page';
import MoreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import CommonsPage from '../../pages/mobile/commons.page'
import AllureReporter from '@wdio/allure-reporter';
import {Before, After} from '@cucumber/cucumber'

const pages: { [key: string]: Page } = { ["dashboard"]: MtopPage };

Before({tags: "@id-21734"}, async ()=> {
    browser.reset()
});


When(/^i click the more button$/, async () => {
    (await DashboardPage.lnkMore).click;
});

When(/^top up is clicked$/,async () => {
    
    (await MoreFeaturesPage.lnkTopUp).click;
})

Then(/^User is redirected to top up screen$/,async () => {
    MtopPage.validate()
})

Then(/^I enter pin "(.*)"$/, async(text:string)=>{
    (await MtopPage.txtFldPIN).setValue(text);
})

When(/^User adds top up information phone number "(.*)" and name "(.*)"$/,async (phone:string, name:string) => {

    
    (await MtopPage.iptPhoneNum).setValue(phone);
    (await MtopPage.iptName).setValue(name);
    //(await (MtopPage.btnTopUpAcc)).click;
})

When(/^I select a carrier$/, async()=>{
    (await MtopPage.ddlCarrier).click;
    (await MtopPage.ddlOption).click;
})

When(/^I select top up amount$/,async () => {
    (await MtopPage.lnkTopUpAmt).click()
})

When(/^I click the submit for review button$/,async () => {
    (await MtopPage.btnSubmit).click()
})

Then(/^I am redirected to the top up review page$/,async () => {
     await expect(CommonsPage.findLabelThatContainsText('Top Up Review')).toBeDisplayed()
     await expect(CommonsPage.findLabelThatContainsText('Transaction details')).toBeDisplayed()
     await expect(CommonsPage.findLabelThatContainsText('Swipe up to top up')).toBeDisplayed()
     await expect(CommonsPage.findLabelThatContainsText('Service Provider')).toBeDisplayed()
     await expect(CommonsPage.findLabelThatContainsText('GCT (25%)')).toBeDisplayed()
     await expect(CommonsPage.findLabelThatContainsText('Total Cost:')).toBeDisplayed()
})

Then(/^Validate the top up review page$/,async () => {
    AllureReporter.addTestId('21735')
    await expect(CommonsPage.findLabelThatContainsText('Top Up Review')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Transaction details')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Swipe up to top up')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Service Provider')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('GCT (25%)')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Total Cost:')).toBeDisplayed()
})

Then(/^Validate data plan purchase review page$/,async () => {
    AllureReporter.addTestId('52377')
    await expect(CommonsPage.findLabelThatContainsText('Top Up Review')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Flow 2 Day')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Transaction details')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Swipe up to top up')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Service Provider')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('GCT (25%)')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Total Cost:')).toBeDisplayed()
})

Then(/^Validate Screen when no plan is available$/,async () => {
    AllureReporter.addTestId('52378')
    await expect(CommonsPage.findLabelThatContainsText('No Data Plans available\n for this phone number.')).toBeDisplayed();
})

Then(/^Validate insufficient funds message$/,async () => {
    AllureReporter.addTestId('52385')
    await expect(CommonsPage.findLabelThatContainsText('Insufficient funds. Please Cash In to continue or select a lower priced plan.')).toBeDisplayed();
})

Then(/^Contacts not synced screen validation$/,async () => {

    AllureReporter.addTestId('21734')
    await expect(CommonsPage.findLabelThatContainsText('Top Up')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Select a phone number from your list of contacts or top up a new contact.')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Search name or number')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Create new Top Up')).toBeDisplayed()
})

When (/^Create new Top up is clicked$/, async()=>{
    (await MtopPage.btnCreateNew).click
})

Then (/^Continue button is disabled$/, async()=>{
    await expect(MtopPage.btnTopUpAcc).toBeDisabled();
})

Then (/^Continue button should be enabled$/, async()=>{
    await expect(MtopPage.btnTopUpAcc).toBeEnabled();
})

When(/^I swipe to confirm top up$/,async () => {
    const screenSize = driver.getWindowRect();

    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    };

    await CommonsPage.delay(5);

    //Gestures.swipeElement(await MtopPage.confirmationSlider, from, to);
    await CommonsPage.confirmationSwipe(await MtopPage.confirmationSlider, await MtopPage.btnGoBack)
})

When(/^I enter the top up amount "(.*)"$/,async (amount:string) => {
    (await (MtopPage.iptAmount)).waitForDisplayed();
    (await (MtopPage.iptAmount)).setValue(amount)
    await driver.hideKeyboard()
})

When(/^I click a recent top up$/, async()=>{
    (await (MtopPage.lnkRecentTopUp)).click()
})

Then (/^Mobile number field is empty$/,async () => {
    AllureReporter.addTestId('21902');
    expect(await MtopPage.iptPhoneNum).toHaveValue('')
})

Then (/^Text field automatically removes excess characters$/,async () => {
    AllureReporter.addTestId('21902');
    expect(await MtopPage.iptName).toHaveText('GavinJoelBannistera-')
})

Then (/^Name field should have text "(.*)"$/,async (text:string) => {
    AllureReporter.addTestId('21903')
    expect(await MtopPage.iptName).toHaveText(text)
})

Then(/^Validate insufficent funds to top up message - Unlinked Bank account$/,async () => {
    AllureReporter.addTestId('21738')
    await expect(CommonsPage.findLabelThatContainsText("Your Lynk account doesn’t have enough to top up this much...")).toBeDisplayed()
})

Then(/^Validate minimum amount message$/,async () => {
    AllureReporter.addTestId('21737')
    await expect(CommonsPage.findLabelThatContainsText("Sorry, we can only process transactions for a top up that exceed 100 JMD.")).toBeDisplayed()
})

Then(/^User is able to select from pre-defined amounts$/,async () => {

    AllureReporter.addTestId('21881');

     expect(await CommonsPage.findLabelThatContainsText("$100")).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText("$200")).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText("$300")).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText("$400")).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$500')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$600')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$700')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$800')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$900')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$1000')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$2000')).toBeDisplayed();
     expect(await CommonsPage.findLabelThatContainsText('$2500')).toBeDisplayed();
})

Then(/^The top up was successful$/, async()=>{

    AllureReporter.addTestId('21732')

    await expect(CommonsPage.findLabelThatContainsText('Top up successful')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Transaction details')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Service Provider')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Total Cost')).toBeDisplayed()
})

Then(/^The top up was successful for low KYC account$/, {timeout: 300 * 1000}, async()=>{
    AllureReporter.addTestId('45074')

    await expect(CommonsPage.findLabelThatContainsText('Top up successful')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Transaction details')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Service Provider')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Total Cost')).toBeDisplayed()
})

Then(/^Validate Top Up screen contacts not synced$/, async()=>{

    AllureReporter.addTestId('21734')

    await expect(CommonsPage.findLabelThatContainsText('Select a phone number from your list of contacts or top up a new contact.')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Search name or number')).toBeDisplayed()
})


Then(/^user is unable to enter less than minimum amount$/, async()=>{

    AllureReporter.addTestId('21737')

    await expect(CommonsPage.findLabelThatContainsText('Sorry, we can only process transactions for a top up that exceed 100 JMD.')).toBeDisplayed()
})

Then(/^user is unable to enter an amount greater than Lynk Balance$/, async()=>{

    AllureReporter.addTestId('21738')

    await expect(CommonsPage.findLabelThatContainsText("Your Lynk account doesn't have enough to top up this much...")).toBeDisplayed()
})

Then(/^Verify error modal when carrier is incorrect$/, async()=>{

    AllureReporter.addTestId('21741')

    await expect(CommonsPage.findLabelThatContainsText("Unable to Top Up")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("We are unable to process this request at this time. Only top ups for pre-paid mobile devices are possible. Ensure you selected the correct carrier and entered the correct number.")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Try again")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Nevermind")).toBeDisplayed()
})

Then(/^Verify error modal when phone number is a postpaid number$/, async()=>{

    AllureReporter.addTestId('21742')

    await expect(CommonsPage.findLabelThatContainsText("Unable to Top Up")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Seems like you selected a number that is post paid so you won't be able to top up that account. Check the number and try again")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Try again")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Nevermind")).toBeDisplayed()
})

Then(/^Verify recent recipient$/, async()=>{

    AllureReporter.addTestId('21746')

    await expect(CommonsPage.findLabelThatContainsText("Submit for review")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("$100")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("18765619022")).toBeDisplayed()
})


Then(/^Verify user gets cash-in option when funds are insufficient for top up$/, async()=>{

    AllureReporter.addTestId('21886')

    await expect(CommonsPage.findLabelThatContainsText("Your lynk account doesn't have enough to top up this much... Cash in to complete the top up.")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("CASH IN")).toBeDisplayed()
})

Then(/^Verify Cash-In button can be clicked$/, async()=>{

    AllureReporter.addTestId('21886')
    await CommonsPage.tapbytext('CASH IN')
    await expect(CommonsPage.findLabelThatContainsText("Banks and cards")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("ABM")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Cash in")).toBeDisplayed()
})


Then(/^Click input amount field$/, async()=>{
    
    (await (MtopPage.iptAmount)).waitForDisplayed();
    (await (MtopPage.iptAmount)).click() 
})

Then(/^Verify Cash In Button is visible$/, async()=>{

    await expect(MtopPage.btnCashIn).toHaveText('CASH IN')

})

Then(/^Validate error modal when a user attempts to use a postpaid device$/, async()=>{
    AllureReporter.addTestId('52384')
    await expect(CommonsPage.findLabelThatContainsText("This phone number is either not connected to Flow or is on a post-paid plan. Review the phone number, select correct carrier and ensure it is a pre-paid account before trying again. ")).toBeDisplayed();
})

Then(/^Validate error modal phone number carrier mismatch$/, async()=>{
    AllureReporter.addTestId('52388')
    await expect(CommonsPage.findLabelThatContainsText("This phone number is either not connected to Flow or is on a post-paid plan. Review the phone number, select correct carrier and ensure it is a pre-paid account before trying again. ")).toBeDisplayed();
})