import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import AllureReporter from '@wdio/allure-reporter';
import moreFeaturesPage from '../../pages/mobile/moreFeatures.page';
import billPaymentPage from '../../pages/mobile/billPayment.page';
import dashboardPage from '../../pages/mobile/dashboard.page';
import signInPage from '../../pages/mobile/signIn.page';
import CommonsPage from '../../pages/mobile/commons.page';

const pages: { [key: string]: Page } = { ["signup"]: billPaymentPage };


When(/^User navigates to bill payment "(.*?)"$/,async (pin:string) => {

    await CommonsPage.delay(3);
    (await dashboardPage.lnkMore).waitForDisplayed();
    (await dashboardPage.lnkMore).click();
    (await moreFeaturesPage.lnkBillPay).waitForDisplayed();
    await CommonsPage.delay(3);
    await expect(moreFeaturesPage.lnkBillPay).toBeDisplayed();
    (await moreFeaturesPage.lnkBillPay).click();
    (await moreFeaturesPage.txtFldPIN).waitForDisplayed();
    (await moreFeaturesPage.txtFldPIN).setValue(pin);
    await CommonsPage.delay(5);
    (await CommonsPage.btnContinue).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();
})

Then(/^Validate user can navigate to bill payment screen$/,async () => {
    AllureReporter.addTestId('22892')
    await expect(CommonsPage.findlabelbytext('Bill payment')).toBeDisplayed()
})

Then(/^Validate content of bill payment screen for first time user$/,async () => {
    AllureReporter.addTestId('22893')

    await expect(CommonsPage.findlabelbytext('What bill do you want to pay?')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Lynk makes paying your bill easy. Just add your payees and start paying bills.')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Pay new bill')).toBeDisplayed()
})

Then(/^Validate Successful bill payment summary screen$/,{timeout: 300 * 1000},async () => {
    await expect(CommonsPage.findlabelbytext('JMD')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Bill paid')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('You’ll see your payment reflected with your biller within 24 hours.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Transaction details')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Service Provider')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Account number')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Pay another bill')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Go to home')).toBeDisplayed();
})



When(/^User adds a bill payee$/,async () => {
    AllureReporter.addTestId('22894');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    (await billPaymentPage.lnkElecBillerType).waitForDisplayed();
    (await billPaymentPage.lnkElecBillerType).click();
    (await billPaymentPage.itemJPSBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBiller).click();
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('1187023820099');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('1187023820099');
    await CommonsPage.delay(3);
    (await billPaymentPage.txtFldBillName).setValue('JPS');
    await CommonsPage.delay(3);

    (await CommonsPage.btnContinue).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();


    await expect(billPaymentPage.iptAmount).toBePresent();
    await expect(billPaymentPage.confirmationSwipe).toBePresent();
    await expect(CommonsPage.findlabelbytext('Note: All payments are final.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('JPS')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('1187023820099')).toBeDisplayed()
})

When(/^Validate User can submit amount for payment$/, {timeout: 300 * 1000}, async () => {
    AllureReporter.addTestId('22900');

    await CommonsPage.delay(3);
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    (await billPaymentPage.iptSearchBiller).waitForDisplayed();
    (await billPaymentPage.iptSearchBiller).setValue('Flow');
    (await billPaymentPage.itemFlowBiller).waitForDisplayed();
    (await billPaymentPage.itemFlowBiller).click();
    
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('50054711');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('50054711');
    await CommonsPage.delay(3);
    (await billPaymentPage.txtFldBillName).setValue('Flow');
    await CommonsPage.delay(3);

    (await CommonsPage.btnContinue).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    (await billPaymentPage.lnkPartialPay).waitForDisplayed();
    (await billPaymentPage.lnkPartialPay).click();

    await expect(billPaymentPage.iptAmount).toBeDisplayed();

    (await billPaymentPage.iptAmount).setValue('1');
    await CommonsPage.delay(2);
    (await billPaymentPage.confirmationSwipe).waitForDisplayed();
    (await billPaymentPage.confirmationSwipe).click();
    await CommonsPage.confirmationSwipe(await billPaymentPage.confirmationSwipe, await billPaymentPage.iptAmount);
    // await CommonsPage.delay(20);

    // (await CommonsPage.findlabelbytext('Pay another bill')).waitForDisplayed();
    // (await CommonsPage.findlabelbytext('Go to home')).waitForDisplayed()
    
    // await expect(CommonsPage.findlabelbytext('Pay another bill')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('Go to home')).toBeDisplayed();
})


When(/^User navigates to choose biller screen$/,async () => {
    AllureReporter.addTestId('22895');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    await CommonsPage.delay(3);

    await expect(CommonsPage.findlabelbytext('Choose biller')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Search by company name')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Categories')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Education')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Electricity')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Finance')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Insurance')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Security')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Telephone')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Water')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Internet/Cable')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Others')).toBeDisplayed()

})

