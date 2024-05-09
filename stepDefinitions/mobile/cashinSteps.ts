import { Given, Then, When } from '@cucumber/cucumber';
import AllureReporter from '@wdio/allure-reporter';
import cashInPage from '../../pages/mobile/cashIn.page';
import CommonsPage from '../../pages/mobile/commons.page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import Page from '../../pages/mobile/page';
import moreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import banksCardsPage from '../../pages/mobile/banksCards.page';

const pages: { [key: string]: Page } = { ["cashIn"]: cashInPage };

Then(/^i enter the amount "(.*)" to cashin$/, async (amount: string) => {
    await (CommonsPage.usenumpad(await cashInPage.iptAmount, amount));
});

Then(/^I should be on the card cash in screen$/, async()=>{
    
    await expect(cashInPage.cashInCard).toBeDisplayed()
    await expect(cashInPage.cardIptAmount).toBeDisplayed()
    //await expect(cashInPage.sliderComplete).toBeDisplayed()
});

Then(/^validate need to Cash-in screen$/, async()=>{
    AllureReporter.addTestId('25626')
    await expect(CommonsPage.findlabelbytext("Connect with your accounts easily")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Lynk is a more convenient way to connect your existing bank account or card.")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("It allows you to quickly cash in and send money to other lynkies, pay bills, and much more!")).toBeDisplayed();
});

When(/^Bank Cash-in option is clicked$/, async()=>{
    
    (await cashInPage.cashInBank).waitForDisplayed();
    (await cashInPage.cashInBank).click();
});


When(/^I cash-in with the amount "(.*)" from NCB account$/,{timeout: 300 * 1000}, async (amount: string) => {
    
    AllureReporter.addTestId('6012');
    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    const startLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    
    (await DashboardPage.btnCashIn).click();
    (await cashInPage.cashInBank).waitForDisplayed();
    (await cashInPage.cashInBank).click();
    //(await cashInPage.ncbSavingsAcc).waitForDisplayed();
    //(await cashInPage.ncbSavingsAcc).click();

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.ncbSavingsAcc).waitForDisplayed();
    (await cashInPage.ncbSavingsAcc).click();

    await CommonsPage.delay(8);

    (await cashInPage.iptAmount).setValue(amount);

    await expect((cashInPage.swipeText)).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await cashInPage.confirmSwipe, await cashInPage.iptAmount);

    await CommonsPage.delay(10);

    //const txtHeader = await $('//*[@text="Cash in successful"]')

    //await expect(CommonsPage.findlabelbytext('Cash in successful')).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext(amount)).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext('JMD')).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext('Transaction details')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('From')).toBeDisplayed();

    // (await (CommonsPage.btnGoToHome)).click();

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    const lynkBalanceFloat = parseFloat(startLynkBalance);
    const cashinAmt = parseFloat(amount);

    // const expectedBalance = lynkBalanceFloat + cashinAmt;

    (await DashboardPage.balanceEye).waitForDisplayed();
    (await DashboardPage.balanceEye).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')

    const expectedBalance = lynkBalanceFloat + cashinAmt;

    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));

});

When(/^I try to cash-in with an amount  greater than in my NCB account "(.*)"$/, async (amount: string) => {
    
    AllureReporter.addTestId('11274');
    
    (await DashboardPage.btnCashIn).click();
    (await cashInPage.cashInBank).waitForDisplayed();
    (await cashInPage.cashInBank).click();
    //(await cashInPage.ncbSavingsAcc).waitForDisplayed();
    //(await cashInPage.ncbSavingsAcc).click();

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.ncbSavingsAcc).waitForDisplayed();
    (await cashInPage.ncbSavingsAcc).click();

    await CommonsPage.delay(8);

    (await cashInPage.iptAmount).waitForDisplayed();
    (await cashInPage.iptAmount).click();
    const bankAccName = await (await cashInPage.txtBankAccName).getText();
    (await cashInPage.iptAmount).setValue(amount);

    await expect(CommonsPage.findLabelThatContainsText("Your "+bankAccName+" doesn’t have")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('CASH IN')).not.toBeDisplayed();

});


