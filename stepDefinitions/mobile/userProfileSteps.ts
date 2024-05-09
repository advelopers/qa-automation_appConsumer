import { Given, Then, When } from '@cucumber/cucumber';
import AllureReporter from '@wdio/allure-reporter';
import Gestures from '../../commons/gestures';
import commonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import userProfilePage from '../../pages/mobile/userProfile.page';
import UserProfilePage from '../../pages/mobile/userProfile.page';

const pages: { [key: string]: Page } = { ["userprofile"]: UserProfilePage };


Then(/^the profile menu should display the username "(.*)"$/, async (username: string) => {
    await expect(UserProfilePage.getUserName(username)).toHaveText(username);
});

Then(/^the profile menu should display the displayname "(.*)"$/, async (displayname: string) => {
    await expect(UserProfilePage.lblDisplayName).toHaveText(displayname);
});

Then(/^the image "profile avatar" is displayed$/, async () => {
    await expect(UserProfilePage.imgProfileAvatar).toBeDisplayed
});


Then(/^the button "back arrow icon" is displayed$/, async () => {
    await expect(UserProfilePage.btnBack).toBeDisplayed
});

Then(/^Personal Info is clicked$/,async () => {
    (await (userProfilePage.lblPersonalInfo)).click()
});

Then(/^Display Name is clicked$/, async () => {
    (await(userProfilePage.lblDisplayName)).click()
});

Then(/^The user enters the name "(.*?)"$/,async (name : string) => {
    AllureReporter.addTestId('5805');
    (await (userProfilePage.displayNameTxtFld)).setValue(name)
});

Then(/^The user enters a blacklisted name "(.*?)"$/,async (name : string) => {
    AllureReporter.addTestId('16655');
    (await (userProfilePage.displayNameTxtFld)).setValue(name)
});

Then(/^The user clicks the save button$/, async()=>{
    (await userProfilePage.btnSave).click()
});


When(/^Bank and Cards is clicked$/, async()=>{
    (await userProfilePage.lblBankAndCards).click()
  });

Then(/^The Name "(.*?)" is being displayed$/, async(name:string)=>{
    //console.log((await userProfilePage.displayName).getText())
    await expect(commonsPage.findLabelThatContainsText(name)).toBeDisplayed()
});

When(/^Security is clicked$/,async () => {
    (await UserProfilePage.lblSecurity).click()
})

When(/^Change PIN is clicked$/,async () => {
    (await UserProfilePage.lnkChangePin).click()
})

When(/^Current PIN is confirmed "(.*?)"$/,async (pin:string) => {
    (await UserProfilePage.txtFldCurrentPIN).setValue(pin);
    //(await UserProfilePage.btnConfirmPIN).click()
})

When(/^New PIN is added "(.*?)"$/,async (pin:string) => {
    AllureReporter.addTestId('26796');
    (await UserProfilePage.txtFldNewPIN).setValue(pin);
    //(await UserProfilePage.btnSavePIN).click()
})

Then(/^User is redirected to User Profile Screen$/, async()=>{

    AllureReporter.addTestId('5816')
    await expect(commonsPage.findlabelbytext('Joel Bannister')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('@gavin-bannister')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('See my QR')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Notifications')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Banks and cards')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Rewards')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('My account')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Security')).toBeDisplayed()

    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to)

    await expect(commonsPage.findlabelbytext('Contact us')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Terms & Conditions')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Log out')).toBeDisplayed()
  
});

Then(/^User is redirected to Personal Info Screen$/, async()=>{

    AllureReporter.addTestId('5797')
    await expect(commonsPage.findlabelbytext('Personal Info')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Display name')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Lynk.iD')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Real name')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Phone')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Email')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Joel Bannister')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('@gavin-bannister')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Gavin Bannister')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('gavin.qa28@mailinator.com')).toBeDisplayed()
});

Then(/^User is redirected to Security Info Screen$/, async()=>{

    AllureReporter.addTestId('5799')
    await expect(commonsPage.findlabelbytext('Security')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Change PIN')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Unlock with fingerprint scan')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Connected devices')).toBeDisplayed()
});


Then(/^User is redirected to Contact Us Screen$/, async()=>{
    AllureReporter.addTestId('5800')
    await expect(commonsPage.findlabelbytext('Reach out to us')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Have a Question? Problem? Something not working as you think it should?')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('We tried to make lynk as easy as possible, but if you need to contact us, we’re just one chat away.')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Chat with us')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Email us')).toBeDisplayed()
});


Then(/^User is redirected to FAQs Screen$/, async()=>{
    AllureReporter.addTestId('5801')
    await expect(commonsPage.findLabelThatContainsText('?')).toBeDisplayed()
    await expect(commonsPage.findLabelThatContainsText('Show Filter')).toBeDisplayed()
    await expect(UserProfilePage.lynkLogo).toBePresent()
});


Then(/^User is redirected Terms and condition screen$/, async()=>{
    AllureReporter.addTestId('5802')
    await expect(commonsPage.findlabelbytext('Terms and Conditions')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('General')).toBeDisplayed()
});


Then(/^User is redirected change PIN screen$/, async()=>{
    AllureReporter.addTestId('15131')
    await expect(commonsPage.findlabelbytext('Change PIN')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('To update your PIN, we must first make sure it’s you. Please enter your current PIN to confirm your identity.')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Current Pin')).toBeDisplayed()
    //await expect(commonsPage.findlabelbytext('Some guidelines')).toBeDisplayed()
    //await expect(commonsPage.findlabelbytext('Avoid easy to guess PINs like your birthday')).toBeDisplayed()
    //await expect(commonsPage.findlabelbytext('Don’t use a series of numbers like 123456')).toBeDisplayed()
    //await expect(commonsPage.findlabelbytext('Don’t repeat a digit 3 or more times in a row')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Confirm PIN')).toBeDisplayed()
});

Then(/^User is redirected Security screen$/, async()=>{
    AllureReporter.addTestId('15132')
    await expect(commonsPage.findlabelbytext('Security')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Connected devices')).toBeDisplayed()
});


Then(/^Verify tier limit screen$/, async()=>{
    AllureReporter.addTestId('41054')
    await expect(commonsPage.findlabelbytext('Your tier')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Lynk Lite')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Your limits')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Credit')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Overall')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('40,000 JMD/day')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('100,000 JMD/day')).not.toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Upgrade')).toBeDisplayed();
    await expect(UserProfilePage.btnTierUpgrade).toBeDisplayed();
});

When(/^Upgrade button is clicked$/,async () => {
    (await UserProfilePage.btnTierUpgrade).waitForDisplayed();
    (await UserProfilePage.btnTierUpgrade).click();
})

Then(/^Verify upgrade tier screen$/, async()=>{
    AllureReporter.addTestId('41056')
    await expect(commonsPage.findlabelbytext('Upgrade tier')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext("These are some of the benefits you'll get if you upgrade:")).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Lucky Lynk')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('P2P Transfers')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('100,000 JMD')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Account linking')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Card linking')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Continue')).toBeDisplayed();
});

Then(/^Verify tier limit screen - Lucky Lynk$/, async()=>{
    AllureReporter.addTestId('33843')
    await expect(commonsPage.findlabelbytext('Your tier')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Lucky Lynk')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Your limits')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Credit')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Overall')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('100,000 JMD/day')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('40,000 JMD/day')).not.toBeDisplayed();
    await expect(commonsPage.findlabelbytext('50,000 JMD/day')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Upgrade')).not.toBeDisplayed();
    await expect(UserProfilePage.btnTierUpgrade).not.toBeDisplayed();
});