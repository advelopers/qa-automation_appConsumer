import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PopUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get okBtn() { return $('//*[@text="OK"]') }
    get loginAlert() { return $('//*[@resource-id="android:id/message"]') }

    async validate(): Promise<void> {
        await this.okBtn;
    }

    /**
     * Drag Button
    */
    async ok(): Promise<void> {
        await (await this.okBtn).click();
    }
}

export default new PopUpPage();
