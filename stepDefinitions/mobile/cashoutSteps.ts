import { Given, Then, When, After, Before } from '@cucumber/cucumber';
import cashOutPage from '../../pages/mobile/cashOut.page';
import CommonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import AllureReporter from '@wdio/allure-reporter';
import commonsPage from '../../pages/mobile/commons.page';
import moreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import addBeneficiaryPage from '../../pages/mobile/addBeneficiary.page';
import banksCardsPage from '../../pages/mobile/banksCards.page';
import Gestures from '../../commons/gestures';
import initialPage from '../../pages/mobile/initial.page';
import signInPage from '../../pages/mobile/signIn.page';
import cashInPage from '../../pages/mobile/cashIn.page';

const pages: { [key: string]: Page } = { ["cashOut"]: cashOutPage };

After({tags: "@id-6212"}, async ()=> {
    
    await browser.reset();

    await initialPage.SignIn();

    const loginData = {
        phone:"79366199905",
        pin:"040992"
    }

    await signInPage.login(loginData.phone, loginData.pin)
    await DashboardPage.closeWelcomeTips();
    await cashInPage.bankCashIn("18000");
});

When(/^i enter the amount "(.*)" to cashout$/, async (amount: string) => {
    //await (CommonsPage.usenumpad(await cashOutPage.iptAmount, amount));
    (await (cashOutPage.lblNcbCashOut)).click();
    await CommonsPage.delay(5);
    
    (await cashOutPage.iptAmount).setValue(amount);
});

Then(/^i click the button saving$/, async () => {
    await (cashOutPage.Savingsclick());
});

Then(/^the cashout button is not displayed$/, async () => {
    //expect(await (cashOutPage.txtCashOut)).not.toBeDisabled();
});

Then(/^i enter the Lynk balance to cashout$/, async () => {
    await (await DashboardPage.balance).click();
    CommonsPage.delay(2);
    const lynkBalance = DashboardPage.getBalance();
    await (CommonsPage.tapbytext("Cash out"));
    await (CommonsPage.usenumpad(await cashOutPage.iptAmount, await lynkBalance));
});


When(/^I cash out the amount "(.*)" to my NCB Account$/,{timeout: 300 * 1000}, async (amount:string) => {
    AllureReporter.addTestId('6011');
    
    //(await (DashboardPage.btnCashOut)).waitForDisplayed();
    //(await (DashboardPage.btnCashOut)).click();
    //(await (cashOutPage.lblNcbCashOut)).waitForDisplayed();
    //(await (cashOutPage.lblNcbCashOut)).click();
    (await (cashOutPage.iptAmount)).waitForDisplayed();
    (await (cashOutPage.iptAmount)).click();
    (await (cashOutPage.iconShowBal)).waitForDisplayed();
    (await (cashOutPage.iconShowBal)).click();
    await expect(cashOutPage.txtLynkBal).not.toHaveText('*****')
    //await CommonsPage.delay(10);
    //driver.pause(10000)
    const  startLynkBalance = (await cashOutPage.getBalance()).replace(/\D/g, '');
    (await cashOutPage.iptAmount).setValue(amount);
    await driver.hideKeyboard();
    await CommonsPage.confirmationSwipe(await cashOutPage.confirmSwipe, await cashOutPage.iptAmount);

    const lynkBalanceFloat = parseFloat(startLynkBalance);
    const cashoutAmt = parseFloat(amount);

    // await expect(CommonsPage.findlabelbytext('Cash out successful')).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext(amount)).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext('JMD')).toBeDisplayed()
    // await expect(CommonsPage.findlabelbytext('Transaction details')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('From')).toBeDisplayed();

    // (await (CommonsPage.btnGoToHome)).click();

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    // const expectedBalance = lynkBalanceFloat - cashoutAmt;
    //const expectedBalanceText = expectedBalance.toString();
    (await (DashboardPage.balanceEye)).waitForDisplayed();
    (await (DashboardPage.balanceEye)).click();
    await expect(DashboardPage.balance).not.toHaveText('*****');
    //const endLynkBalance = (await DashboardPage.getBalance()).replace(/\D/g, '');
    const expectedBalance = lynkBalanceFloat - cashoutAmt;

    expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));
    //await CommonsPage.delay(2)
});

