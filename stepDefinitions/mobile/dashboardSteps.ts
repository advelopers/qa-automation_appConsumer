import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import InitialPage from '../../pages/mobile/initial.page';
import SignInPage from '../../pages/mobile/signIn.page'
import moreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import CommonsPage from '../../pages/mobile/commons.page';

import AllureReporter from '@wdio/allure-reporter';
import Gestures from '../../commons/gestures';
//Update

const pages: { [key: string]: Page } = { ["dashboard"]: DashboardPage };

Then(/^i should be redirected to the dashboard$/, async () => {
    await expect(DashboardPage.avatarWrapper).toBeExisting();
});

Then(/^i tap the profile icon$/, async () => {
    await (await DashboardPage.avatarWrapper).waitForDisplayed();
    await (await DashboardPage.avatarWrapper).click();
});

Then(/^i skip the first time help tips$/, async () => {
    (await DashboardPage.btnskipTip).click();
});

Then(/^I go through tips$/, async()=>{

    // try{
    //     (await DashboardPage.btnCloseTips).waitForDisplayed()
    //     if(await (await DashboardPage.btnCloseTips).isExisting()){
    //         (await DashboardPage.btnCloseTips).click(); 
    //     }
    // } catch(error){
    //     console.log('Welcome tips was not displayed')
    // }

    try{
        (await DashboardPage.btnNext).waitForDisplayed()
        if(await (await DashboardPage.btnNext).isDisplayed()){
            await CommonsPage.tapByCoordinates(929,436);
        }
    }
    catch(error){
        console.log('Welcome tips was not displayed');
    }

});

Then (/^I verify quick tour content lynk lite$/, async ()=>{
    AllureReporter.addTestId('50228')

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Click on your avatar to access your profile settings. From there you can customise your avatar, edit your profile details, connect accounts, redeem codes, and more.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('View your Lynk Balance, or Jamdex Balance here with ease. You can  check your balance or click on each card to Cash In, Cash Out, or view your recent transactions for that account.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Need to make a quick transaction? We’ve made it easier for you to access our most popular features. Tap ‘More’ on the navigation bar to find the rest of our features.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('You can select between ‘Recent Transactions’ to see your recent Lynk transactions or ‘Discover Lynk’ to view what’s new in Lynk.');

    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Send and request money instantly with anyone on Lynk!');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Simply scan to pay other Lynkies with a QR code, or share your own.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveTextContaining('Now you have access to your Virtual Card');

    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('We’ve made it super easy for you to access our various services from your home screen. You can even Cash In and Cash Out from here.'); 

})

Then (/^I verify quick tour content lucky lynk$/, async ()=>{
    AllureReporter.addTestId('50229')

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Click on your avatar to access your profile settings. From there you can customise your avatar, edit your profile details, connect accounts, redeem codes, and more.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('View your Lynk Balance, or Jamdex Balance here with ease. You can  check your balance or click on each card to Cash In, Cash Out, or view your recent transactions for that account.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Need to make a quick transaction? We’ve made it easier for you to access our most popular features. Tap ‘More’ on the navigation bar to find the rest of our features.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('You can select between ‘Recent Transactions’ to see your recent Lynk transactions or ‘Discover Lynk’ to view what’s new in Lynk.');

    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Send and request money instantly with anyone on Lynk!');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('Simply scan to pay other Lynkies with a QR code, or share your own.');
    
    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveTextContaining('Now you have access to your Virtual Card');

    (await DashboardPage.btnNext).waitForDisplayed();
    (await DashboardPage.btnNext).click();

    await (await DashboardPage.txtStepDescription).waitForDisplayed();
    await expect(DashboardPage.txtStepDescription).toHaveText('We’ve made it super easy for you to access our various services from your home screen. You can even Cash In and Cash Out from here.'); 
})

Then (/^the balance is displayed$/, async ()=>{
    await (await DashboardPage.balanceEye).click();
    console.log( (await (DashboardPage.balance)).getText());
})

Then (/^i check my lynk balance$/, async ()=>{
    await (await DashboardPage.balanceEye).click();
    console.log( (await (DashboardPage.balance)).getText());
})

Then (/^I click the see all transactions link$/,async () => {
    (await DashboardPage.lnkSeeAll).click();
})

When(/^I click the send or ask button$/, async()=>{
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();
    await CommonsPage.delay(5)
    try{
        await driver.dismissAlert();
    }
    catch(error){
        console.log('Alert was not displayed')
    }
    
})

When(/^I click the JamDex option$/, async()=>{
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJamDex)).click();
})

When(/^The cash out button is clicked$/,async () => {
    (await DashboardPage.lnkMore).click();    
    (await moreFeaturesPage.lnkCashOut).click();
})

When(/^The more button is clicked$/,async () => {
    (await DashboardPage.lnkMore).click();
})

When(/^The user clicks the cashout button$/,async () => {
    (await moreFeaturesPage.lnkCashOut).click();
})

When(/^The cash in button is clicked$/,async () => {
    //(await DashboardPage.lnkMore).click();
    (await DashboardPage.btnCashIn).click();
})

Then (/^I click the see all transactions link$/,async () => {
    (await DashboardPage.lnkSeeAll).click();
})

Then(/^The user is successfully signed in and redirected to the dashboard$/,async () => {
    //AllureReporter.addTestId('5739')
    AllureReporter.addTestId('8111')
    
    await expect(CommonsPage.findlabelbytext('Recent Transactions')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Discover Lynk')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Send / Ask')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Scan QR')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('More')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Cards')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Cash In')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Mobile Top-Up')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Bill Payments')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Remittance Services')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('@gavin-bannister')).toBeDisplayed()
})

When(/^The exchange button is clicked$/,async () => {
    (await DashboardPage.balanceCBDC).waitForDisplayed();
    (await DashboardPage.balanceCBDC).click();
    (await moreFeaturesPage.lnkExchange).waitForDisplayed();
    (await moreFeaturesPage.lnkExchange).click();
})


Then(/^the user scrolls on the dashboard$/, async () => {
    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 500,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to)
});