import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import DashboardPage from '../../pages/mobile/dashboard.page';
import InitialPage from '../../pages/mobile/initial.page';
import SignInPage from '../../pages/mobile/signIn.page'
import transactionHistoryPage from '../../pages/mobile/transactionHistory.page';
import CommonsPage from '../../pages/mobile/commons.page';
import AllureReporter from '@wdio/allure-reporter';
import Gestures from '../../commons/gestures';
import cashOutPage from '../../pages/mobile/cashOut.page';
import billPaymentPage from '../../pages/mobile/billPayment.page';
import cashInPage from '../../pages/mobile/cashIn.page';
import CbdcPage from '../../pages/mobile/cbdc.page';

const pages: { [key: string]: Page } = { ["transactionHistory"]: transactionHistoryPage };

Then(/^i should be redirected to the transaction History Page$/, async () => {
    await transactionHistoryPage.validate()
});

Then(/^the transaction amount that contains "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findLabelThatContainsText(text)).toBeDisplayed()

})

Then(/^the transaction amount that contain "(.*)" is not displayed$/, async (text: string) => {
    await expect(CommonsPage.findLabelThatContainsText(text)).not.toBeDisplayed()
})

Then(/^transaction details are visible$/, async()=>{
    AllureReporter.addTestId('8309')
    await expect(transactionHistoryPage.profileImage).toBeDisplayed()
    //await expect(transactionHistoryPage.transItem).toBeDisplayed()
})

When(/^i open a transaction with notes$/, async()=>{
    (await (transactionHistoryPage.iconNotes)).click()
})

Then(/^User is redirected to empty transaction history screen$/, async()=>{
    AllureReporter.addTestId('5918')
    await expect(CommonsPage.findlabelbytext('Activity')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('You have no transactions yet')).toBeDisplayed()
})

Then(/^User is redirected to empty transactions received screen$/, async()=>{
    AllureReporter.addTestId('6518')
    await expect(CommonsPage.findlabelbytext('You have no transactions yet')).toBeDisplayed()
})


Then(/^User is redirected to all transactions screen$/, async()=>{
    AllureReporter.addTestId('5919')

    const screenSize = driver.getWindowRect();

    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }

    await expect(CommonsPage.findLabelThatContainsText('-')).toBeDisplayed()
    Gestures.swipe(from, to)
    await expect(CommonsPage.findLabelThatContainsText('+')).toBeDisplayed()
})

Then(/^User is redirected to sent transactions screen$/, async()=>{
    AllureReporter.addTestId('5950')
    await expect(CommonsPage.findLabelThatContainsText('+')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('-')).toBeDisplayed()
})


Then(/^validate empty received tab$/, async()=>{
    AllureReporter.addTestId('6518')
    await expect(CommonsPage.findLabelThatContainsText('You have no transactions yet')).toBeDisplayed()
})

Then(/^validate empty All tab$/, async()=>{
    AllureReporter.addTestId('5918')
    await expect(CommonsPage.findLabelThatContainsText('You have no transactions yet')).toBeDisplayed()
})


Then(/^User is redirected to received transactions screen$/, async()=>{
    AllureReporter.addTestId('8245')
    await expect(CommonsPage.findLabelThatContainsText('-')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('+')).toBeDisplayed()
})

When(/^User clicks pending item$/, async()=>{
    
    (await transactionHistoryPage.pendingItem).waitForDisplayed();
    (await transactionHistoryPage.pendingItem).click();
})

Then(/^Validate the contents of a pending request modal$/, async()=>{
    AllureReporter.addTestId('8311')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Request')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('REQUESTED BY')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Pending')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate the contents of a declined request modal$/, async()=>{
    AllureReporter.addTestId('8310')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('REQUESTED TO')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Request')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Declined')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate the contents of the report a problem screen$/, async()=>{
    AllureReporter.addTestId('4929')
    await expect(CommonsPage.findLabelThatContainsText('Reach out to us')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Have a Question? Problem? Something not working as you think it should?")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("We tried to make lynk as easy as possible, but if you need to contact us, we’re just one chat away.")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Chat with us")).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText("Email us")).toBeDisplayed()
})

