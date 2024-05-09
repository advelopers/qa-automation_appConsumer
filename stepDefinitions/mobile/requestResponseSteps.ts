import { Given, Then, When, Before } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import RequestResponsePage from '../../pages/mobile/requestResponse.page'
import transactionHistoryPage from '../../pages/mobile/transactionHistory.page';
import commonsPage from '../../pages/mobile/commons.page';
import Gestures from '../../commons/gestures';
import userProfilePage from '../../pages/mobile/userProfile.page';
import AllureReporter from '@wdio/allure-reporter';
import transferPage from '../../pages/mobile/transfer.page';
import initialPage from '../../pages/mobile/initial.page';
import signInPage from '../../pages/mobile/signIn.page';
import requestPage from '../../pages/mobile/request.page';

const pages: { [key: string]: Page } = { ["requestResponse"]: RequestResponsePage };

Before({tags: "@requestResponseSetup"}, async ()=> {
    
    await browser.reset();

    await initialPage.SignIn();

    const loginData = {
        phone:"79366199905",
        pin:"040992"
    }

    await signInPage.login(loginData.phone, loginData.pin)
    await DashboardPage.closeWelcomeTips();
    await DashboardPage.navigateToP2PScreen();
    await commonsPage.delay(5)
    await driver.acceptAlert();
    await requestPage.addUser("gavin-bannister")
    await commonsPage.tapbytext('Ask')
    await requestPage.addRequest("35")
    await commonsPage.delay(5)
    await browser.reset();

});

When(/^I accept a request from all Tab$/, async()=>{
    AllureReporter.addTestId('6674');

    
    (await (DashboardPage.lnkSeeAll)).waitForDisplayed();
    (await (DashboardPage.lnkSeeAll)).click();
    (await (transactionHistoryPage.btnRespond)).click();
    
    await commonsPage.delay(7);

    (await RequestResponsePage.requestAmount).waitForDisplayed();
    await expect((RequestResponsePage.requestAmount)).toBePresent();

    const requestAmtText = (await (await RequestResponsePage.requestAmount).getText());

    (await (RequestResponsePage.btnAcceptAndContinue)).click(); 

    await expect((RequestResponsePage.confirmationSwipe)).toBePresent();

    await commonsPage.confirmationSwipe(await RequestResponsePage.confirmationSwipe, await RequestResponsePage.userDisplayName);
    

    await commonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    await expect((DashboardPage.txtLatestTransac)).toHaveText('- '+requestAmtText+' JMD')

})


When(/^I accept a request from Request Tab$/, async()=>{
    AllureReporter.addTestId('6675');
    
    (await (DashboardPage.lnkSeeAll)).click();
    (await (transactionHistoryPage.tabRequest)).waitForDisplayed();
    (await (transactionHistoryPage.tabRequest)).click();
    (await (transactionHistoryPage.btnRespond)).waitForDisplayed();
    (await (transactionHistoryPage.btnRespond)).click();
    
    await commonsPage.delay(3);

    (await RequestResponsePage.requestAmount).waitForDisplayed();
    await expect((RequestResponsePage.requestAmount)).toBePresent();

    const requestAmtText = (await (await RequestResponsePage.requestAmount).getText());

    (await (RequestResponsePage.btnAcceptAndContinue)).click();

    await expect((RequestResponsePage.confirmationSwipe)).toBePresent();

    
    (await transferPage.iptNote).waitForDisplayed();
    await expect((transferPage.iptNote)).toBePresent();
    (await transferPage.iptNote).click();
    (await transferPage.txtNoteInput).waitForDisplayed();
    (await transferPage.txtNoteInput).click();
    (await transferPage.txtNoteInput).setValue('Test Note Again');
    await driver.hideKeyboard();
    (await commonsPage.btnContinue).waitForDisplayed();
    (await commonsPage.btnContinue).click();

    await expect((RequestResponsePage.confirmationSwipe)).toBePresent();
    (await RequestResponsePage.confirmationSwipe).click();
    await commonsPage.confirmationSwipe(await RequestResponsePage.confirmationSwipe, await RequestResponsePage.userDisplayName);
    
    await commonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();


    await expect((DashboardPage.txtLatestTransac)).toHaveText('- '+requestAmtText+' JMD')
})

