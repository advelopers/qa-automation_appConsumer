import { Given, Then, When } from '@cucumber/cucumber';
import BankCardsPage from '../../pages/mobile/banksCards.page';
import cashInPage from '../../pages/mobile/cashIn.page';
import CommonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import AllureReporter from '@wdio/allure-reporter';
import banksCardsPage from '../../pages/mobile/banksCards.page';
import dashboardPage from '../../pages/mobile/dashboard.page';
import Gestures from '../../commons/gestures';
import signInPage from '../../pages/mobile/signIn.page';
import userProfilePage from '../../pages/mobile/userProfile.page';
import initialSteps from '../../pages/mobile/initial.page';
import {Before, After} from '@cucumber/cucumber'


const pages: { [key: string]: Page } = { ["bankCards"]: BankCardsPage };

After({tags: "@id-17880"}, async ()=> {
    // This hook will be executed before scenarios tagged with @id-17880
    await browser.reset();

    await initialSteps.SignIn();

    const loginData = {
        phone:"18765619022",
        pin:"199310"
    }

    await signInPage.login(loginData.phone, loginData.pin)
    await dashboardPage.closeWelcomeTips();
    await dashboardPage.navigateToBankAndCards();
    await banksCardsPage.deleteLinkedCards();
    await browser.takeScreenshot();
  });

Then(/^I am on the Connect Bank account or Cards Screen$/, async () => {
    await BankCardsPage.validate();
});

When(/^I click the connect card button$/, async()=>{
    (await BankCardsPage.btnConnectCard).click()
})

When(/^Savings account is clicked$/, async()=>{
    (await banksCardsPage.lnkSavingAcc).click()
  });

When(/^Enter PIN "(.*)"$/, async(pin:string)=> {
    (await BankCardsPage.txtFldPIN).setValue(pin);
    //(await BankCardsPage.btnContinue).click()
})

When(/^I Enter CVV "(.*)"$/, async(cvv:string)=> {
    (await BankCardsPage.txtFldCVV).setValue(cvv);
    //(await BankCardsPage.btnContinue).click()
})

When(/^I click the continue button$/, async()=>{
    await CommonsPage.delay(1);
    (await BankCardsPage.btnContinue).waitForEnabled();
    (await BankCardsPage.btnContinue).click();
})

When(/^The user selects the bank that the card is from$/, async()=>{
    (await BankCardsPage.itemBank).waitForDisplayed();
    (await BankCardsPage.itemBank).click()
})

When(/^The user taps the learn more link$/, async()=>{
    await expect(CommonsPage.findLabelThatContainsText('Learn more')).toBeDisplayed();
    await CommonsPage.tapByTextContains('Learn more');
})

When(/^The user opens the registered but unverified card$/, async()=>{
    (await BankCardsPage.lnkUnverifiedCard).waitForDisplayed();
    (await BankCardsPage.lnkUnverifiedCard).click();

    (await BankCardsPage.btnCashIn).waitForDisplayed();
    (await BankCardsPage.btnCashIn).click();

    await expect(CommonsPage.findlabelbytext('Continue')).toBeDisplayed();
    await CommonsPage.tapbytext('Continue');
})

