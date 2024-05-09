import { Given, Then, When } from '@cucumber/cucumber';
import VerifyIdentityPage from '../../pages/mobile/verifyIdentity.page';
import CommonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import AllureReporter from '@wdio/allure-reporter';

Given(/^The user is redirected to the Verify Identity Page$/,async () => {
    await VerifyIdentityPage.validate();
})


Then(/^Validate Contents of the Verify your Identity Page$/,async () => {
    AllureReporter.addTestId('5890');
    await expect(CommonsPage.findlabelbytext('To verify your identity and ensure nobody is trying to impersonate you, you’ll be asked to scan your ID and follow instructions to record a short video.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Don’t forget to give us permission to access your camera and microphone when asked.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Can’t start now?')).toBeDisplayed();
   
})