Then(/^Validate the contents of a request modal that has notes$/, async()=>{
    AllureReporter.addTestId('8316')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('REQUESTED TO')).not.toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('REQUESTED BY')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Test Note')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('Requested,')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Respond')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate transaction detail screen when request with notes is accepted$/, async()=>{
    AllureReporter.addTestId('8313')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Sent')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Test Note Again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Send again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate the contents of a transaction activity modal of a cash-in transaction$/, async()=>{
    AllureReporter.addTestId('8319')

    await expect(CommonsPage.findLabelThatContainsText('Savings-NCB')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Status')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash In')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash in again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Requested,')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Respond')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Scroll until NCB Cash in element is displayed$/, async()=>{

    await Gestures.checkIfDisplayedWithSwipeUp(await transactionHistoryPage.cashInTransItem, 5, 0)

})

Then(/^Validate the contents of a transaction activity modal of a cash-out transaction$/, async()=>{
    AllureReporter.addTestId('8320')
    await expect(CommonsPage.findLabelThatContainsText('Savings-NCB')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash Out')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash out again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Requested,')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Respond')).not.toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Scroll until NCB Cash out element is displayed$/, async()=>{

    await Gestures.checkIfDisplayedWithSwipeUp(await transactionHistoryPage.cashInTransItem, 5, 0)

})

Then(/^Scroll until Bill Payment element is displayed$/, async()=>{

    await Gestures.checkIfDisplayedWithSwipeUp(await transactionHistoryPage.billPaymentItem, 5, 0)

})

Then(/^Scroll until Welcome Bonus element is displayed$/, async()=>{

    await Gestures.checkIfDisplayedWithSwipeUp(await transactionHistoryPage.welcomeBonusItem, 5, 0)

})

Then(/^Scroll until Refferal Bonus element is displayed$/, async()=>{

    await Gestures.checkIfDisplayedWithSwipeUp(await transactionHistoryPage.referralBonusItem, 5, 0)

})

Then(/^Validate transaction details screen after card cash in$/, async()=>{
    AllureReporter.addTestId('6518')
    await expect(CommonsPage.findLabelThatContainsText('Cash In')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash in again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Auto')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('**** **** **** 9944')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})


Then(/^Validate transaction details screen for ACH transfers$/, async()=>{
    AllureReporter.addTestId('33538')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Cash Out')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Matthew budram')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Account #404087908')).toBeDisplayed()
    //await expect(CommonsPage.findLabelThatContainsText('Scheduled')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate cash out again via ACH transfer details screen$/, async()=>{
    AllureReporter.addTestId('33539');
    await expect(CommonsPage.findLabelThatContainsText('Transfer to')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Matt NCB')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('404087908')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Transfer processing can take up to 3 business days')).toBeDisplayed();
    await expect(cashOutPage.iptAmount).toBePresent();
    await expect(cashOutPage.achCashoutSwipe).toBePresent();
})

Then(/^Validate transaction details screen for Bill Payment$/, async()=>{
    AllureReporter.addTestId('33545')
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('JPS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Account #1187023820099')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Bill payment')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Pay again')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})


Then(/^Validate user can pay again from Bill payment details screen$/, async()=>{
    AllureReporter.addTestId('33546');
    await expect(CommonsPage.findLabelThatContainsText('JPS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('1187023820099')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Note: All payments are final.')).toBeDisplayed();
    await expect(billPaymentPage.iptAmount).toBePresent();
    await expect(billPaymentPage.confirmationSwipe).toBePresent();
})

Then(/^Validate user can pay again from cash-in via cards details screen$/, async()=>{
    AllureReporter.addTestId('8247');
    await expect(CommonsPage.findLabelThatContainsText('Auto')).toBeDisplayed();
    await expect(cashInPage.iptAmount).toBePresent();
    await expect(cashInPage.swipeText).toBePresent();
})