Then(/^Verify contents verification card help modal on Verify your card screen$/, async()=>{
    AllureReporter.addTestId('47320');
    
    await expect(CommonsPage.findlabelbytext('Where can I find the amount?')).toBeDisplayed();
    await CommonsPage.tapbytext('Where can I find the amount?');

    await expect(CommonsPage.findlabelbytext('Verification charge')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('You can find this verification charge on your banking app or online banking statement.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('If you have any problem identifying the amount charged, please call your bank to confirm the amount.')).toBeDisplayed();
})

Then(/^Verify contents of verification charge modal$/, async()=>{
    AllureReporter.addTestId('47319');
    await expect(CommonsPage.findLabelThatContainsText('Charge for verification')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("For your safety, we'll charge a small amount in your card currency. This amount will be refunded after we validate your card.")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("We'll ask for that number later on the process, so make sure you have access to your card transactions.")).toBeDisplayed();
})

When(/^I input card number "(.*)"$/, async(cardnum:string)=>{
    (await BankCardsPage.txtFldCardNumber).setValue(cardnum)
})

When(/^I input card expriation date "(.*)"$/, async(expiry:string)=>{
    (await BankCardsPage.txtFldExpiryDate).setValue(expiry)
})

When(/^I input name on card "(.*)"$/, async(name:string)=>{
    (await BankCardsPage.txtFldNameOnCard).setValue(name)
})

When(/^I input card nickname "(.*)"$/, async(name:string)=>{
    (await BankCardsPage.txtFldCardNickName).setValue(name)
})

When(/^I input card CVV "(.*)"$/, async(name:string)=>{
    (await BankCardsPage.txtFldCVV).setValue(name)
})

Then(/^Continue button should be disabled$/, async()=>{
    expect(await BankCardsPage.btnContinue).not.toBeClickable()
})

Then (/^Maximum Card amount message is displayed$/, async()=>{
    AllureReporter.addTestId('19375')
    //await expect(BankCardsPage.maxCardAmtMsg).toHaveTextContaining("Looks like you just hit the maximum amount of cards you can link. To add this card you’ll need to remove an existing card from your profile.")
    await expect(CommonsPage.findLabelThatContainsText('Looks like you just hit the maximum amount of cards you can link.')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('To add this card you’ll need to remove an existing card from your profile.')).toBeDisplayed();
})

Then(/^User is redirected to Bank and Cards page without linked cards$/,async () => {

    AllureReporter.addTestId('16568')
    await expect(CommonsPage.findlabelbytext('Connect with your accounts easily')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Lynk is a more convenient way to connect your existing bank account or card.')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('It allows you to quickly cash in and send money to other lynkies, pay bills, and much more!')).toBeDisplayed()
    await expect(BankCardsPage.btnContinueAddingAcc).toBePresent()
    //await expect(BankCardsPage.btnConnectCard).toBePresent()
    await expect(CommonsPage.findlabelbytext('Continue')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Connect a card')).toBeDisplayed()
    
})

Then(/^Invalid Card number error message should be displayed$/,async () => {
    AllureReporter.addTestId('10936')
    await expect(CommonsPage.findlabelbytext('Minimum 16 digits')).toBeDisplayed()
})

Then(/^Invalid expiry date error message should be displayed$/,async () => {
    AllureReporter.addTestId('10938')
    await expect(CommonsPage.findlabelbytext('Invalid expiry date')).toBeDisplayed()
})

Then (/^Non-Jamaican card Lynking error is displayed$/,async () => {
    AllureReporter.addTestId('17881')
    await expect(CommonsPage.findlabelbytext('We can’t Lynk with that card')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('That’s a cool card, however at this time you can only connect Jamaican cards. If you have another one you can try again.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('For more info read our FAQs')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Connect another card')).toBeDisplayed()
})

Then (/^Non-3DS card Lynking error is displayed$/,async () => {
    AllureReporter.addTestId('48724')
    await expect(CommonsPage.findlabelbytext('We can’t Lynk with that card')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('The card you attempted to link to your account does not meet our security requirements. Please contact your bank for additional information.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('For more info read our FAQs')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Connect another card')).toBeDisplayed()
})

Then(/^User is redirected to the verify card screen$/,async () => {
    // AllureReporter.addTestId('17880')
    AllureReporter.addTestId('48723')
    await expect(CommonsPage.findlabelbytext('Verify your card')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Please check your card transactions and enter the amount charged by Lynk.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Enter amount charged')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Where can I find the amount?')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Verify')).toBeDisplayed()
})

Then(/^Screen Verification with credit cards already linked$/,async () => {
    AllureReporter.addTestId('16569')
    await expect(CommonsPage.findlabelbytext('Banks and cards')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('You have connected the following payment methods:')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Add payment method')).toBeDisplayed()
})

Then(/^Verify NCB bank account addition type$/,async () => {
    AllureReporter.addTestId('50315')
    await expect(CommonsPage.findlabelbytext('NCB')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Connect account')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Link a bank account.')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Connect card')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Link a credit/debit card.')).toBeDisplayed()
})

Then(/^Verify user is able to navigate to add NCB bank$/,async () => {
    AllureReporter.addTestId('50316')
    await expect(CommonsPage.findLabelThatContainsText('Secure lynk')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Connect your bank account to Lynk and cash in safely whenever you need!')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('To do so, we’ll send you to NCB’s website to enter your credentials so we can add your account to Lynk. You will leave the app for this process.')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Connect your bank account to Lynk and cash in safely whenever you need!')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Learn more')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Add your bank')).toBeDisplayed()
})

Then(/^Verify user is able to navigate to add non-NCB card flow$/,async () => {
    AllureReporter.addTestId('50350')
    await expect(CommonsPage.findLabelThatContainsText('Add Card')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Type of card')).toBeDisplayed()
})


Then(/^User Click Currency drop down list$/,async () => {    
    (await (BankCardsPage.ddlCurrency)).waitForDisplayed();
    (await (BankCardsPage.ddlCurrency)).click();
})

Then(/^User Click add payment method button$/,async () => {    
    (await (BankCardsPage.btnAddPaymethod)).waitForDisplayed();
    (await (BankCardsPage.btnAddPaymethod)).click();
})

When(/^User edits or sets bank nickname to "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('33983');
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await BankCardsPage.btnSaveNickName).click();

    (await expect(CommonsPage.findlabelbytext(name)).toBeDisplayed())
})


