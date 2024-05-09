import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import NewDevicePage from '../../pages/mobile/newDevice.page'
import AllureReporter from '@wdio/allure-reporter';

const pages: { [key: string]: Page } = { ["newDevice"]: NewDevicePage };

Then(/^I should be Redirected to New Device Page$/, async()=>{

    AllureReporter.addTestId('16303');
    (await expect (NewDevicePage.newDeviceLbl).toBeDisplayed());
    (await expect (NewDevicePage.btnStartVerification).toBeDisplayed());
})