When(/^Cash out with amount equal to the balance of the lynk account$/,{timeout: 300 * 1000},async () => {

    AllureReporter.addTestId('6212');

    (await (cashOutPage.lblNcbCashOut)).click();

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await (cashOutPage.lblNcbSavingsAcc)).waitForDisplayed();
    (await (cashOutPage.lblNcbSavingsAcc)).click();

    (await (cashOutPage.iptAmount)).click();
    (await (cashOutPage.iconShowBal)).click();
    await expect(cashOutPage.txtLynkBal).not.toHaveText('*****')
    //await CommonsPage.delay(10);
    const startLynkBalance = (await cashOutPage.getBalance()).replace(/\D/g, '');
    (await cashOutPage.iptAmount).setValue(startLynkBalance);
    await driver.hideKeyboard();
    await CommonsPage.confirmationSwipe(await cashOutPage.confirmSwipe, await cashOutPage.iptAmount);

    const lynkBalanceFloat = parseFloat(startLynkBalance);
    const cashoutAmt = parseFloat(startLynkBalance);

    //const expectedBalance = lynkBalanceFloat - cashoutAmt;

    await CommonsPage.delay(10);

    const btnGoHome = await $('//*[@text="Go to home"]');

    //(await (commonsPage.btnGoToHome)).click();
    await btnGoHome.waitForDisplayed();
    await btnGoHome.click();

    (await (DashboardPage.balanceEye)).waitForClickable();
    (await (DashboardPage.balanceEye)).click();
    await expect(DashboardPage.balance).not.toHaveText('*****')
    //const endLynkBalance = (await DashboardPage.getBalance());

    expect((await (await DashboardPage.balance).getText()).replace(/\D/g, '')).toEqual('0')
})

When(/^Cash out with amount greater than the balance of the lynk account "(.*)"$/,async (amount:string) => {

    AllureReporter.addTestId('6213');

    (await (cashOutPage.lblNcbCashOut)).click();

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await (cashOutPage.lblNcbSavingsAcc)).waitForDisplayed();
    (await (cashOutPage.lblNcbSavingsAcc)).click();

    (await (cashOutPage.iptAmount)).click();
    //(await (cashOutPage.iconShowBal)).click();
    await CommonsPage.delay(5);
    
    (await cashOutPage.iptAmount).setValue(amount);

    await expect(CommonsPage.findlabelbytext("Insufficient funds in Lynk")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("CASH IN")).toBeDisplayed();
})


When(/^I perform an ACH cashout of the amount "(.*)"$/,{timeout: 300 * 1000}, async(amount:string)=>{

    AllureReporter.addTestId('28444');

    (await cashOutPage.lblOtherBankCashOut).waitForClickable();
    (await cashOutPage.lblOtherBankCashOut).click();
    (await CommonsPage.txtFldPIN).waitForDisplayed();
    (await CommonsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
    (await addBeneficiaryPage.lnkOtherBankBeneficiary).waitForDisplayed();
    (await addBeneficiaryPage.lnkOtherBankBeneficiary).click();

    try{
        //(await cashOutPage.btnACHContinue).waitForDisplayed()
        //if(await (await cashOutPage.btnACHContinue).isDisplayed()){
            //(await cashOutPage.btnACHContinue).click(); 
            await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
            await (CommonsPage.tapbytext("Continue"));
        }
    //}
     catch(error){
        console.log('ACH Cashout Modal Disclaimer was not displayed')
    }

    // await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
    // await (CommonsPage.tapbytext("Continue"));

    await CommonsPage.delay(5);

    (await cashOutPage.iptAmount).setValue(amount);
    await CommonsPage.delay(3)
    await CommonsPage.confirmationSwipe(await cashOutPage.achCashoutSwipe, await cashOutPage.iptAmount);

    await CommonsPage.delay(12)

    await expect(CommonsPage.findlabelbytext("Transfer submitted")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext(amount)).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Transaction details")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Reference number")).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext("It will take less than 3 business days to process")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Make another transaction")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Go to home")).toBeDisplayed();
})

When(/^I try to cash out zero dollars$/,async () => {
    AllureReporter.addTestId('6228');
    (await (cashOutPage.lblNcbCashOut)).click();
    (await (cashOutPage.lblNcbSavingsAcc)).waitForDisplayed();
    (await (cashOutPage.lblNcbSavingsAcc)).click();
    //(await (cashOutPage.iptAmount)).click();
    //(await (cashOutPage.iconShowBal)).click();
    await CommonsPage.delay(5);

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
    
    (await cashOutPage.iptAmount).setValue('0');
    await CommonsPage.confirmationSwipe(await cashOutPage.confirmSwipe, await cashOutPage.iptAmount);
    await expect(CommonsPage.findlabelbytext("Swipe up to cash out")).toBeDisplayed();
    await expect(DashboardPage.homeScreen).not.toBeDisplayed();
    await expect(cashOutPage.iptAmount).toBeDisplayed()
})

