import {Given,When,Then } from '@wdio/cucumber-framework';
import Page from '../../pages/mobile/page';
import moreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import remittancePage from '../../pages/mobile/remittance.page';
import commonsPage from '../../pages/mobile/commons.page';
import AllureReporter from '@wdio/allure-reporter';
import Gestures from '../../commons/gestures';

const pages: { [key: string]: Page } = { ["remittance"]: remittancePage };


When(/^I click the remittance option$/, async()=>{
    (await moreFeaturesPage.lnkRemittance).waitForDisplayed();
    (await moreFeaturesPage.lnkRemittance).click();
})

When(/^I click the MoneyGram option$/, async()=>{
    (await moreFeaturesPage.lnkMoneyGram).waitForDisplayed();
    (await moreFeaturesPage.lnkMoneyGram).click();
})

Then(/^I should be redirected to the remittances page$/,async () => {
    AllureReporter.addTestId('42703');
    await expect(commonsPage.findlabelbytext('Remittance')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('In order to collect your remittance you will need to first provide your home address.')).toBeDisplayed()
    await expect(remittancePage.txtFldAddress1).toBePresent()
    await expect(remittancePage.txtFldAddress2).toBePresent()
    await expect(remittancePage.txtFldCountry).toBePresent()
    await expect(remittancePage.ddlParish).toBePresent()
})


Then(/^User receives the expired ID modal$/,async () => {
    AllureReporter.addTestId('42705');
    await expect(commonsPage.findlabelbytext('ID has expired')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('The ID you have on file has expired so we are unable to complete this transaction. Please try another method to collect your remittance.')).toBeDisplayed()
})

When(/^User inputs street address details$/,async () => {
    (await remittancePage.txtFldAddress1).waitForDisplayed();
    (await remittancePage.txtFldAddress1).setValue('Receiver Street Address');
    (await remittancePage.txtFldAddress2).waitForDisplayed();
    (await remittancePage.txtFldAddress2).setValue('Receiver Street Address 2')
})

When(/^User inputs parish details$/,async () => {

    (await remittancePage.ddlParish).waitForDisplayed();
    (await remittancePage.ddlParish).click();
    (await remittancePage.txtFldSearch).waitForDisplayed();
    (await remittancePage.txtFldSearch).setValue('King');
    (await remittancePage.lblParish).waitForDisplayed();
    (await remittancePage.lblParish).click();
    
})


When(/^User clicks continue button$/,async () => {

    (await remittancePage.btnContinue).waitForEnabled();
    (await remittancePage.btnContinue).click();
})

When(/^Input reference number "(.*?)"$/,async (refNum:string) => {
    (await remittancePage.txtFldRefNumber).waitForDisplayed();
    (await remittancePage.txtFldRefNumber).setValue(refNum);
})


Then(/^User receives the reference number mismatch modal$/,async () => {
    AllureReporter.addTestId('42706');
    await expect(commonsPage.findlabelbytext('Unable to process transaction')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Invalid reference number. Please try again and/or contact the sender to re-confirm the reference number. ')).toBeDisplayed()
})

Then(/^User receives the incorrect format error message for reference number$/,async () => {
    AllureReporter.addTestId('42707');
    await expect(commonsPage.findlabelbytext('Incorrect format. Please try again')).toBeDisplayed();
})

Then(/^User receives the error modal after more than 3 failed attempts$/,async () => {
    AllureReporter.addTestId('42734');
    await expect(commonsPage.findlabelbytext('Unable to verify reference number')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Invalid reference number. Please try again and/or contact the sender to re-confirm the reference number. ')).toBeDisplayed();
    
})


Then(/^Remittance Details are displayed$/,async () => {
    await expect(commonsPage.findlabelbytext('Remittance details')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Sender Name')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Originating Country')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Amount Sent')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Transfer Fee')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Exchange Rate:')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Receiving Amount:')).toBeDisplayed();
})


Then(/^Verify Remittance Info Screen$/,async () => {
    AllureReporter.addTestId('42736')
    await expect(commonsPage.findlabelbytext('Remittance Info')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Select the relevant information in order to collect remittance.')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Relationship to Sender')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Purpose of Transaction')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Receiver Birth Country')).toBeDisplayed();
    await expect(remittancePage.btnProceedToReview).toBeDisplayed();
    await expect(remittancePage.btnProceedToReview).not.toBeEnabled();
})


Then(/^Verify Transaction Limit exceeded modal$/,async () => {
    AllureReporter.addTestId('42737')
    await expect(commonsPage.findlabelbytext('Transaction Limit Exceeded')).toBeDisplayed();
    await expect(commonsPage.findLabelThatContainsText("Hey, you've exceeded your daily Lynk transaction limit.")).toBeDisplayed();
    await expect(commonsPage.findLabelThatContainsText('Please try again tomorrow.')).toBeDisplayed();
    
})