When(/^I accept a request from Notification section$/, async()=>{
    AllureReporter.addTestId('19122');

    (await (DashboardPage.balance)).waitForDisplayed();
    (await (DashboardPage.balance)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    
    (await (DashboardPage.lnkProfile)).click();
    (await (userProfilePage.lblNotifications)).click();

    (await (userProfilePage.requestNotification)).click();

    await commonsPage.delay(3);

    (await RequestResponsePage.requestAmtNotifs).waitForDisplayed();
    await expect((RequestResponsePage.requestAmtNotifs)).toBePresent();

    const requestAmtText = (await (await RequestResponsePage.requestAmtNotifs).getText());

    (await (RequestResponsePage.btnAcceptAndContinue)).click();

    const balance = parseFloat(lynkBalance);
    const requestAmt = parseFloat(requestAmtText);
    

    await expect((RequestResponsePage.confirmationSwipe)).toBePresent();

    //Gestures.swipeElement(await RequestResponsePage.confirmationSwipe, from, to);
    await commonsPage.confirmationSwipe(await RequestResponsePage.confirmationSwipe, await RequestResponsePage.userDisplayName);
    
    //await commonsPage.delay(7);

    (await (DashboardPage.balance)).waitForExist();
    (await (DashboardPage.balance)).click();
    //lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');

    const expectedBalance = balance-requestAmt;
    //const expectedBalanceText = expectedBalance.toString();
    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));
})

Then(/^Requester Display Name with username and Request Amount should be displayed$/, async()=>{
    
    RequestResponsePage.validate()
})

When(/^I Decline a request$/, async()=>{

    AllureReporter.addTestId('6660');
    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
     await expect((DashboardPage.balance)).not.toHaveText('*****')
    const  expectedLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');

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
    Gestures.swipe(from, to);
    
    (await (DashboardPage.lnkSeeAll)).waitForDisplayed();
    await expect((DashboardPage.lnkSeeAll)).toBeDisplayed();
    (await (DashboardPage.lnkSeeAll)).click();
    (await (transactionHistoryPage.btnRespond)).waitForDisplayed();
    await expect((transactionHistoryPage.btnRespond)).toBeDisplayed();
    (await (transactionHistoryPage.btnRespond)).click();
    (await (RequestResponsePage.btnDecline)).waitForDisplayed();
    await expect((RequestResponsePage.btnDecline)).toBeDisplayed();
    (await (RequestResponsePage.btnDecline)).click();
    //await commonsPage.tapbytext("Decline");
    await commonsPage.delay(3);

    await expect(commonsPage.findlabelbytext('Are you sure?')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('If a friend sent you this by mistake, you can decline it and add a note if you want.')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('If the request came from someone you don’t know, and you did not expect it,')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('report it')).toBeDisplayed();
    await expect(commonsPage.findlabelbytext('Add a note (optional)')).toBeDisplayed();
    await expect(RequestResponsePage.btnDecline).toHaveText('Decline');

    (await RequestResponsePage.btnDecline).waitForDisplayed();
    await expect((RequestResponsePage.btnDecline)).toBeDisplayed();
    (await RequestResponsePage.btnDecline).click();
    
    await commonsPage.delay(5);

    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
    await commonsPage.delay(5);
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    
    
    const actualLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');

    await commonsPage.delay(5);

    expect(expectedLynkBalance).toEqual(actualLynkBalance);

})

Then(/^User is redirected to the Decline Request Validation Screen$/,async () => {
    //AllureReporter.addTestId('6660')
    await expect(commonsPage.findlabelbytext('Are you sure?')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('If a friend sent you this by mistake, you can decline it and add a note if you want.')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('If the request came from someone you don’t know, and you did not expect it,')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('report it')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Add a note (optional)')).toBeDisplayed()
    await expect(RequestResponsePage.btnDecline).toHaveText('Decline')
})