import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import CbdcPage from '../../pages/mobile/cbdc.page';
import AllureReporter from '@wdio/allure-reporter';
import CommonsPage from '../../pages/mobile/commons.page';



const pages: { [key: string]: Page } = { ["cbdc"]: CbdcPage };

When(/^I make a successful JamDex Transfer to "(.*?)" of amount "(.*?)"$/,async (number:string, amount:string) => {
    //(await DashboardPage.lnkMore).click();
    AllureReporter.addTestId('32314');

    (await CbdcPage.txtFldRecepient).waitForDisplayed();
    (await CbdcPage.txtFldRecepient).setValue(number);

    await CommonsPage.delay(5);

    (await CbdcPage.btnContinue).waitForDisplayed();
    (await CbdcPage.btnContinue).click();

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const JamDexBal = await (await CbdcPage.txtBalance).getText();

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(amount);

    await driver.hideKeyboard();

    const balance = parseFloat(JamDexBal);
    const transferAmt = parseFloat(amount);

    await expect(CbdcPage.swipeText).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await CbdcPage.swipeConfirm, await CbdcPage.iptAmount)

    const expectedBalance = balance - transferAmt;

    (await DashboardPage.btnTransfer).waitForDisplayed();
    (await DashboardPage.btnTransfer).click();

    await expect(CommonsPage.findlabelbytext(expectedBalance.toString())).toBeDisplayed()
    await CommonsPage.delay(3)
})

When(/^I go through exchange tips$/, async()=>{
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
            await CommonsPage.tapByCoordinates(929,751);
        }
    }
    catch(error){
        console.log('Welcome tips was not displayed');
    }

});

Then(/^I select JamDex to JMD option$/, async()=>{

    (await CbdcPage.ddlCurreny1).waitForDisplayed();
    (await CbdcPage.ddlCurreny1).click();    
    
    (await CbdcPage.currencyJamDex).waitForDisplayed();
    (await CbdcPage.currencyJamDex).click();
});

Then(/^I select JMD to JamDex option$/, async()=>{

    (await CbdcPage.ddlCurreny1).waitForDisplayed();
    (await CbdcPage.ddlCurreny1).click();    
    
    (await CbdcPage.currencyJMD).waitForDisplayed();
    (await CbdcPage.currencyJMD).click();
});

When(/^I make a successful JamDex to JMD exchange of amount "(.*?)"$/,async (amount:string) => {
    //(await DashboardPage.lnkMore).click();
    AllureReporter.addTestId('31886');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const JamDexBal = await (await CbdcPage.txtBalance).getText();

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(amount);

    await driver.hideKeyboard();

    const balance = parseFloat(JamDexBal);
    const transferAmt = parseFloat(amount);

    await expect(CbdcPage.swipeText).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await CbdcPage.swipeConfirm, await CbdcPage.iptAmount)

    await expect(CommonsPage.findlabelbytext('Exchange of '+amount+' JAM-DEX to '+amount+' JMD was submitted!')).toBeDisplayed();

    // const expectedBalance = balance - transferAmt;

    // (await DashboardPage.btnTransfer).waitForDisplayed();
    // (await DashboardPage.btnTransfer).click();

    // await expect(CommonsPage.findlabelbytext(expectedBalance.toString())).toBeDisplayed()
    // await CommonsPage.delay(3)
})

When(/^I make a successful JMD to Jamdex exchange of amount "(.*?)"$/,async (amount:string) => {
    //(await DashboardPage.lnkMore).click();
    AllureReporter.addTestId('31885');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const lynkBalance = (await (await CbdcPage.txtBalance).getText()).replace(/\D/g, '');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(amount);

    await driver.hideKeyboard();

    const balance = parseFloat(lynkBalance);
    const transferAmt = parseFloat(amount);

    await expect(CbdcPage.swipeText).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await CbdcPage.swipeConfirm, await CbdcPage.iptAmount)

    await expect(CommonsPage.findlabelbytext('Exchange of '+amount+' JMD to '+amount+' JAM-DEX was submitted!')).toBeDisplayed();

    // const expectedBalance = balance - transferAmt;

    // (await (DashboardPage.balance)).waitForExist();
    // (await (DashboardPage.balance)).click();
    // await expect((DashboardPage.balance)).not.toHaveText('*****')

    // //await expect(CommonsPage.findlabelbytext(expectedBalance.toString())).toBeDisplayed()
    // expect(expectedBalance.toString()).toEqual((await (await DashboardPage.balance).getText()).replace(/\D/g, ''));
    // await CommonsPage.delay(3)
})

