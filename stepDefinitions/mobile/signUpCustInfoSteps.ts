import { Given, Then, When } from '@cucumber/cucumber';
import SignUpCustInfoPage from '../../pages/mobile/signUpCustInfo.page'
import Page from '../../pages/mobile/page';
import signUpCustInfoPage from '../../pages/mobile/signUpCustInfo.page';

const pages: { [key: string]: Page } = { ["signup"]: SignUpCustInfoPage };

Given(/^The User is Redirected to the page titled "A little About you.."$/, async()=>{
    await signUpCustInfoPage.validate();
})

Given(/^The User is Redirected to the personal info screen$/, async()=>{
    await signUpCustInfoPage.validate();
})

When(/^The user types symbols in the name fields like "(.*?)" and "(.*?)"$/, async(firstName:string, lastName:string)=>{
    await signUpCustInfoPage.enterName(firstName, lastName);
})

When (/^The user clicks the continue button$/, async()=>{
    await(await (signUpCustInfoPage.btnContinue)).click()
})

When (/^The User enters email address like "(.*?)"$/,async (emailAddress:string) => {
    await(await (signUpCustInfoPage.txtFldEmail)).clearValue
    await(await (signUpCustInfoPage.txtFldEmail)).setValue(emailAddress)
})

When (/^The User re-enter email address like "(.*?)" to validate$/,async (emailAddress:string) => {
    await(await (signUpCustInfoPage.txtFldVerifyEmail)).clearValue
    await(await (signUpCustInfoPage.txtFldVerifyEmail)).setValue(emailAddress)
})