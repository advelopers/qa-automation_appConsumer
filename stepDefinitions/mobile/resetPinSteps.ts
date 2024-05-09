import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import CommonsPage from '../../pages/mobile/commons.page';
import signInPage from '../../pages/mobile/signIn.page';
import ResetPinPage from '../../pages/mobile/resetPin.page';


const pages: { [key: string]: Page } = { ["resetPIN"]: ResetPinPage };

When(/^I enter information on the Forgot PIN page "(.*?)"$/,async (phoneNumber:string) => {
    (await ResetPinPage.fldPhoneNumber).setValue(phoneNumber);
    (await ResetPinPage.btnStartVerification).click()
}) 