Then(/^Validate Exchange money screen$/, async()=>{

    AllureReporter.addTestId('28343')

    await expect(CommonsPage.findlabelbytext('Exchange')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Lynk')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('Swipe up to submit exchange')).toBeDisplayed();

    await expect((CbdcPage.iptAmount)).toBePresent()
    await expect((CbdcPage.swipeText)).toBePresent()
});

Then(/^Validate user can input amount up to current cbdc balance$/, async()=>{

    AllureReporter.addTestId('28345');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const lynkBalance = (await (await CbdcPage.txtBalance).getText()).replace(/\D/g, '');

    const balance = parseFloat(lynkBalance);

    let exchangeAmt = balance - 1;

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(exchangeAmt.toString());

    await driver.hideKeyboard();
    
    await expect(CommonsPage.findlabelbytext('Swipe up to submit exchange')).not.toBeDisplayed();
    await expect((CbdcPage.swipeConfirm)).toBePresent()
    await expect((CbdcPage.swipeText)).not.toBePresent()
});

Then(/^Validate user gets error message and is unable to exchange amount greater than is available$/, async()=>{

    AllureReporter.addTestId('31890');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const lynkBalance = (await (await CbdcPage.txtBalance).getText()).replace(/\D/g, '');

    const balance = parseFloat(lynkBalance);

    let exchangeAmt = balance + 1;

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(exchangeAmt.toString());

    await driver.hideKeyboard();
    
    await expect((CbdcPage.txtErrorMessage)).toBePresent();
    await expect((CbdcPage.txtErrorMessage)).toHaveText("Your account doesn't have enough money. Try a different amount.");
    await expect((CbdcPage.swipeConfirm)).not.toBePresent();
    await expect((CbdcPage.swipeText)).toBePresent()
});


Then(/^Validate user unable input special character in amount field$/, async()=>{

    AllureReporter.addTestId('31890');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue("#$");

    await driver.hideKeyboard();
    

    await expect((CbdcPage.iptAmount)).toHaveText("0");
});


When(/^I make a successful JMD to Jamdex exchange with cents of amount "(.*?)" & "(.*?)"$/,async (amount:string, amtCents:string) => {

    AllureReporter.addTestId('31892');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).click();

    (await CbdcPage.iconDisplayBal).waitForDisplayed();
    (await CbdcPage.iconDisplayBal).click();

    (await CbdcPage.txtBalance).waitForDisplayed();
    await expect((CbdcPage.txtBalance)).not.toHaveText('*****')
    const lynkBalance = (await (await CbdcPage.txtBalance).getText()).replace(/\D/g, '');

    (await CbdcPage.iptAmount).waitForDisplayed();
    (await CbdcPage.iptAmount).setValue(amount);

    //await driver.hideKeyboard();

    //(await CbdcPage.iptAmountCents).waitForDisplayed();
    //(await CbdcPage.iptAmountCents).click();

    await driver.pressKeyCode(158);

    (await CbdcPage.iptAmountCents).waitForDisplayed();
    (await CbdcPage.iptAmountCents).pressKeyCode(149);

    await driver.hideKeyboard();

    const balance = parseFloat(lynkBalance);
    const transferAmt = parseFloat(amount);

    await expect(CbdcPage.swipeText).not.toBePresent();
    
    await CommonsPage.confirmationSwipe(await CbdcPage.swipeConfirm, await CbdcPage.iptAmount)

    await expect(CommonsPage.findlabelbytext('Exchange of '+amount+'.'+amtCents+' JMD to '+amount+'.'+amtCents+' JAM-DEX was submitted!')).toBeDisplayed();
})


Then(/^Validate user can switch currency using arrows$/, async()=>{

    AllureReporter.addTestId('31884');

    await expect((CbdcPage.txtCurrency)).not.toHaveText('Lynk');

    await CommonsPage.tapByCoordinates(481,605)

    await expect((CbdcPage.txtCurrency)).toHaveText('Lynk');

    await expect((CbdcPage.txtCurrency)).not.toHaveText('JAM-DEX');

    await CommonsPage.tapByCoordinates(481,605)

    await expect((CbdcPage.txtCurrency)).toHaveText('JAM-DEX');

});