When(/^User edits or sets bank nickname to greater than 15 characters "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('34116');
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await expect(BankCardsPage.btnSaveNickName).toBeDisabled());
})

When(/^User edits or sets bank nickname with Alpha Numeric characters "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('34117');
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await BankCardsPage.btnSaveNickName).click();

    (await expect(CommonsPage.findlabelbytext(name)).toBeDisplayed())
})

When(/^User edits or sets bank nickname with special characters "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('34118');

    //let nickname = name.replace(/[^a-zA-Z ]/g, "");
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await BankCardsPage.btnSaveNickName).click();


    (await expect(CommonsPage.findlabelbytext(name)).not.toBeDisplayed())
})

When(/^User edits or sets bank account nickname with hyphen character "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('34119');

    
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await BankCardsPage.btnSaveNickName).click();

    (await expect(CommonsPage.findlabelbytext(name)).toBeDisplayed())
})

When(/^new bank account nickname appears in Bank & Cards screen "(.*)"$/,async (name:string) => {    
    AllureReporter.addTestId('34120');

    
    (await BankCardsPage.lnkSavingAcc).click();

    (await BankCardsPage.btnEditBankName).waitForDisplayed();
    (await BankCardsPage.btnEditBankName).click();

    (await BankCardsPage.txtFldBankNickName).waitForDisplayed();
    (await BankCardsPage.txtFldBankNickName).click();
    (await BankCardsPage.txtFldBankNickName).setValue(name);

    (await CommonsPage.delay(3));

    (await BankCardsPage.btnSaveNickName).waitForDisplayed();
    (await BankCardsPage.btnSaveNickName).click();
    
    (await BankCardsPage.lnkOpenSpace).waitForDisplayed();
    (await BankCardsPage.lnkOpenSpace).click();

    (await expect(CommonsPage.findlabelbytext(name)).toBeDisplayed());
    (await CommonsPage.delay(10));
})

When(/^Verify bank account nickname appears in Cash out via NCB bank screen$/,async () => {    
    AllureReporter.addTestId('34121');
    

    const bankNickName = await (await banksCardsPage.lblBankNickName).getText();

    (await BankCardsPage.lnkSavingAcc).click();
    (await BankCardsPage.btnCashOut).click();

    (await expect(cashInPage.txtAccountName).toHaveText("Transfer to "+bankNickName))
})


When(/^Verify bank account nickname appears in Cash in via NCB bank screen$/,async () => {    
    AllureReporter.addTestId('34122');
    

    const bankNickName = await (await banksCardsPage.lblBankNickName).getText();

    (await BankCardsPage.lnkSavingAcc).click();
    (await BankCardsPage.btnCashIn).click();

    (await expect(cashInPage.txtAccountName).toHaveText("Transfer from "+bankNickName))
})


