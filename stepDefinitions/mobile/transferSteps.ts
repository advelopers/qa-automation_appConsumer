import { Given, Then, When, After, Before } from '@cucumber/cucumber';
import transferPage from '../../pages/mobile/transfer.page';
import RequestPage from '../../pages/mobile/request.page'
import CommonsPage from '../../pages/mobile/commons.page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import commonsPage from '../../pages/mobile/commons.page';
import Gestures from '../../commons/gestures';
import { openDeepLinkUrl } from '../../commons/utils';
import AllureReporter from '@wdio/allure-reporter'
import initialPage from '../../pages/mobile/initial.page';
import signInPage from '../../pages/mobile/signIn.page';

After({tags: "@id-6494"}, async ()=> {
    
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
    await transferPage.makeTransfer("gavin-bannister", "6000")
   
    await commonsPage.delay(5)

});

Then (/^i grant permissions allow access$/, async ()=>{
    driver.acceptAlert()
})

Then (/^i search for user "(.*?)"$/, async (user: string)=>{
    await (transferPage.searchUser(user));
    await CommonsPage.delay(3);
})

Then(/^i enter the amount "(.*?)" to transfer$/, async (amount: string) => {
    await (CommonsPage.usenumpad(await transferPage.iptAmount,amount));
});

Then(/^i enter the Lynk balance to transfer$/, async () => {
    AllureReporter.addTestId('6499')
    await (await DashboardPage.balanceEye).click();
    await CommonsPage.delay(3);
    const lynkBalance = DashboardPage.getBalance();
    await (CommonsPage.tapbytext("Transfer"));
    await (CommonsPage.usenumpad(await transferPage.iptAmount,await lynkBalance));
});

When(/^I enter the amount "(.*?)" to transfer to "(.*?)"$/,{timeout: 300 * 1000},async (amount:string, user:string) => {
    AllureReporter.addTestId('6456');

    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');

    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));

    (await (transferPage.iptAmount)).setValue(amount);

    const balance = parseFloat(lynkBalance);
    const transferAmt = parseFloat(amount);

    await expect((transferPage.swipeText)).not.toBePresent();
    //(await transferPage.confirmationSwipe).click()
    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);

    //await commonsPage.delay(5);

    // await expect(commonsPage.findlabelbytext('Transfer successful')).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext(amount)).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext('JMD')).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext('Transaction details')).toBeDisplayed();

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();
    //(await (commonsPage.btnGoToHome)).click();

    (await (DashboardPage.balanceEye)).waitForExist();
    (await (DashboardPage.balanceEye)).click();
    //const expectedBalanceText = expectedBalance.toString();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    
    const expectedBalance = balance - transferAmt;

    //expect(expectedBalance.toString()).toEqual(lynkBalance);
    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''))
})

When(/^I enter the greater than lynk balance amount "(.*?)" to transfer to "(.*?)"$/,async (amount:string, user:string) => {
    AllureReporter.addTestId('6496');
    (await (DashboardPage.balanceEye)).click();
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));
    (await (transferPage.iptAmount)).click();
    (await (transferPage.iptAmount)).setValue(amount);
    
    await expect(CommonsPage.findlabelbytext("Your account doesn't have enough money. Try a different amount.")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("CASH IN")).toBeDisplayed();
})
When(/^I tranfer the lynk balance to "(.*?)"$/,{timeout: 300 * 1000},async (user:string) => {
    AllureReporter.addTestId('6494');

    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));

    ((await transferPage.iptAmount)).waitForDisplayed();
    (await (transferPage.iptAmount)).setValue(lynkBalance);
    const balance = parseFloat(lynkBalance);
    const transferAmt = parseFloat(lynkBalance);

    await expect((transferPage.swipeText)).not.toBePresent();

    //(await transferPage.confirmationSwipe).click();

    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);

    // await expect(commonsPage.findlabelbytext('Transfer successful')).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext(lynkBalance)).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext('JMD')).toBeDisplayed()
    // await expect(commonsPage.findlabelbytext('Transaction details')).toBeDisplayed();

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    // (await (commonsPage.btnGoToHome)).click();

    (await (DashboardPage.balanceEye)).waitForExist();
    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    //lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    const expectedBalance = balance - transferAmt;
    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));
    await CommonsPage.delay(2);
})

