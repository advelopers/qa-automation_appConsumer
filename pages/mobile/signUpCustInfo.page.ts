import Page from './page';
import signUpOtpPage from './signUpOtp.page';

/**
 * Customer personal Information screen after OTP is validated
 */
class SignUpCustInfoPage extends Page{

    get txtFldFirstName() {return $('//*[@text="First Name"]')}
    get txtFldLastName() {return $('//*[@text="Last Name"]')}
    get btnContinue() {return $('//*[@resource-id="email-contact"]')}
    get txtFldEmail() {return $('//*[@text="Email"]')}
    get txtFldVerifyEmail() {return $('//*[@text="Verify email"]')}


    async validate(): Promise<void> {
        await expect(this.txtFldFirstName).toBeDisplayed();
        await expect(this.txtFldLastName).toBeDisplayed();
        await expect(this.btnContinue).toBeDisplayed();
        await expect(this.txtFldEmail).toBeDisplayed();
        await expect(this.txtFldVerifyEmail).toBeDisplayed();
    }

    async enterName(firstName: string, lastName: string) {
        (await this.txtFldFirstName).clearValue;
        (await this.txtFldFirstName).setValue(firstName);
        (await this.txtFldLastName).clearValue;
        (await this.txtFldLastName).setValue(lastName)
    }
}

export default new SignUpCustInfoPage()