Then(/^Validate transaction details screen after Mobile Top Up$/, async()=>{
    AllureReporter.addTestId('33549');
    await expect(CommonsPage.findLabelThatContainsText('Sent')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Account #1876')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('GCT')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Sent')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Status')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Total Cost')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Top up again')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed();
})

Then(/^Validate user can do Top again while on MTOP transaction details screen$/, async()=>{
    AllureReporter.addTestId('33550');
    //await expect(CommonsPage.findLabelThatContainsText('+18765619022')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('0')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Submit for review')).toBeDisplayed();
    await expect(billPaymentPage.iptAmount).toBePresent();
})


Then(/^Change Currency to JAM-DEX$/, async()=>{

    (await (transactionHistoryPage.currencySelector)).waitForDisplayed();
    (await transactionHistoryPage.currencySelector).click();

    (await transactionHistoryPage.currencyJamDex).waitForDisplayed();
    (await transactionHistoryPage.currencyJamDex).click();
    
})

Then(/^Open JMD to JAM-DEX transaction$/, async()=>{

    (await (transactionHistoryPage.cbdcExchangeItem)).waitForDisplayed();
    (await transactionHistoryPage.cbdcExchangeItem).click();

    (await transactionHistoryPage.cbdcExchangeItem).waitForDisplayed();
    (await transactionHistoryPage.cbdcExchangeItem).click();
    
})


Then(/^Validate transaction details screen on JMD to JAM-Dex exchange$/, async()=>{
    AllureReporter.addTestId('33950');
    await expect(CommonsPage.findLabelThatContainsText('Lynk to JAM-DEX')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Exchange')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Exchange again')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed();
})

Then(/^Validate transaction details screen on JAM-Dex to JMD exchange$/, async()=>{
    AllureReporter.addTestId('33951');
    await expect(CommonsPage.findLabelThatContainsText('JAM-Dex to Lynk')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Exchange')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Exchange again')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed();
})

Then(/^Verify User can switch currency from Lynk to JAM-DEX$/, async()=>{
    AllureReporter.addTestId('29712');
    await expect(transactionHistoryPage.currencySelector).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Lynk')).toBeDisplayed();

    (await transactionHistoryPage.currencySelector).click();
    (await CommonsPage.tapbytext('JAM-DEX (JMD)'))

    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Lynk')).not.toBeDisplayed()
    
})


Then(/^Verify User can switch currency from JAM-DEX to Lynk$/, async()=>{
    AllureReporter.addTestId('29713');
    await expect(transactionHistoryPage.currencySelector).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed();

    (await transactionHistoryPage.currencySelector).click();
    (await CommonsPage.tapbytext('Lynk (JMD)'))

    await expect(CommonsPage.findlabelbytext('Lynk')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('JAM-DEX')).not.toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Exchange')).not.toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('All')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Sent')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Received')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Requests')).toBeDisplayed()
    
})

Then(/^Verify that instead of the Request tab being displayed the Exchange tab appears$/, async()=>{
    AllureReporter.addTestId('29723');
    await expect(transactionHistoryPage.currencySelector).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed();


    await expect(CommonsPage.findlabelbytext('Lynk')).not.toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Exchange')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('All')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Sent')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Received')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Requests')).not.toBeDisplayed()
})

When(/^User clicks accepted request item$/, async()=>{
    AllureReporter.addTestId('8312');
    (await CommonsPage.tapbytext('+ 35 JMD'))
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Received')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Status')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()

})

Then(/^Validate transaction details screen for Refferal Bonus$/, async()=>{
    AllureReporter.addTestId('34061');
    await expect(CommonsPage.findLabelThatContainsText('Referral Bonus')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('250')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("You just referred a new friend to Lynk! Here's a reward for using our app.")).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Received')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed();
})

Then(/^Validate transaction details screen for Welcome Bonus$/, async()=>{
    AllureReporter.addTestId('34062');
    await expect(CommonsPage.findLabelThatContainsText('Welcome Bonus')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('250')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText("You just referred a new friend to Lynk! Here's a reward for using our app.")).not.toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Received')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Completed')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Date & Time')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Reference number')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed();
})

Then(/^Validate the contents of a transaction activity modal of a merchant payment transaction$/, async()=>{
    AllureReporter.addTestId('27767')
    await expect(CommonsPage.findLabelThatContainsText('Test Merchant')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('TRANSACTION DETAILS')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Type')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Payment')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Report a problem')).toBeDisplayed()
})

Then(/^Validate user can perform Lynk to JAM-DEX exchange again$/, async()=>{

    AllureReporter.addTestId('33955')

    await expect(CommonsPage.findlabelbytext('Exchange')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Lynk')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('Swipe up to submit exchange')).toBeDisplayed();

    await expect((CbdcPage.iptAmount)).toBePresent()
    await expect((CbdcPage.swipeText)).toBePresent()
});

Then(/^Validate user can perform JAM-DEX to Lynk exchange again$/, async()=>{

    AllureReporter.addTestId('33956')

    await expect(CommonsPage.findlabelbytext('Exchange')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('JAM-DEX')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Lynk')).toBeDisplayed();

    await expect(CommonsPage.findlabelbytext('Swipe up to submit exchange')).toBeDisplayed();

    await expect((CbdcPage.iptAmount)).toBePresent()
    await expect((CbdcPage.swipeText)).toBePresent()
});