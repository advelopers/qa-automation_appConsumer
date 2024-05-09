import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */

    get drpFlagArrow() { return $('//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView') }

    get iptPhone() { return $('//*[@text="+1 876"]') }
    get iptPin() { return $('//*[@resource-id="iptPassword"]') }
    get btnForgotPin() { return $('//*[@resource-id="signInBody_forgotButton"]') }
    get btnSignIn() { return $('//*[@resource-id="signInBody_btnContinue"]') }
    get btnSignUP() { return $('//*[@resource-id="signInFooter_signUpPress"]') }

    async validate(): Promise<void> {
        await this.drpFlagArrow;
        await this.iptPhone;
        await this.iptPin;
        await this.btnForgotPin;
        await this.btnSignIn;
        await this.btnSignUP;

    }

    /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
    async login(phone: string, pin: string) {
        //await this.chooseFlag(flag);
        (await (this.iptPhone)).waitForDisplayed();
        (await this.iptPhone).clearValue();
        (await this.iptPhone).setValue(phone);
        (await (this.iptPin)).waitForDisplayed();
        (await this.iptPin).setValue(pin);
        (await (this.btnSignIn)).waitForDisplayed();
        (await this.btnSignIn).click();
    }

    async chooseFlag(option: string) {
        await (await this.drpFlagArrow).click();
        const elem = await $('//*[@text="' + option + '"]');
        await elem.click();
    }

}
export default new SignInPage();
