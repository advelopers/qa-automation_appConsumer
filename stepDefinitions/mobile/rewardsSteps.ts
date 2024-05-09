import { Given, Then, When } from '@cucumber/cucumber';
import VerifyIdentityPage from '../../pages/mobile/verifyIdentity.page';
import CommonsPage from '../../pages/mobile/commons.page';
import Page from '../../pages/mobile/page';
import AllureReporter from '@wdio/allure-reporter';
import rewardsPage from '../../pages/mobile/rewards.page';

Given(/^User is redirected to rewards page$/,async () => {
    await VerifyIdentityPage.validate();
})


Then(/^Validate Contents of Rewards Screen$/,async () => {
    AllureReporter.addTestId('15130');
    await expect(CommonsPage.findlabelbytext('Rewards')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Invite friends')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Claim bonus')).toBeDisplayed();
   
})

Then(/^Validate Contents of tier upgrade modal$/,async () => {
    AllureReporter.addTestId('42334');
    await expect(CommonsPage.findlabelbytext('Upgrade to Lucky Lynk')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Access this and many more features from Lynk when you boost your account tier.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Level up for free')).toBeDisplayed();
   
})

Then(/^Validate Contents of Invites Screen$/,async () => {
    AllureReporter.addTestId('9079');
    await expect(CommonsPage.findlabelbytext('Invites')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('For each friend who signs up, we will give you 250 JMD.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Share your code and lynk with your friends.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Terms and Conditions')).toBeDisplayed();

    await expect(rewardsPage.txtFldRewardCode).toBeDisplayed();
    await expect(rewardsPage.btnInviteFriends).toBeDisplayed()
})


When(/^user inputs referral code$/,async () => {
    //AllureReporter.addTestId('9078');
    
    (await rewardsPage.txtFldRedeemCode).waitForDisplayed();
    await expect(rewardsPage.txtFldRedeemCode).toBeDisplayed();
    (await rewardsPage.txtFldRedeemCode).setValue('A02608');

    (await rewardsPage.btnRedeemCode).waitForEnabled();
    await expect(rewardsPage.btnRedeemCode).toBeEnabled();
    (await rewardsPage.btnRedeemCode).click(); 
})

Then(/^Validate redeem code success modal$/,async () => {
    AllureReporter.addTestId('9078');
    await expect(CommonsPage.findlabelbytext('Congratulations!')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('welcome bonus has been deposited into your Lynk account.')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Invite friends')).toBeDisplayed();
   
})

Then(/^Validate user can only redeem code once$/,async () => {
    AllureReporter.addTestId('9084');
    await expect(CommonsPage.findlabelbytext('Sorry, you can only redeem your welcome bonus once.')).toBeDisplayed();
   
})