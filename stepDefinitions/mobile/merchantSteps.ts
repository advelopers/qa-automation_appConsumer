import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import MerchantPage from '../../pages/mobile/merchant.page';
import CommonsPage from '../../pages/mobile/commons.page';
import { openDeepLinkUrl } from '../../commons/utils';
import { generatePWL } from '../../commons/utils';
import AllureReporter from '@wdio/allure-reporter';
import InitialPage from '../../pages/mobile/initial.page';
import RequestPage from '../../pages/mobile/request.page';
import DashboardPage from '../../pages/mobile/dashboard.page';

const pages: { [key: string]: Page } = { ["dashboard"]: MerchantPage };


When(/^Merchant QR Code is scanned$/,async () => {

    AllureReporter.addTestId('27603')

    const url = 'lynkdev.page.link/c7cA';

    await openDeepLinkUrl(url) 

    await expect(MerchantPage.iptAmount).toBeDisplayed();
    await expect(MerchantPage.swipeText).toBeDisplayed();
    await expect(MerchantPage.userId).toHaveText('@test-merchant');
    await expect(MerchantPage.userDisplayName).toHaveText('Test Merchant');

    await CommonsPage.delay(3)
})


When(/^make payment with merchant QR Code$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('27604')

    const url = 'lynkdev.page.link/c7cA';

    await openDeepLinkUrl(url) 

    await expect(MerchantPage.iptAmount).toBeDisplayed();
    //(await MerchantPage.iptAmount).click();
    (await MerchantPage.iptAmount).setValue('10');

    await CommonsPage.delay(10);

    await CommonsPage.confirmationSwipe(await MerchantPage.confirmationSwipe, await MerchantPage.iptAmount);
})

Then(/^Verify merchant payment summary$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('27604')

    await expect(CommonsPage.findlabelbytext("Payment successful")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("10")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Test Merchant")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Make another transaction")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Go to home")).toBeDisplayed();
})


When(/^Verify user cannot search for a merchant "(.*?)"$/,async (user:string) => {
    AllureReporter.addTestId('27760');

    (await (DashboardPage.btnTransfer)).waitForDisplayed();
    (await (DashboardPage.btnTransfer)).click();
    (await (DashboardPage.accJMD)).waitForDisplayed();
    (await (DashboardPage.accJMD)).click();

    await driver.dismissAlert();

    await (RequestPage.searchUser(user));

    //await expect((transferPage.swipeText)).not.toBePresent();

    await expect(CommonsPage.findlabelbytext("Test Merchant")).not.toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("We couldn't find any contact or lynk user with that name.")).toBeDisplayed();
})


When(/^Validate user is unable to make payment with merchant QR Code that exceed available balance - linked acc$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('27762')

    const url = 'lynkdev.page.link/c7cA';

    await openDeepLinkUrl(url) 

    await expect(MerchantPage.iptAmount).toBeDisplayed();
    (await MerchantPage.iptAmount).click();
    (await MerchantPage.iptAmount).setValue('900000');

    await CommonsPage.delay(15);

    await expect(CommonsPage.findlabelbytext("Your account doesn't have enough money. Try a different amount.")).toBeDisplayed();
    await expect(MerchantPage.btnCashIn).toBeDisplayed();
    await expect(MerchantPage.btnCashIn).toHaveText('CASH IN');
    
})

When(/^Validate user is unable to make payment with merchant QR Code that exceed available balance - unlinked acc$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('27761')

    const url = 'lynkdev.page.link/c7cA';

    await openDeepLinkUrl(url) 

    await expect(MerchantPage.iptAmount).toBeDisplayed();
    (await MerchantPage.iptAmount).click();
    (await MerchantPage.iptAmount).setValue('900000');

    await CommonsPage.delay(15);

    await expect(CommonsPage.findlabelbytext("Your account doesn't have enough money. Try a different amount.")).toBeDisplayed();
    await expect(MerchantPage.btnCashIn).not.toBeDisplayed();
})


When(/^Validate user is able submit payment of amount (.*) with PWL link$/,{timeout: 300 * 1000},async (amt:number) => {

    AllureReporter.addTestId('39431')

    const url = await generatePWL(amt);

    await CommonsPage.delay(3);

    await openDeepLinkUrl(url);

    const amtText = amt.toString();

    (await (MerchantPage.confirmationSwipe)).click();
    (await (MerchantPage.confirmationSwipe)).click();
    await CommonsPage.delay(12);
    await CommonsPage.confirmationSwipe(await MerchantPage.confirmationSwipe, await MerchantPage.btnGoBack);
    await CommonsPage.delay(12);
    await expect(CommonsPage.findlabelbytext("Payment successful")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Test Merchant")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext(amtText)).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Make another transaction")).not.toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Go to home")).toBeDisplayed();
})

When(/^Vallidate user is shown error modal once payment was already made$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('39428')

    const url = 'lynkdev.page.link/HDXR';

    await CommonsPage.delay(3);

    await openDeepLinkUrl(url);

    await expect(CommonsPage.findlabelbytext("Order Paid")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("This payment request for 10 JMD at Test Merchant was already paid")).toBeDisplayed();
})

When(/^Vallidate user is taken to payment screen for unpaid request for amount (.*)$/,{timeout: 300 * 1000},async (amt:number) => {

    AllureReporter.addTestId('39429')

    const url = await generatePWL(amt);

    await CommonsPage.delay(3);

    await openDeepLinkUrl(url);

    const amtText = amt.toString()
    await CommonsPage.delay(10)
    await expect(CommonsPage.findlabelbytext(amtText)).toBeDisplayed();
    await CommonsPage.delay(10)
    await expect(MerchantPage.userId).toHaveText('@test-merchant');
    await CommonsPage.delay(10)
    await expect(MerchantPage.userDisplayName).toHaveText('Test Merchant');
})

When(/^Vallidate user receives insufficient message on low Lynk balance (.*)$/,{timeout: 300 * 1000},async (amt:number) => {

    AllureReporter.addTestId('39430')

    const url = await generatePWL(amt);

    await CommonsPage.delay(3);

    await openDeepLinkUrl(url);

    await CommonsPage.delay(10)
    await expect(CommonsPage.findlabelbytext('Insufficient funds')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Your Lynk account doesn't have enough, but you can cash in to complete the transfer")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Cash in')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Cancel')).toBeDisplayed();
})

When(/^Validate user is redirected to Lynk app on click of link (.*)$/,{timeout: 300 * 1000},async (amt:number) => {

    AllureReporter.addTestId('39427')

    const url = await generatePWL(amt);

    await CommonsPage.delay(3);

    await openDeepLinkUrl(url);

    await CommonsPage.delay(10);

    (await InitialPage.btnLogin).waitForDisplayed();
    await expect(InitialPage.btnLogin).toBeDisplayed();
    await expect(InitialPage.btnSignup).toBeDisplayed();

})