Then(/^User is redirected to cash out page$/, async () => {
    AllureReporter.addTestId('6258')
    //expect(await (cashOutPage.txtCashOut)).not.toBeDisabled();
    await expect(cashOutPage.confirmSwipe).toBeDisplayed();
    await expect(cashOutPage.lblLinkedAccText).toBeDisplayed();
    await expect(cashOutPage.iptAmount).toBeDisplayed();
});


Then(/^Click cash out button$/, async () => {
    (await moreFeaturesPage.lnkCashOut).click();
});

When(/^I select the account to cash out from$/, async () => {
    (await cashOutPage.lblNcbSavingsAcc).waitForDisplayed();
    (await cashOutPage.lblNcbSavingsAcc).click();
});

When(/^I perform an ACH cashout of amount greater than Lynk Balance "(.*)"$/, async(amount:string)=>{

    AllureReporter.addTestId('29773');

    (await cashOutPage.lblOtherBankCashOut).waitForClickable();
    (await cashOutPage.lblOtherBankCashOut).click();
    (await CommonsPage.txtFldPIN).waitForDisplayed();
    (await CommonsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
    (await addBeneficiaryPage.lnkNCBBeneficiary).waitForDisplayed();
    (await addBeneficiaryPage.lnkNCBBeneficiary).click();

    try{
        (await cashOutPage.btnACHContinue).waitForDisplayed()
        if(await (await cashOutPage.btnACHContinue).isExisting()){
            //(await cashOutPage.btnACHContinue).click(); 
            await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
            await (CommonsPage.tapbytext("Continue"));
        }
    } catch(error){
        console.log('ACH Cashout Modal Disclaimer was not displayed')
    }
    
    // await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
    // await (CommonsPage.tapbytext("Continue"));

    await CommonsPage.delay(5);

    (await cashOutPage.iptAmount).setValue(amount);
    await CommonsPage.delay(3)

    await expect(CommonsPage.findlabelbytext("Insufficient funds in Lynk")).toBeDisplayed()
})



When(/^I perform an ACH cashout to a NCB account of the amount "(.*)"$/,{timeout: 300 * 1000}, async(amount:string)=>{

    AllureReporter.addTestId('28418');

    (await cashOutPage.lblOtherBankCashOut).waitForClickable();
    (await cashOutPage.lblOtherBankCashOut).click();
    (await CommonsPage.txtFldPIN).waitForDisplayed();
    (await CommonsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
    (await addBeneficiaryPage.lnkNCBBeneficiary).waitForDisplayed();
    (await addBeneficiaryPage.lnkNCBBeneficiary).click();

    // await expect(CommonsPage.findlabelbytext("Continue")).toBeDisplayed();
    // await (CommonsPage.tapbytext("Continue"));

    await CommonsPage.delay(5);

    (await cashOutPage.iptAmount).setValue(amount);
    await CommonsPage.delay(3)
    await CommonsPage.confirmationSwipe(await cashOutPage.achCashoutSwipe, await cashOutPage.iptAmount);

    await CommonsPage.delay(10)

    await expect(CommonsPage.findlabelbytext("Transfer submitted")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext(amount)).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Transaction details")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Reference number")).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext("It will take less than 3 business days to process")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Make another transaction")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Go to home")).toBeDisplayed();
})


When(/^I attempt to perform an ACH cashout to a NCB account that is greater than available lynk balance$/,{timeout: 300 * 1000}, async()=>{

    AllureReporter.addTestId('29769');

    (await cashOutPage.lblOtherBankCashOut).waitForClickable();
    (await cashOutPage.lblOtherBankCashOut).click();
    (await CommonsPage.txtFldPIN).waitForDisplayed();
    (await CommonsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
    (await addBeneficiaryPage.lnkNCBBeneficiary).waitForDisplayed();
    (await addBeneficiaryPage.lnkNCBBeneficiary).click();

    await CommonsPage.delay(5);

    (await cashOutPage.iptAmount).setValue("999999");
    await CommonsPage.delay(3)
    

    await expect(CommonsPage.findlabelbytext("Insufficient funds in Lynk")).toBeDisplayed();
})