When(/^Verify user is prompted when invalid account number is added$/,async () => {
    AllureReporter.addTestId('22897');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    (await billPaymentPage.lnkElecBillerType).waitForDisplayed();
    (await billPaymentPage.lnkElecBillerType).click();
    (await billPaymentPage.itemJPSBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBiller).click();
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('118702382009-');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('118702382009-');
    await CommonsPage.delay(3);
    (await billPaymentPage.txtFldBillName).setValue('JPS');
    await CommonsPage.delay(3);
    (await CommonsPage.btnContinue).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    await expect(billPaymentPage.iptAmount).not.toBePresent();
    await expect(billPaymentPage.confirmationSwipe).not.toBePresent();
    await expect(CommonsPage.findlabelbytext('Invalid account number.')).toBeDisplayed();
})

When(/^Verify user is prompted when there is an account number mismatch$/,async () => {
    AllureReporter.addTestId('22898');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    (await billPaymentPage.lnkElecBillerType).waitForDisplayed();
    (await billPaymentPage.lnkElecBillerType).click();
    (await billPaymentPage.itemJPSBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBiller).click();
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('1187023820099');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('1187023820098');
    await CommonsPage.delay(3);

    await expect(billPaymentPage.iptAmount).not.toBePresent();
    await expect(billPaymentPage.confirmationSwipe).not.toBePresent();
    await expect(CommonsPage.findlabelbytext('Your account numbers don’t match.')).toBeDisplayed();
})


When(/^Verify modal when new Payee information icon is clicked$/,async () => {
    AllureReporter.addTestId('22899');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    (await billPaymentPage.lnkElecBillerType).waitForDisplayed();
    (await billPaymentPage.lnkElecBillerType).click();
    (await billPaymentPage.itemJPSBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBiller).click();
    await CommonsPage.delay(5);

    await CommonsPage.tapByCoordinates(863,798)

    await CommonsPage.delay(2);
    await expect(CommonsPage.findlabelbytext('Where can I find my account number?')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('The account number should be on the bill, statement, or invoice you receive from the company you want to pay.')).toBeDisplayed();
})

When(/^Verify user can submit a bill payment to an existing payee/,{timeout: 300 * 1000},async() => {
    AllureReporter.addTestId('22911');

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    (await billPaymentPage.iptAmount).setValue('1');
    await CommonsPage.delay(2);
    (await billPaymentPage.confirmationSwipe).waitForDisplayed();
    (await billPaymentPage.confirmationSwipe).click();
    await CommonsPage.confirmationSwipe(await billPaymentPage.confirmationSwipe, await billPaymentPage.iptAmount);
    //await CommonsPage.delay(30);
    
})

When(/^Verify User is unable to pay more than available lynk balance$/, async()=>{
    AllureReporter.addTestId('22901');

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    //await CommonsPage.tapbytext('JPS');
    (await billPaymentPage.iptAmount).click();
    (await billPaymentPage.iptAmount).setValue('70000');

    await expect(CommonsPage.findlabelbytext('Insufficient funds in Lynk')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('CASH IN')).toBeDisplayed();

    await driver.hideKeyboard()

    await expect(billPaymentPage.swipeElement).toBePresent();
})

When(/^Validate user receives cash in option when there is insufficient funds for a bill payment$/, async()=>{
    AllureReporter.addTestId('29952');

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    //await CommonsPage.tapbytext('JPS');
    (await billPaymentPage.iptAmount).click();
    (await billPaymentPage.iptAmount).setValue('70000');

    await expect(CommonsPage.findlabelbytext('Insufficient funds in Lynk')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('CASH IN')).toBeDisplayed();

    await driver.hideKeyboard()

    await expect(billPaymentPage.swipeElement).toBePresent();
})


