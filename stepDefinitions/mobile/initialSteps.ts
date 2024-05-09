import { Given, Then, When } from '@cucumber/cucumber';
import InitialPage from '../../pages/mobile/initial.page'
import Page from '../../pages/mobile/page';
import CommonsPage from '../../pages/mobile/commons.page';
import AllureReporter from '@wdio/allure-reporter'

const pages: { [key: string]: Page } = { ["initial"]: InitialPage };

Given(/^i am on the initial view$/, async () => {
    await InitialPage.validate();
});

When(/^i tap the Sign Up button$/, async () => {
    await InitialPage.SignUp();
});

When(/^i tap the sign in button$/, async () => {
    await InitialPage.SignIn();
});

Then(/^the first slide is displayed$/, async () => {
    AllureReporter.addTestId('28848')
    //expect(await InitialPage.sldFirst).toExist();

});

Then(/^the second slide is displayed$/, async () => {
    //expect(await InitialPage.sldSecond).toExist();
});

Then(/^the third slide is displayed$/, async () => {
    //expect(await InitialPage.sldThird).toExist();
});


Then(/^the Carousel is displayed$/, async () => {
    AllureReporter.addTestId('5790')
    expect(await InitialPage.carousel).toExist();
    await expect(CommonsPage.findlabelbytext('Secure your money')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Your money is in safe hands — yours. We’ve made going cashfree easier for you.')).toBeDisplayed()
    await CommonsPage.delay(4)
    await expect(CommonsPage.findlabelbytext('Scan to pay')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Handle payments with ease when you scan QR codes with your phone.')).toBeDisplayed()
    await CommonsPage.delay(4)
    await expect(CommonsPage.findlabelbytext('Pay for anything, anywhere')).toBeDisplayed()
    await expect(CommonsPage.findLabelThatContainsText('Send and recieve money instantly - all day every day.')).toBeDisplayed()
});