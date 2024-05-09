import { Given, Then, When } from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import ActivityPage from '../../pages/mobile/activity.page'

const pages: { [key: string]: Page } = { ["activity"]: ActivityPage };

Given(/^I am on the activities page$/,async () => {

    ActivityPage.validate();
})