When(/^Validate user is able navigate to home screen after bill payment$/, async()=>{
    AllureReporter.addTestId('22905');

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    //await CommonsPage.tapbytext('JPS');
    (await billPaymentPage.iptAmount).setValue('1');

    await CommonsPage.delay(2);
    (await billPaymentPage.confirmationSwipe).waitForDisplayed();
    (await billPaymentPage.confirmationSwipe).click();
    await CommonsPage.confirmationSwipe(await billPaymentPage.confirmationSwipe, await billPaymentPage.iptAmount);
    await CommonsPage.delay(10);    
    //(await billPaymentPage.btnGoToHome).click();
    await CommonsPage.tapbytext('Go to home');
    await expect(dashboardPage.homeScreen).toBeDisplayed();
})

When(/^Validate user is able to pay another bill after bill payment$/, async()=>{
    AllureReporter.addTestId('22906');

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    //await CommonsPage.tapbytext('JPS');
    (await billPaymentPage.iptAmount).setValue('1');

    await CommonsPage.delay(2);
    (await billPaymentPage.confirmationSwipe).waitForDisplayed();
    (await billPaymentPage.confirmationSwipe).click();
    await CommonsPage.confirmationSwipe(await billPaymentPage.confirmationSwipe, await billPaymentPage.iptAmount);
    await CommonsPage.delay(10);    
    //(await billPaymentPage.btnPayAnother).click();
    await CommonsPage.tapbytext('Pay another bill');
    await expect(billPaymentPage.lnkBiller).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Bill payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Pay new bill')).toBeDisplayed();
})


When(/^Validate user can search for biller$/,async () => {
    AllureReporter.addTestId('22907');
    await CommonsPage.delay(3);
    //(await CommonsPage.tapbytext('Pay new bill'));
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    await CommonsPage.delay(3);

    (await billPaymentPage.iptSearchBiller).waitForDisplayed();
    (await billPaymentPage.iptSearchBiller).click();
    (await billPaymentPage.iptSearchBiller).setValue('Jam')

    await expect(CommonsPage.findlabelbytext('Jamaica Public Service Ltd.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Jamaica Public Service New Customer Acc (JPS)')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Jamaica National Small Business Loans')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Choose biller')).toBeDisplayed();

    await driver.hideKeyboard();
    await CommonsPage.delay(3);

    //(await billPaymentPage.itemJPSBiller).waitForDisplayed();
    //(await billPaymentPage.itemJPSBiller).click();
   
    await CommonsPage.tapbytext('Jamaica Public Service Ltd.');
    await CommonsPage.tapbytext('Jamaica Public Service Ltd.');

    //await expect(CommonsPage.findlabelbytext('Jamaica Public Service Ltd.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('New payee')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Account number')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Verify account number')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('Bill nickname')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Save payee for future payments')).toBeDisplayed();
})