When(/^I enter the amount with decimal "(.*?)" and "(.*?)" to transfer to "(.*?)"$/,{timeout: 300 * 1000},async (amount:string, cents:string ,user:string) => {
    AllureReporter.addTestId('6498');

    //(await (DashboardPage.balance)).click();
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    let lynkBalanceCents = (await DashboardPage.getBalanceDecimal()).replace(/\D/g, '');

    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));

    //(await (transferPage.iptAmount)).click();
    (await (transferPage.iptAmount)).setValue(amount);
    await CommonsPage.delay(5);
    amount = amount.replace(/\D/g, '');
    //(await (transferPage.iptAmountCents)).click();
    (await (transferPage.iptAmountCents)).setValue(cents);
 
    const balanceCentsFloat = parseFloat(lynkBalanceCents)
    const transferCents = parseFloat(cents);

    await expect((transferPage.swipeText)).not.toBePresent();
    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    const expectedBalanceCents = balanceCentsFloat - transferCents;

    (await (DashboardPage.balance)).waitForClickable()
    await expect(DashboardPage.balance).toBeDisplayed();
    //await expect(CommonsPage.findLabelThatContainsText("Transfer Successful")).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext("- 0."+cents+" JMD")).toBeDisplayed();
})

When(/^I exceed the daily tranfer limit when I send to "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('6520');

    (await (DashboardPage.btnTransfer)).waitForDisplayed();
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).waitForDisplayed();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));

    (await (transferPage.iptAmount)).waitForDisplayed();
    (await (transferPage.iptAmount)).setValue('200000');

    await expect((transferPage.swipeText)).not.toBePresent();

    //(await (transferPage.confirmationSwipe)).waitForDisplayed();
    //(await (transferPage.confirmationSwipe)).click();

    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);


    // await expect(CommonsPage.findlabelbytext("Transaction Limit Exceeded")).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext("Hey, you've exceeded your daily lynk transaction limit. Please try again tomorrow. ")).toBeDisplayed();
    
})

When(/^I swipe up to send$/,async () => {
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

    //Gestures.swipeElement(await transferPage.confirmationSwipe, from, to);
    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount)
})

Then (/^Transfer cannot be completed$/,async () => {
    AllureReporter.addTestId('6509')
    //await expect(CommonsPage.findlabelbytext('Complete to send')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Swipe up to send')).toBeDisplayed()
})

Then (/^User is redirected to transfers screen$/,async () => {
    AllureReporter.addTestId('19139')
    await expect(CommonsPage.findlabelbytext('Who would you\n like to lynk up with?')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Lynk is better with the people you know.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Find friends who are already on Lynk and invite the ones that aren’t here yet by accessing your contacts.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Lynk up your contacts')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Search by Lynk.iD or display name')).toBeDisplayed()
    await expect(transferPage.iptSearch).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Select Lynkie')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Add a note (optional)')).toBeDisplayed()
    await expect(transferPage.lnkQR).toBePresent()
})

Then (/^Transfer limit exceeded modal is displayed$/,async () => {
    await expect(CommonsPage.findlabelbytext("Transaction Limit Exceeded")).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext("Hey, you've exceeded your daily lynk transaction limit. Please try again tomorrow. ")).toBeDisplayed();
})

When(/^I exceed the low KYC daily tranfer limit when I send to "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('45068');

    (await (DashboardPage.btnTransfer)).waitForDisplayed();
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).waitForDisplayed();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));

    (await (transferPage.iptAmount)).waitForDisplayed();
    (await (transferPage.iptAmount)).setValue('40500');

    await expect((transferPage.swipeText)).not.toBePresent();

    //(await (transferPage.confirmationSwipe)).waitForDisplayed();
    //(await (transferPage.confirmationSwipe)).click();

    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);
})

When(/^I use a low KYC account to send the amount "(.*?)" to "(.*?)"$/,{timeout: 300 * 1000},async (amount:string, user:string) => {
    AllureReporter.addTestId('45071');

    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balanceEye)).not.toHaveText('*****')
    let lynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');

    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));

    (await (transferPage.iptAmount)).setValue(amount);

    const balance = parseFloat(lynkBalance);
    const transferAmt = parseFloat(amount);

    await expect((transferPage.swipeText)).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    (await (DashboardPage.balanceEye)).waitForExist();
    (await (DashboardPage.balanceEye)).click();

    await expect((DashboardPage.balance)).not.toHaveText('*****')
    
    const expectedBalance = balance - transferAmt;

    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''))
})


