import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class UserProfilePage extends Page {
    /**
     * define selectors using getter methods
     */

    get lblDisplayName() { return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup[1]') }
    get lblTermsConditions() { return $('//*[@text="Terms and conditions"]') }
    get lblBankAndCards() {return $('//*[@resource-id="profileScreen-payment"]')}
    get lblSecurity() { return $('//*[@resource-id="profileScreen-undefined"]')}
    get imgProfileAvatar() { return $('//*[@resource-id="avatar"]') }
    get btnBackarrowIcon() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup') }
    get btnBack() { return $('//android.widget.Button[@content-desc="Profile, back"]') }
    get lblPersonalInfo() {return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup[5]')}
    get displayNameTxtFld() {return $('//*[@resource-id="name"]')}
    get btnSave() {return $('//*[@resource-id="btnContinue"]')}
    get displayNameErrorMsg() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[4')}
    get personalInfoTitle() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[1]')}
    get displayName() {return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.TextView[1]')}
    get displayNameToolTip() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[2]')}

    get lblNotifications() {return $('//*[@resource-id="profileScreen-notifications"]')}
    get requestNotification() {return $('(//*[contains(@text,"request")])[3]')}

    get lnkChangePin() { return $('//*[@resource-id="change-pin"]')}

    get txtFldCurrentPIN() { return $('//*[@resource-id="pin"]')}
    get btnConfirmPIN() { return $('//*[@text="Confirm PIN"]')}

    get txtFldNewPIN() { return $('//*[@resource-id="pin"]')}
    get btnSavePIN() {return $('//*[@text="Save"]')}

    get lynkLogo() {return $('//*[@content-desc="home"]')}

    get btnTierUpgrade() {return $('//*[@resource-id="upgrade-button"]')}

    async validate(): Promise<void> {
        await this.lblDisplayName;
    }

    async getUserName(text: string) {
        const elem = await $('//*[@text="' + text + '"]');
        return elem;
    }
}
export default new UserProfilePage();