When(/^Validate user can edit biller$/,async () => {
    AllureReporter.addTestId('22908');
    
    (await CommonsPage.delay(7));

    (await billPaymentPage.iptSearchPayee).waitForDisplayed();
    await expect(billPaymentPage.iptSearchPayee).toBeDisplayed();
    (await billPaymentPage.iptSearchPayee).click();

    await CommonsPage.tapEditBtn();

    await expect(CommonsPage.findlabelbytext('Payees')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('1187023820099')).toBeDisplayed();

    (await CommonsPage.delay(5));

    (await billPaymentPage.lnkPayee).waitForDisplayed();
    await expect(billPaymentPage.lnkPayee).toBeDisplayed();
    (await billPaymentPage.lnkPayee).click();
    (await billPaymentPage.lnkPayee).click();

    await expect(CommonsPage.findlabelbytext('Edit payee')).toBeDisplayed();
    await expect(billPaymentPage.lnkPayee).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('1187023820099')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('Save changes')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Delete payee')).toBeDisplayed();

    (await billPaymentPage.editPayeeAccNum).waitForDisplayed();
    await expect(billPaymentPage.editPayeeAccNum).not.toBeEnabled();
    (await billPaymentPage.editPayeeNickName).waitForDisplayed();
    await expect(billPaymentPage.editPayeeNickName).toBeEnabled();

    (await billPaymentPage.editPayeeNickName).setValue('JPS Edit');
    //(await billPaymentPage.btnSaveChanges).click();
    (await billPaymentPage.btnSaveChanges).waitForDisplayed();
    (await billPaymentPage.btnSaveChanges).click();


    await expect(CommonsPage.findlabelbytext('Changes saved')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Payees')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('JPS Edit')).toBeDisplayed();

})

When(/^Validate user can delete biller$/,async () => {
    AllureReporter.addTestId('22909');
    
    (await CommonsPage.delay(2));

    // (await billPaymentPage.btnEditBiller).waitForDisplayed();
    // await expect(billPaymentPage.btnEditBiller).toBeDisplayed();
    // (await billPaymentPage.btnEditBiller).click()

    await CommonsPage.tapEditBtn();

    await expect(CommonsPage.findlabelbytext('Payees')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('1187023820099')).toBeDisplayed();

    (await CommonsPage.delay(2));

    (await billPaymentPage.lnkPayee).waitForDisplayed();
    (await billPaymentPage.lnkPayee).click();
    (await billPaymentPage.lnkPayee).click();
    //await CommonsPage.tapbytext('JPS Edit');


    (await billPaymentPage.btnDeletePayee).waitForDisplayed();
    await expect(billPaymentPage.btnDeletePayee).toBeDisplayed();
    (await billPaymentPage.btnDeletePayee).click();
    //await CommonsPage.tapbytext('Delete payee');


    await expect(CommonsPage.findlabelbytext('Remove payee')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Are you sure you want to remove this payee?')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Yes, remove')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Cancel')).toBeDisplayed();

    (await billPaymentPage.btnConfirmDeletePayee).waitForDisplayed();
    (await billPaymentPage.btnConfirmDeletePayee).click();
    //await CommonsPage.tapbytext('Yes, remove');

    await expect(CommonsPage.findlabelbytext('Payee removed')).toBeDisplayed();
})


When(/^Validate user can cancel delete request$/,async () => {
    AllureReporter.addTestId('22910');

    await CommonsPage.delay(3);
    
    // (await billPaymentPage.btnEditBiller).waitForDisplayed();
    // await expect(billPaymentPage.btnEditBiller).toBeDisplayed();
    // (await billPaymentPage.btnEditBiller).click()

    await CommonsPage.tapEditBtn();

    await expect(CommonsPage.findlabelbytext('Payees')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('1187023820099')).toBeDisplayed();

    (await billPaymentPage.lnkPayee).waitForDisplayed();
    await expect(billPaymentPage.lnkPayee).toBeDisplayed();
    (await billPaymentPage.lnkPayee).click();
    (await billPaymentPage.lnkPayee).click();

    //await CommonsPage.tapbytext('JPS Edit');

    (await billPaymentPage.btnDeletePayee).waitForDisplayed();
    await expect(billPaymentPage.btnDeletePayee).toBeDisplayed();
    (await billPaymentPage.btnDeletePayee).click();
    //await CommonsPage.tapbytext('Delete payee');

    await expect(CommonsPage.findlabelbytext('Edit payee')).not.toBeDisplayed();
    //await CommonsPage.tapbytext('Cancel');
    (await billPaymentPage.btnCancelDeletePayee).waitForDisplayed();
    (await billPaymentPage.btnCancelDeletePayee).click();
    await expect(CommonsPage.findlabelbytext('Edit payee')).toBeDisplayed();
    await expect(billPaymentPage.editPayeeAccNum).toBeDisplayed();
})


When(/^Validate user can search for a payee$/,async () => {
    AllureReporter.addTestId('22913');
    
    (await billPaymentPage.iptSearchPayee).waitForDisplayed();
    (await billPaymentPage.iptSearchPayee).setValue('R')
    await expect(CommonsPage.findlabelbytext("We couldn't find any Bill Payee matching that search")).toBeDisplayed();


    (await billPaymentPage.iptSearchPayee).clearValue();

    (await billPaymentPage.iptSearchPayee).setValue('J')
    await expect(CommonsPage.findLabelThatContainsText("JPS")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("1187023820099")).toBeDisplayed();
})


When(/^User adds a bill payee that already exists$/,async () => {
    AllureReporter.addTestId('26481');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    (await billPaymentPage.btnPayNewBill).click();
    //(await CommonsPage.tapbytext('Pay new bill'));
    (await billPaymentPage.lnkElecBillerType).waitForDisplayed();
    (await billPaymentPage.lnkElecBillerType).click();
    //(await CommonsPage.tapbytext('Electricity'));
    (await billPaymentPage.itemJPSBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBiller).click();
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('1187023820099');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('1187023820099');
    await CommonsPage.delay(3);
    (await billPaymentPage.txtFldBillName).setValue('JPS');
    await CommonsPage.delay(3);
    //(await CommonsPage.tapbytext('Continue'));
    (await CommonsPage.btnContinue).waitForDisplayed();
    (await CommonsPage.btnContinue).click();

    await expect(CommonsPage.findlabelbytext('You’ve already added that payee. Enter a different account number.')).toBeDisplayed();
})


When(/^Verify user is able to submit a bill payment amount with a low KYC user "(.*)"/,{timeout: 300 * 1000},async(amount:string) => {

    (await billPaymentPage.lnkBiller).waitForDisplayed();
    (await billPaymentPage.lnkBiller).click();
    //(await CommonsPage.tapbytext('JPS'));
    (await billPaymentPage.iptAmount).setValue(amount);
    await CommonsPage.delay(2);
    (await billPaymentPage.confirmationSwipe).waitForDisplayed();
    (await billPaymentPage.confirmationSwipe).click();
    await CommonsPage.confirmationSwipe(await billPaymentPage.confirmationSwipe, await billPaymentPage.iptAmount);
})

Then(/^Low KYC Daily Limit modal is displayed$/,async () => {
    AllureReporter.addTestId('45075')
    await expect(CommonsPage.findlabelbytext('Daily Limit Exceeded')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText("You've exceeded the J$40,000 daily limit for your account.")).toBeDisplayed()
})


Then(/^Low KYC User is redirected to bill payment Summary screen$/,{timeout: 300 * 1000},async () => {
    AllureReporter.addTestId('45076');

    await CommonsPage.delay(30);
    (await CommonsPage.findlabelbytext('Pay another bill')).waitForDisplayed();
    (await CommonsPage.findlabelbytext('Go to home')).waitForDisplayed();
    // (await CommonsPage.findlabelbytext('Bill paid')).waitForDisplayed();
    // (await CommonsPage.findlabelbytext('You’ll see your payment reflected with your biller within 24 hours.')).waitForDisplayed();
    // (await CommonsPage.findlabelbytext('Transaction Details')).waitForDisplayed();
    // (await CommonsPage.findlabelbytext('Account number')).waitForDisplayed();
    await expect(CommonsPage.findlabelbytext('Pay another bill')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Go to home')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('Bill Paid')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('You’ll see your payment reflected with your biller within 24 hours.')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('Transaction Details')).toBeDisplayed();
    // await expect(CommonsPage.findlabelbytext('Account number')).toBeDisplayed();

})

When(/^User adds a bill payee that has balance available$/,async () => {
    AllureReporter.addTestId('22912');
    (await billPaymentPage.btnPayNewBill).waitForDisplayed();
    await expect(billPaymentPage.btnPayNewBill).toBeDisplayed();
    (await billPaymentPage.btnPayNewBill).click();

    (await billPaymentPage.iptSearchBiller).waitForDisplayed();
    (await billPaymentPage.iptSearchBiller).setValue('Jam');


    (await billPaymentPage.itemJPSBalanceBiller).waitForDisplayed();
    (await billPaymentPage.itemJPSBalanceBiller).click();
    
    (await billPaymentPage.txtFldAccNum).waitForDisplayed();
    (await billPaymentPage.txtFldAccNum).setValue('1168243820616');
    await CommonsPage.delay(5);
    (await billPaymentPage.txtFldVerifyAccNum).setValue('1168243820616');
    await CommonsPage.delay(3);
    (await billPaymentPage.txtFldBillName).setValue('JPS Test');
    await CommonsPage.delay(3);

    (await CommonsPage.btnContinue).waitForEnabled();
    await expect(CommonsPage.btnContinue).toBeEnabled();
    (await CommonsPage.btnContinue).click();

    await expect(CommonsPage.findlabelbytext('Choose payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Full payment')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Your total balance is')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Partial payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('You can select the amount on the next step')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('*This balance is the total of all current and past due amounts')).toBeDisplayed();

    const billBalance = (await (await billPaymentPage.txtBalanceAmt).getText()).replace(/[^\d.,-]/g, '');

    (await billPaymentPage.lnkPartialPay).waitForDisplayed();
    (await billPaymentPage.lnkPartialPay).click();

    (await billPaymentPage.iptAmount).waitForDisplayed();
    await expect(CommonsPage.findLabelThatContainsText(billBalance)).toBeDisplayed();
})


When(/^Verify user can make a full bill payment/,{timeout: 300 * 1000},async() => {
    AllureReporter.addTestId('39705');

    (await billPaymentPage.lnkFlowBalancePayee).waitForDisplayed();
    (await billPaymentPage.lnkFlowBalancePayee).click();
    //(await CommonsPage.tapbytext('JPS'));

    await expect(CommonsPage.findlabelbytext('Choose payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Full payment')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Your total balance is')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Partial payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('You can select the amount on the next step')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('*This balance is the total of all current and past due amounts')).toBeDisplayed();

    const billBalance = (await (await billPaymentPage.txtBalanceAmt).getText()).replace(/[^\d.,-]/g, '');

    //const billBalanceDollars = billBalance.slice(0, -3);

    //const billBalanceCents = billBalance.substring(billBalance.length - 2);

    (await billPaymentPage.lnkFullPay).waitForDisplayed();
    (await billPaymentPage.lnkFullPay).click();

    await expect(billPaymentPage.iptAmount).toHaveText(billBalance);
    //await expect(billPaymentPage.iptAmount).toHaveText(billBalanceDollars);
    //await expect(billPaymentPage.iptAmountCents).toHaveText(billBalanceCents);
  
})

When(/^Verify user can make a partial bill payment/,{timeout: 300 * 1000},async() => {
    AllureReporter.addTestId('39706');

    (await billPaymentPage.lnkFlowBalancePayee).waitForDisplayed();
    (await billPaymentPage.lnkFlowBalancePayee).click();
    //(await CommonsPage.tapbytext('JPS'));

    await expect(CommonsPage.findlabelbytext('Choose payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Full payment')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Your total balance is')).toBeDisplayed()

    await expect(CommonsPage.findlabelbytext('Partial payment')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('You can select the amount on the next step')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('*This balance is the total of all current and past due amounts')).toBeDisplayed();

    const billBalance = (await (await billPaymentPage.txtBalanceAmt).getText()).replace(/[^\d.,-]/g, '');

    (await billPaymentPage.lnkPartialPay).waitForDisplayed();
    (await billPaymentPage.lnkPartialPay).click();

    await expect(billPaymentPage.iptAmount).toHaveText('0');
  
})


When(/^Verify that bill balance unavailable text is visible/,{timeout: 300 * 1000},async() => {
    AllureReporter.addTestId('39759');

    (await billPaymentPage.lnkPayee).waitForDisplayed();
    (await billPaymentPage.lnkPayee).click();
    //(await CommonsPage.tapbytext('JPS'));


    (await billPaymentPage.iptAmount).waitForDisplayed();

    await expect(CommonsPage.findlabelbytext('Bill balance unavailable')).toBeDisplayed();
})

When(/^Verify that user can view unavailable help bubble/,{timeout: 300 * 1000},async() => {
    AllureReporter.addTestId('39760');

    (await billPaymentPage.lnkPayee).waitForDisplayed();
    (await billPaymentPage.lnkPayee).click();
    //(await CommonsPage.tapbytext('JPS'));


    (await billPaymentPage.balanceUnavailableIcon).waitForDisplayed();
    (await billPaymentPage.balanceUnavailableIcon).click();

    await expect(CommonsPage.findlabelbytext('We can’t display the balance for this biller.')).toBeDisplayed();
})