Then (/^Validate confirm recipient modal is displayed for P2P link transactions with new recipient "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('54511');

    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));


    await expect(CommonsPage.findlabelbytext("Confirm recipient")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("@"+user)).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("You’ve never exchanged money with\n @"+user+". If you have any doubt, confirm the information with the recipient.")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Once you complete the transfer, your money can’t be recovered.")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Cancel")).toBeDisplayed();

    await expect(transferPage.confirmRecipientContinueBtn).toBeDisplayed();
    await expect(transferPage.confirmRecipientCancelBtn).toBeDisplayed();
})


Then (/^Validate user is able to click cancel on P2P Confirmation Modal "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('54512');

    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).click();

    await CommonsPage.delay(3)
    await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));


    await expect(transferPage.confirmRecipientContinueBtn).toBeDisplayed();
    await expect(transferPage.confirmRecipientCancelBtn).toBeDisplayed();

    (await transferPage.confirmRecipientCancelBtn).click();

    await expect(transferPage.iptAmount).not.toBeDisplayed();
})

Then (/^Validate confirm recipient modal not displayed for P2P requests "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('54517');

    // (await (DashboardPage.btnTransfer)).click();
    // (await (DashboardPage.accJMD)).click();

    // await CommonsPage.delay(3)
    // await driver.acceptAlert()

    await (RequestPage.searchUser(user));
    await (CommonsPage.tapbytext("@"+user));
    //await (CommonsPage.tapbytext("@"+user));


    await expect(transferPage.confirmRecipientContinueBtn).not.toBeDisplayed();
    await expect(transferPage.confirmRecipientCancelBtn).not.toBeDisplayed();

    await expect(transferPage.iptAmount).toBeDisplayed();
})

When(/^make a P2P transfer QR Code$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('5897')

    const url = 'lynkdev.page.link/5qT5';

    await openDeepLinkUrl(url) 

    await CommonsPage.delay(10);
    await expect(transferPage.iptAmount).toBeDisplayed();
    //(await MerchantPage.iptAmount).click();
    (await transferPage.iptAmount).setValue('10');

    await CommonsPage.delay(10);

    await CommonsPage.confirmationSwipe(await transferPage.confirmationSwipe, await transferPage.iptAmount);

    await expect(commonsPage.findlabelbytext('Transfer successful')).toBeDisplayed()
})

Then(/^Verify transaction summary$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('5897')

    await expect(CommonsPage.findlabelbytext("Transfer successful")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Make another transaction")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Go to home")).toBeDisplayed();
})

When(/^Validate user receives confirmation modal on P2P QR scan for a new recipient$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('54513')

    const url = 'lynkdev.page.link/XKDC';

    await openDeepLinkUrl(url) 

    await CommonsPage.delay(10);

    await expect(CommonsPage.findlabelbytext("Confirm recipient")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("@gavin-bannister-12")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("You’ve never exchanged money with\n @gavin-bannister-12. If you have any doubt, confirm the information with the recipient.")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Once you complete the transfer, your money can’t be recovered.")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Cancel")).toBeDisplayed();

    await expect(transferPage.confirmRecipientContinueBtn).toBeDisplayed();
    await expect(transferPage.confirmRecipientCancelBtn).toBeDisplayed();
})

When(/^Validate user is able to cancel confirmation modal on P2P QR scan for a new recipient$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('54515')

    const url = 'lynkdev.page.link/XKDC';

    await openDeepLinkUrl(url) 

    await CommonsPage.delay(10);

    await expect(transferPage.confirmRecipientContinueBtn).toBeDisplayed();
    await expect(transferPage.confirmRecipientCancelBtn).toBeDisplayed();

    (await transferPage.confirmRecipientCancelBtn).click();

    await expect(transferPage.iptAmount).not.toBeDisplayed();
    await expect(DashboardPage.avatarWrapper).toBeDisplayed();
})