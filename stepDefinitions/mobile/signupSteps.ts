import { Given, Then, When } from '@cucumber/cucumber';
import SignUpPage from '../../pages/mobile/signUp.page'
import Page from '../../pages/mobile/page';
import CommonsPage from '../../pages/mobile/commons.page';
import SignUpOtpPage from '../../pages/mobile/signUpOtp.page';
import AllureReporter from '@wdio/allure-reporter';

const pages: { [key: string]: Page } = { ["signup"]: SignUpPage };

Given(/^i am redirected to the What’s your number screen$/, async () => {
    await SignUpPage.validate();
});

When(/^the user fill the phone number input with phone number like "(.*?)"$/, async (phone: string) => {
    await (await SignUpPage.iptPhone).setValue(phone);
});

When(/^the user fill the PIN input field with PIN like "(.*?)"$/, async (pin: string) => {
    await (await SignUpPage.iptPin).setValue(pin);
    await (await SignUpPage.lblSignUp).click()
    await (await SignUpPage.txtFldPIN).click()
    await (await SignUpPage.lblSignUp).click()
});

When(/^i sign up with phone "(.*?)" and pin "(.*?)"$/, async ( phone: string, pin: string) => {
    await SignUpPage.signup(phone, pin);
});

When (/^The user enters an invalid PIN like "(.*?)"$/,async (pin:string) => {
    AllureReporter.addTestId('5847')
    await (await SignUpPage.iptPin).setValue(pin);
    await (await SignUpPage.lblSignUp).click()
    await (await SignUpPage.txtFldPIN).click()
    await (await SignUpPage.lblSignUp).click()
})

When (/^The user enters a phone number like "(.*?)"$/,async (phone:string) => {
    //AllureReporter.addTestId('5845')
    await (await SignUpPage.iptPhone).setValue(phone);
})

When (/^The user enters an invalid phone number like "(.*?)"$/,async (phone:string) => {
    AllureReporter.addTestId('38025')
    await (await SignUpPage.iptPhone).setValue(phone);
    //await (await SignUpPage.lblSignUp).click()
    //await (await SignUpPage.iptPhone).click()
    //await (await SignUpPage.txtFldPIN).click()
    //await (await SignUpPage.lblSignUp).click()
})


Then(/^User redirected to sign up screen$/,async () => {
    AllureReporter.addTestId('5835')
    await expect(CommonsPage.findlabelbytext('Sign up')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Your phone is all you need to use Lynk. Start setting up your account.')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Secure your account with a 6-Digit PIN and make logging in easier with fingerprint scanning.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('+1 876')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Create 6-digit PIN')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Slide to login with your fingerprint')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('By submitting you are agreeing to our Terms & Conditions')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Verify your number')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Already have an account?')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Sign In')).toBeDisplayed();
})

Then(/^The user is redirected to the sign up OTP screen$/,async () => {
    AllureReporter.addTestId('38023')
    await SignUpOtpPage.validate();
})

Then(/^The verify number button is disabled$/,async () => {
    await expect(SignUpPage.btnVerifyNumber).not.toBeEnabled()
})

Then(/^The phone number number already exists modal is displayed$/,async () => {
    AllureReporter.addTestId('5888')
    await expect(CommonsPage.findlabelbytext('Phone registered')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('This phone number is already taken. Please, sign in or contact our customer support to help you.')).toBeDisplayed();
})

Then(/^Verify phone number validation error text$/,async () => {
    AllureReporter.addTestId('38027')
    await expect(CommonsPage.findLabelThatContainsText('Make sure the phone number is correct.')).toBeDisplayed();
})

Then(/^The user is taken back to the Sign Up Screen$/,async () => {
    AllureReporter.addTestId('5881')
    //await expect(SignUpPage.btnBackBtn).toBeDisplayed();
    await expect(SignUpPage.lblSignUp).toBeDisplayed();
    await expect(SignUpPage.drpFlagArrow).toBeDisplayed();
    //await expect(SignUpPage.btnVerifyNumber).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Verify your number')).toBeDisplayed();
})