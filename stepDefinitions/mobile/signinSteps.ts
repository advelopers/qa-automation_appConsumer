import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import InitialPage from '../../pages/mobile/initial.page';
import SignInPage from '../../pages/mobile/signIn.page'
import DashboardPage from '../../pages/mobile/dashboard.page';
import signInPage from '../../pages/mobile/signIn.page';
import CommonsPage from '../../pages/mobile/commons.page';
import AllureReporter from '@wdio/allure-reporter';

const pages: { [key: string]: Page } = { ["sigin"]: SignInPage };

Given(/^i am on the sign in view$/, async (page: string) => {
    // await BottomPage.validate();
    await SignInPage.validate();
});

Given(/^i sign in with phone "(.*?)" and pin "(.*?)"$/, async (phone: string, pin: string) => {

    (await InitialPage.btnLogin).waitForDisplayed();
    (await InitialPage.btnLogin).click();
    (await SignInPage.iptPhone).waitForDisplayed();
    (await SignInPage.iptPhone).setValue(phone);
    //(await SignInPage.iptPin).waitForDisplayed();
    (await SignInPage.iptPin).setValue(pin);
    (await SignInPage.btnSignIn).waitForEnabled();
    await expect(SignInPage.btnSignIn).toBeEnabled();
    (await SignInPage.btnSignIn).click();

});

When(/^I click the Forgot PIN link$/,async () => {
    AllureReporter.addTestId('5993');
    (await signInPage.btnForgotPin).click()
    //(await DashboardPage.btnskipTip).click();
});

Then(/^User is redirected to sign-in page$/,async () => {
    AllureReporter.addTestId('5922')
    await driver.hideKeyboard()
    await expect(CommonsPage.findlabelbytext('Sign In')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('+1 876')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('6-digit PIN')).toBeDisplayed();
    await expect(SignInPage.btnSignIn).toBePresent();
    await expect(CommonsPage.findlabelbytext("Don't have an account?")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("Sign Up")).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext("ABM Locator")).toBeDisplayed();
    //await expect(SignInPage.btnSignIn).toHaveText('Sign In');
})

// Then(/^The user is successfully signed in and redirected to the dashboard$/,async () => {
//     AllureReporter.addTestId('5920')
//     await expect(CommonsPage.findlabelbytext('User does not exist')).toBeDisplayed();
// })

Then(/^User is unable to sign in with invalid PIN$/,async () => {
    AllureReporter.addTestId('5921')
    await expect(CommonsPage.findlabelbytext('Your phone number or PIN is incorrect.')).toBeDisplayed();
})

When(/^Verify a user is blocked after entering PIN incorrectly 3 times phone "(.*?)" and PIN "(.*?)"$/,async (phone:string, pin:string) => {
    AllureReporter.addTestId('6458')

    await InitialPage.SignIn();
    await SignInPage.login(phone,pin);

    //await expect(CommonsPage.findlabelbytext('Your account has been blocked after multiple consecutive login attempts. We’ve sent you an email with instructions on how to unblock it.')).toBeDisplayed();
})