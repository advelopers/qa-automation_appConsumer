import Page from './page';

class NewDevicePage extends Page {
    /**
     * define selectors using getter methods
     */

    get newDeviceLbl() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[1]') }
    get btnStartVerification() {return $('//*[@resource-id="primary-button"]')}


    async validate(): Promise<void> {
        (await this.newDeviceLbl).isDisplayed;
        (await this.btnStartVerification).isDisplayed;
    }

}

export default new NewDevicePage();