When(/^Input additional remittance info$/,async () => {
    (await remittancePage.ddlRelshipToSender).waitForDisplayed();
    (await remittancePage.ddlRelshipToSender).click();
    (await remittancePage.ddlItemRelToSender).waitForDisplayed();
    (await remittancePage.ddlItemRelToSender).click();

    await (commonsPage.delay(3));

    (await remittancePage.ddlTransPurpose).waitForDisplayed();
    (await remittancePage.ddlTransPurpose).click();
    (await remittancePage.ddlItemTransPurpose).waitForDisplayed();
    (await remittancePage.ddlItemTransPurpose).click();

    await (commonsPage.delay(3));

    (await remittancePage.ddlWhyMoneyGram).waitForDisplayed();
    (await remittancePage.ddlWhyMoneyGram).click();
    (await remittancePage.ddlItemWhyMoneyGram).waitForDisplayed();
    (await remittancePage.ddlItemWhyMoneyGram).click();

    await (commonsPage.delay(3));

    (await remittancePage.txtFldSecondryID).waitForDisplayed();
    (await remittancePage.txtFldSecondryID).setValue('121965481');

    await (commonsPage.delay(3));

    (await remittancePage.ddlSecondaryIDType).waitForDisplayed();
    (await remittancePage.ddlSecondaryIDType).click();
    (await remittancePage.ddlItemSecondaryIDType).waitForDisplayed();
    (await remittancePage.ddlItemSecondaryIDType).click();

    await (commonsPage.delay(5));

    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 500,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to);

    (await remittancePage.ddlRecBirthCountry).waitForDisplayed();
    (await remittancePage.ddlRecBirthCountry).click();
    (await remittancePage.ddlItemBirthCountry).waitForDisplayed();
    (await remittancePage.ddlItemBirthCountry).click();

    await (commonsPage.delay(3));

    (await remittancePage.ddlRecOccupation).waitForDisplayed();
    (await remittancePage.ddlRecOccupation).click();
    (await remittancePage.ddlItemOccupation).waitForDisplayed();
    (await remittancePage.ddlItemOccupation).click();
    
})

When(/^Click the proceed to review button$/,async () => {
    (await remittancePage.btnProceedToReview).waitForDisplayed();
    (await remittancePage.btnProceedToReview).click();
})


Then(/^Verify remittance review screen$/,async () => {
    //AllureReporter.addTestId();
    await expect(commonsPage.findlabelbytext('Remittance Review')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Sender Name')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Originating Country')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Amount Sent')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Transfer Fee')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Exchange Rate:')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Receiving Amount:')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Swipe up to collect remittance')).toBeDisplayed();
})


When(/^User swipes to collect remittance$/,async () => {
    //AllureReporter.addTestId('42746');
    (await remittancePage.remitConfirmationSwipe).waitForDisplayed();
    //(await remittancePage.remitConfirmationSwipe).click();
    await commonsPage.confirmationSwipe(await remittancePage.remitConfirmationSwipe, await remittancePage.remitReviewTitle)
})


Then(/^User is redirected processing remittance screen$/,{timeout: 300 * 1000},async () => {
    AllureReporter.addTestId('42746');
    await expect(commonsPage.findlabelbytext('Processing Remittance')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Reference Number')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Sender Name')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Originating Country')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Sender’s Phone')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Date Sent')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Receiver Name')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Receiver Country')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Amount Sent')).toBeDisplayed();
    //await expect(commonsPage.findlabelbytext('Transfer Fee')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Exchange Rate:')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Receiving Amount:')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Go to home')).toBeDisplayed();

})


Then(/^Verify the cancelled remittance modal$/,async () => {
    AllureReporter.addTestId('42745');
    await expect(commonsPage.findlabelbytext('Unable to process transaction')).toBeDisplayed();
    await expect(commonsPage.findLabelThatContainsText('We are unable to complete this transaction due to one of the following reasons:')).toBeDisplayed();

})


Then(/^Click secondary ID drop down list$/,async () => {
    (await remittancePage.ddlSecondaryIDType).waitForDisplayed();
    (await remittancePage.ddlSecondaryIDType).click();
})

Then(/^Validate user is only shown one ID number option$/,async () => {
    AllureReporter.addTestId('61909');
    
   const elementCount =  (await $$('android.widget.TextView')).length;
   
    await expect(commonsPage.findlabelbytext('TRN ID')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Passport')).not.toBeDisplayed();
    await expect(commonsPage.findlabelbytext('SSN')).not.toBeDisplayed();
    await expect(elementCount).toEqual(2);
})
