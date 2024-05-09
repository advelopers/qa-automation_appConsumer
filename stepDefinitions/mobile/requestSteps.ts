import { Given, Then, When } from '@cucumber/cucumber';
import AllureReporter from '@wdio/allure-reporter';
import Gestures from '../../commons/gestures';
import CommonsPage from '../../pages/mobile/commons.page';
import RequestPage from '../../pages/mobile/request.page';
import AllureReporpt from '@wdio/allure-reporter'


When(/^i search for and select user "(.*?)"$/, async(user:string)=>{
    
    await (RequestPage.searchUser(user));
    
    await (CommonsPage.tapbytext("@"+user))

    //await driver.acceptAlert();

})

Then (/^i search for user "(.*?)" to make a request$/, async (user: string)=>{
    await (RequestPage.searchUser(user));
})

Then(/^i enter the amount "(.*)" to make a request$/, async (amount: string) => {
    //await (CommonsPage.usenumpad(await RequestPage.iptAmount, amount));
    await expect(RequestPage.iptAmount).toBePresent();
    (await (RequestPage.iptAmount)).setValue(amount)
});

When(/^I swipe up to confirm$/, async()=>{
    AllureReporpt.addTestId('6658')
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

    //Gestures.swipeElement(await RequestPage.confirmationSlider, from, to);
    //(await RequestPage.confirmationSlider).click();

    await expect((RequestPage.swipeText)).not.toBePresent();

    await CommonsPage.confirmationSwipe(await RequestPage.confirmationSlider, await RequestPage.iptAmount)
    
    //await expect(CommonsPage.findlabelbytext('Request successful!')).toBeDisplayed()
})

When(/^user swipe to confirm$/, async()=>{
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

    await expect((RequestPage.swipeText)).not.toBePresent();

    await CommonsPage.confirmationSwipe(await RequestPage.confirmationSlider, await RequestPage.iptAmount)
    
})


Then(/^Request was successful is displayed$/,async () => {
    //AllureReporpt.addTestId('6658')
    await expect(CommonsPage.findlabelbytext('Request successful!')).toBeDisplayed()
})

Then(/^Request cannot be completed$/,async () => {
    AllureReporpt.addTestId('6664')
    //await expect(CommonsPage.findlabelbytext('Complete to send')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Swipe up to ask')).toBeDisplayed()
    await expect(RequestPage.swipeText).toBePresent() //For some reason whenever I input a value to request in the field, the element changes, so if I don't input a value in the field right now, the element will not change, therefore I can use it as an assertion for test 6664
})

Then(/^User is redirected to the requests screen$/,async () => {
    AllureReporter.addTestId('19139')
    await expect(CommonsPage.findlabelbytext('Swipe up to ask')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Send')).toBeDisplayed()
    //await expect(CommonsPage.findlabelbytext('Search by Lynk.iD or display name')).toBeDisplayed()
    await expect(RequestPage.iptSearch).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('JMD')).toBeDisplayed()
    await expect(CommonsPage.findlabelbytext('Add a note (optional)')).toBeDisplayed()
    await expect(RequestPage.lnkQR).toBePresent();
})

Then(/^Verify duplicate recent transfer$/,async () => {
    AllureReporpt.addTestId('7223')
    await expect(CommonsPage.findLabelThatContainsText('Something went wrong')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Duplicated recent transfer. ')).toBeDisplayed();
})