When(/^I try to cash in zero dollars$/,async () => {
    AllureReporter.addTestId('11279');

    (await DashboardPage.btnCashIn).waitForClickable();
    (await DashboardPage.btnCashIn).click();
    (await cashInPage.cashInBank).waitForDisplayed();
    (await cashInPage.cashInBank).click();
    // (await cashInPage.ncbSavingsAcc).waitForDisplayed();
    // (await cashInPage.ncbSavingsAcc).click();
    await CommonsPage.delay(5);


    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');  
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.ncbSavingsAcc).waitForDisplayed();
    (await cashInPage.ncbSavingsAcc).click();
    
    (await cashInPage.iptAmount).setValue('0');
    await CommonsPage.confirmationSwipe(await cashInPage.confirmSwipe, await cashInPage.iptAmount);
    await expect(CommonsPage.findlabelbytext("Swipe up to cash in")).toBeDisplayed();
    await expect(DashboardPage.homeScreen).not.toBeDisplayed();
    await expect(cashInPage.iptAmount).toBeDisplayed()
})


When(/^I cash-in with the amount "(.*)" from Credit card$/,{timeout: 300 * 1000}, async (amount: string) => {
    
    //AllureReporter.addTestId('19369');
    AllureReporter.addTestId('36604');
    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')
    const startLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    
    (await DashboardPage.lnkMore).click();
    (await moreFeaturesPage.lnkCashIn).waitForDisplayed();
    (await moreFeaturesPage.lnkCashIn).click();
    (await cashInPage.cashInBank).click();
    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.registeredCard).waitForDisplayed();
    (await cashInPage.registeredCard).click();

    (await cashInPage.txtFldCVV).waitForDisplayed();
    (await cashInPage.txtFldCVV).setValue('843');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();


    (await cashInPage.iptAmount).waitForDisplayed();
    (await cashInPage.iptAmount).setValue(amount);

    await CommonsPage.delay(5)

    await expect((cashInPage.swipeText)).not.toBePresent();
    //(await cashInPage.confirmSwipe).click()
    
    await CommonsPage.confirmationSwipe(await cashInPage.confirmSwipe, await cashInPage.iptAmount);

    await CommonsPage.delay(10);

    (await (cashInPage.btnGoToCardProvider)).waitForDisplayed();
    await expect(cashInPage.btnGoToCardProvider).toBePresent();
    (await (cashInPage.btnGoToCardProvider)).click();

    await CommonsPage.delay(10);

    const lynkBalanceFloat = parseFloat(startLynkBalance);
    const cashinAmt = parseFloat(amount);


    const btnGoHome = await $('//*[@text="Go to home"]');

    (await (CommonsPage.btnGoToHome)).click();

    (await DashboardPage.balanceEye).waitForDisplayed();
    (await DashboardPage.balanceEye).click();
    await expect((DashboardPage.balance)).not.toHaveText('*****')

    const expectedBalance = lynkBalanceFloat + cashinAmt;

    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));

});

When(/^I change the cash in account$/,async () => {
    AllureReporter.addTestId('34931');

    (await DashboardPage.btnCashIn).waitForClickable();
    (await DashboardPage.btnCashIn).click();
    //(await DashboardPage.lnkMore).waitForDisplayed();
    //(await DashboardPage.lnkMore).click();
    //(await DashboardPage.btnCashIn).waitForClickable();
    //(await DashboardPage.btnCashIn).click();
    (await cashInPage.cashInBank).click();
    (await cashInPage.ncbSavingsAcc).waitForDisplayed();
    (await cashInPage.ncbSavingsAcc).click();
    await CommonsPage.delay(5);


    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();   
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();


    (await cashInPage.txtAccountName).waitForDisplayed();

    let currentAcc = await (await cashInPage.txtAccountName).getText();

    (await cashInPage.txtAccountName).click();

    await expect(CommonsPage.findlabelbytext("Choose a different account")).toBeDisplayed();
    await CommonsPage.tapbytext('Choose a different account');

    (await cashInPage.lnkNonPrefAcc).waitForDisplayed();
    (await cashInPage.lnkNonPrefAcc).click();

    (await CommonsPage.btnContinue).waitForDisplayed();
    (await CommonsPage.btnContinue).click();
    
    (await expect(cashInPage.txtAccountName).not.toHaveText(currentAcc))
})


When(/^Verify user aren't charge fees on debit card cash in$/, async (amount: string) => {

    AllureReporter.addTestId('43595');
    // (await (DashboardPage.balance)).waitForDisplayed();
    // (await (DashboardPage.balance)).click();
    // await expect((DashboardPage.balance)).not.toHaveText('*****')
    // const startLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    
    (await DashboardPage.lnkMore).click();
    (await moreFeaturesPage.lnkCashIn).waitForDisplayed();
    (await moreFeaturesPage.lnkCashIn).click();
    (await cashInPage.cashInBank).click();
    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.registeredCard).waitForDisplayed();
    (await cashInPage.registeredCard).click();

    (await cashInPage.txtFldCVV).waitForDisplayed();
    (await cashInPage.txtFldCVV).setValue('843');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();


    (await cashInPage.iptAmount).waitForDisplayed();
    (await cashInPage.iptAmount).setValue('2000');

    await CommonsPage.delay(5)

    await expect(cashInPage.lnkCardFee).toHaveText('0 JMD')

});

