import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class cashOutPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtTapMoney() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.EditText') } //Tap Money
    get btnClickToCashOut() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[1]') }// btn cashOn
    get lblNcbCashOut() { return $('//*[@resource-id="ncb-account"]') }// btn cashOn
    get lblNcbSavingsAcc() { return $('//*[@text="Savings-NCB"]') }
    get txtCashInSuccessful() { return $('//*[@text="Transfer successful!"]') }// message cash in successful
    get txtCashedinJMD() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]') } //message money cashed
    get txtInsufficientFunds() { return $('//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]') } //InsufficientFunds
    //get iptAmount() { return $('//*[@content-desc="Input money amount"]') }
    get iptAmount() { return $('//android.widget.EditText[@content-desc="Input money amount"]') }

    get iptAmountCents() { return $('//*[@content-desc="Input decimal amount"]') }
    get btnSavings() { return $('//*[@resource-id="payment-method=touchable"]') }
    //get lblOtherBankCashOut() {return $('//*[@resource-id="bank-out"]')}
    get lblOtherBankCashOut() {return $('//*[@resource-id="ncb-account"]')}
    get lblLinkedAccText() {return $('//*[@resource-id="account-ncb-text"]')}
    get confirmSwipe() { return $('//*[@text="Swipe up to cash out"]')}
    get iconShowBal() {return $('//*[@resource-id="icon-show-balance"]')}
    get txtLynkBal() {return $('//*[@resource-id="balance_text2"]')}
    get achCashoutSwipe() { return $('//*[@text="Swipe up to transfer"]')}
    get btnACHContinue() { return $('//*[@resource-id="handler-action"]') }


    async validate(): Promise<void> {
        (await this.txtTapMoney).isDisplayed;
        (await this.btnClickToCashOut).isDisplayed;

    }

    async Savingsclick(): Promise<void> {
        (await this.btnSavings).isDisplayed;
        (await this.btnSavings).click();

    }

    async getBalance(): Promise<string> {
        return (await (this.txtLynkBal)).getText();
     }


}

export default new cashOutPage();
