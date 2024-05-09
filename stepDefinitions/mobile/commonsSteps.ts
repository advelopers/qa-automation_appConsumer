import { Given, Then, When } from '@cucumber/cucumber';
import CommonsPage from '../../pages/mobile/commons.page';
import Gestures from '../../commons/gestures';

Then(/^the label with text "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text)
});

Then(/^the label that contains text "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveTextContaining(text)
});

Then(/^the button with text "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
});

Then(/^the error message with text "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
});

Then(/^the message with text "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
});

Then(/^the message that contains text "(.*)" is displayed$/, async(text:string)=>{
    await expect(CommonsPage.findlabelbytext(text)).toHaveTextContaining(text)
})

Then(/^the input with placeholder "(.*)" is displayed$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
});

Then(/^i tap the button with text "(.*)"$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
    await (CommonsPage.tapbytext(text));
});

Then(/^i tap the label with text "(.*)"$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
    await (CommonsPage.tapbytext(text));
});

Then(/^i double tap the button with text "(.*)"$/, async (text: string) => {
    await expect(CommonsPage.findlabelbytext(text)).toHaveText(text);
    await (CommonsPage.tapbytext(text));
    await (CommonsPage.tapbytext(text));
});


Then(/^i wait (.*) seconds$/, async (seconds: number) => {
    await (CommonsPage.delay(seconds));
});

Then(/^the user scrolls$/, async () => {
    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to)
});

Then(/^the user scrolls on more features page$/, async () => {
    const screenSize = driver.getWindowRect();
    const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 500,
    };
    const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }
    Gestures.swipe(from, to)
});

Then(/^the label that contains text "(.*)" is displayed$/, async(text:string)=>{
    await expect(CommonsPage.findLabelThatContainsText(text)).toBeDisplayed()
})

Then(/^the label that contains text "(.*)" is not displayed$/, async(text:string)=>{
    await expect(CommonsPage.findLabelThatContainsText(text)).not.toBeDisplayed()
})