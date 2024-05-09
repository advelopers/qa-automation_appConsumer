import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {

    /**
     * define selectors using getter methods
     */

    get btnBackBtn() { return $('//*[@resource-id="header-back"]') }
    get lblSignUp() { return $('//*[@text="Sign up"]') }
    get drpFlagArrow() { return $('//*[@resource-id="chevron-down"]') }
    get iptPhone() { return $('//*[@text="+1 876"]') }
    get iptPin() { return $('//*[@text="Create 6-digit PIN"]') }
    get btnVerifyNumber() { return $('//*[@text="Verify your number"]') }
    get txtFldPIN() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.EditText')}


    async validate(): Promise<void> {
        //await expect(this.btnBackBtn).toBeDisplayed();
        await expect(this.lblSignUp).toBeDisplayed();
        await expect(this.drpFlagArrow).toBeDisplayed();
        await expect(this.iptPhone).toBeDisplayed();
        //await expect(this.iptPin).toBeDisplayed();
        await expect(this.btnVerifyNumber).toBeDisplayed();
    }

    /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
    async signup( phone: string, pin: string) {
        //await this.chooseFlag(flag);
        await (await this.iptPhone).clearValue;
        await (await this.iptPhone).setValue(phone);
        await (await this.iptPin).clearValue;
        await (await this.iptPin).setValue(pin);
        await (await this.btnVerifyNumber).click();
    }

    async chooseFlag(option: string) {
        await (await this.drpFlagArrow).click();
        const elem = await $('//*[@text="' + option + '"]');
        await elem.click();
    }

}

export default new SignUpPage();