When(/^Verify if the new bank account nickname appears in Transaction Activity screen$/,async () => {    
    AllureReporter.addTestId('34123');
    

    const bankNickName = await (await banksCardsPage.lblBankNickName).getText();

    (await BankCardsPage.profileBackBtn).click();
    (await BankCardsPage.userProfileBackBtn).waitForDisplayed();
    (await BankCardsPage.userProfileBackBtn).click();

    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to);

    (await dashboardPage.lnkSeeAll).waitForDisplayed();
    (await dashboardPage.lnkSeeAll).click();

    (await CommonsPage.tapbytext('Sent'));

    (await expect(CommonsPage.findlabelbytext(bankNickName)).toBeDisplayed())
    
})


When(/^User updates preffered account$/,async () => {   
    AllureReporter.addTestId('34362');
    (await (BankCardsPage.lnkNonPrefSavingAcc)).waitForDisplayed();
    (await (BankCardsPage.lnkNonPrefSavingAcc)).click();

    (await (BankCardsPage.switchPrefAcc)).waitForDisplayed();
    (await (BankCardsPage.switchPrefAcc)).click();

    (await expect(CommonsPage.findlabelbytext('Preferred account')).toBeDisplayed());
    (await expect(CommonsPage.findLabelThatContainsText('Your account can have multiple accounts but only one preferred account.')).toBeDisplayed());
    (await expect(CommonsPage.findLabelThatContainsText('Would you like to make this account your primary account?')).toBeDisplayed());
    (await expect(CommonsPage.findlabelbytext('Continue')).toBeDisplayed());
    (await expect(CommonsPage.findlabelbytext('Cancel')).toBeDisplayed());

    (await CommonsPage.tapbytext('Continue'));

    (await expect(CommonsPage.findlabelbytext('Preferred account updated')).toBeDisplayed());

})


When(/^User cancels update preffered account$/,async () => {   
    AllureReporter.addTestId('34363');
    (await (BankCardsPage.lnkNonPrefSavingAcc)).waitForDisplayed();
    (await (BankCardsPage.lnkNonPrefSavingAcc)).click();

    (await (BankCardsPage.switchPrefAcc)).waitForDisplayed();
    (await (BankCardsPage.switchPrefAcc)).click();


    (await CommonsPage.tapbytext('Cancel'));

    (await expect(BankCardsPage.btnCashIn).toBePresent());
    (await expect(BankCardsPage.btnCashOut).toBePresent());
    (await expect(BankCardsPage.switchPrefAcc).toBePresent());
    (await expect(BankCardsPage.lnkRemoveAcc).toBePresent());

})


When(/^User can unlink preffered account$/,async () => {   
    AllureReporter.addTestId('34503');
    (await (BankCardsPage.lnkSavingAcc)).waitForDisplayed();
    (await (BankCardsPage.lnkSavingAcc)).click();

    (await BankCardsPage.lblAccName).waitForDisplayed()

    let prefAccountName = (await (await BankCardsPage.lblAccName).getText());

    (await (BankCardsPage.lnkRemoveAcc)).waitForDisplayed();
    (await (BankCardsPage.lnkRemoveAcc)).click();

    (await expect(CommonsPage.findlabelbytext('Remove account')).toBeDisplayed());
    (await (BankCardsPage.btnRemoveAcc)).click();

    (await banksCardsPage.txtFldPIN).waitForDisplayed();
    (await banksCardsPage.txtFldPIN).setValue('040992');
    (await (CommonsPage.btnContinue)).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await expect(CommonsPage.findlabelbytext('Account unlinked')).toBeDisplayed());
    (await expect(CommonsPage.findlabelbytext('Preferred')).toBeDisplayed());
    (await expect(CommonsPage.findlabelbytext(prefAccountName)).not.toBeDisplayed());

})



Then(/^The six approved currencies are displayed$/,async () => {
    AllureReporter.addTestId('36602')
    await expect(CommonsPage.findlabelbytext('JMD')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('USD')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('CAD')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('KYD')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('EUR')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('GBP')).toBeDisplayed()
})