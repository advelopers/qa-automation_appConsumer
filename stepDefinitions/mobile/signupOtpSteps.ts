import { Given, Then, When } from '@cucumber/cucumber';
import SignUpOtpPage from '../../pages/mobile/signUpOtp.page';
import commonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import AllureReporter from '@wdio/allure-reporter';

const pages: { [key: string]: Page } = { ["signup"]: SignUpOtpPage };


When(/^the user fill the OTP input with code received by SMS from phone number "(.*?)"$/, async (phone_num:string) => {
    AllureReporter.addTestId('5860')
    await commonsPage.delay(5);
    const code = await SignUpOtpPage.getSmsCode(phone_num);
    //(await SignUpOtpPage.iptSms).setValue(code);
});

Given(/^the user is redirected to the OTP verify your number screen$/, async () => {
    await SignUpOtpPage.validate();
});

When(/^the user type "(.*?)" in the sms input code$/, async (otp: string) => {
    AllureReporter.addTestId('5861')

    await (SignUpOtpPage.inputOTP)(otp);
});

Given(/^the phone number is formated like "(.*?)"$/, async (phone: string) => {
    //expect((await SignUpOtpPage.lblPhoneNumberFormat).getText).toHaveText(phone);
});

Then(/^the button Resend Code is displayed but disabled$/, async () => {
    await expect(SignUpOtpPage.lblButtonModal).toBeDisplayed()
    await expect(SignUpOtpPage.lblButtonModal).toHaveText("Resend Code")
    await expect(SignUpOtpPage.lblButtonModal).not.toBeClickable()
});

Then(/^the button Resend Code is displayed$/, async () => {
    AllureReporter.addTestId('5875')

    await expect(await SignUpOtpPage.lblButtonModal).toBeDisplayed();
    await expect(await SignUpOtpPage.lblButtonModal).toHaveTextContaining("Resend in");
    //await expect(await SignUpOtpPage.lblButtonModal).toBeClickable();
});


Then(/^Sign up OTP screen validation$/, async () => {
    //AllureReporter.addTestId('5875')
    await expect(commonsPage.findlabelbytext('Verify your number')).toBeDisplayed()
    await expect(commonsPage.findLabelThatContainsText('We just sent you a text message with a verification code to confirm your phone number.')).toBeDisplayed()
    await expect(commonsPage.findLabelThatContainsText('Once you receive it, copy the code and enter it below.')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Text message sent to')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Send to different number')).toBeDisplayed()
    await expect(commonsPage.findlabelbytext('Resend code')).toBeDisplayed()
});