When(/^I attempt to cash out more than the daily limit$/, async () => {

    //AllureReporter.addTestId('43596');
    // (await (DashboardPage.balance)).waitForDisplayed();
    // (await (DashboardPage.balance)).click();
    
    (await DashboardPage.lnkMore).click();
    (await moreFeaturesPage.lnkCashIn).waitForDisplayed();
    (await moreFeaturesPage.lnkCashIn).click();
    (await cashInPage.cashInBank).click();
    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await cashInPage.registeredCard).waitForDisplayed();
    (await cashInPage.registeredCard).click();

    (await cashInPage.txtFldCVV).waitForDisplayed();
    (await cashInPage.txtFldCVV).setValue('843');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();


    (await cashInPage.iptAmount).waitForDisplayed();
    (await cashInPage.iptAmount).setValue('55000');

    await CommonsPage.delay(5)

    await expect((cashInPage.swipeText)).not.toBePresent();
    //(await cashInPage.confirmSwipe).click()
    
    await CommonsPage.confirmationSwipe(await cashInPage.confirmSwipe, await cashInPage.iptAmount);

    (await (cashInPage.btnGoToCardProvider)).waitForDisplayed();
    await expect(cashInPage.btnGoToCardProvider).toBePresent();
    (await (cashInPage.btnGoToCardProvider)).click();

});

Then(/^validate daily limit exceeded modal$/, async()=>{
    AllureReporter.addTestId('43596')
    await expect(CommonsPage.findlabelbytext("Daily Limit Exceeded")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("You've exceeded the J$50,000 daily limit for your account")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Your remaining limit balance is")).toBeDisplayed();
    //await expect(CommonsPage.findLabelThatContainsText("See Limits")).toBeDisplayed();
});

Then(/^validate update to lucky lynk modal$/, async()=>{
    AllureReporter.addTestId('42336')
    await expect(CommonsPage.findlabelbytext("To access Cash in level up your tier")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Access this and many more features when you boost your account. Just provide some additional documents and upgrade your tier for free!")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Upgrade tier for free")).toBeDisplayed();
});

Then(/^validate upgrade lynk tier modal$/, async()=>{
    AllureReporter.addTestId('45091')
    await expect(CommonsPage.findlabelbytext("To access Cash in level up your tier")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Access this and many more features when you boost your account. Just provide some additional documents and upgrade your tier for free!")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Upgrade tier for free")).toBeDisplayed();
});

Then(/^validate upgrade lynk tier modal - Etop$/, async()=>{
    AllureReporter.addTestId('45092')
    await expect(CommonsPage.findlabelbytext("To access Cash in level up your tier")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Access this and many more features when you boost your account. Just provide some additional documents and upgrade your tier for free!")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Upgrade tier for free")).toBeDisplayed();
});


When(/^User tries to link an NCB bank account$/, async()=>{
    (await cashInPage.lnkNCB).waitForDisplayed();
    (await cashInPage.lnkNCB).click();

    (await cashInPage.cashInBank).waitForDisplayed();
    (await cashInPage.cashInBank).click();
});


Then(/^validate Cash in without bank account connected screen$/, async()=>{
    AllureReporter.addTestId('16570')
    //await expect(CommonsPage.findLabelThatContainsText("Secure lynk established")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Connect your bank account to Lynk and cash in safely whenever you need!")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("To do so, we’ll send you to NCB’s website to enter your credentials so we can add your account to Lynk. You will leave the app for this process.")).toBeDisplayed();

    await expect((cashInPage.btnAddYourBank)).toBeDisplayed();
});

Then(/^Validate cash in drawer$/, async()=>{
    AllureReporter.addTestId('16572')
    await expect(CommonsPage.findLabelThatContainsText("Cash in")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Banks and cards")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("ABM")).toBeDisplayed();

    await expect((cashInPage.cashInBank)).toBeDisplayed();
    await expect((cashInPage.cashInABM)).toBeDisplayed();
});

Then(/^Validate NCB Cash In-Out screen$/, async()=>{
    AllureReporter.addTestId('25619')
    
    await expect(CommonsPage.findLabelThatContainsText("Cash in")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("Cash out")).toBeDisplayed();

});