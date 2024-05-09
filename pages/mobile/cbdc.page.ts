import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class cbdcPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtFldRecepient() { return $('//*[@text="+1"]') } 
    get btnContinue() { return $('//*[@resource-id="btnContinue"]') }
    get iptAmount () {return $('//*[@content-desc="Input money amount"]')}
    get iptAmountCents () {return $('~Input decimal amount')}
    get swipeConfirm() {return $('//*[@text="Swipe up to send"]')}
    get swipeText() { return $('//*[@resource-id="swipe-text"]') }
    get iconDisplayBal() {return $('//*[@resource-id="icon-show-balance"]')}
    get txtBalance() { return $('(//*[@resource-id="balance_text2"])[1]') }
    get ddlCurreny1() { return $('(//*[@resource-id="currencyLabel"])[1]') }
    get currencyJamDex() {return $('//*[@text="JAM-DEX (JMD)"]')}
    get currencyJMD() {return $('//*[@text="Lynk (JMD)"]')}
    get txtErrorMessage() { return $('//*[@resource-id="typographyStyled"]')}
    get lnkCurrencySwitch() {return $('(//*[@text=""])[5]')}
    get txtCurrency() {return $('android=new UiSelector().className("android.widget.TextView").enabled(true).instance(3)')}

    


    async validate(): Promise<void> {
        (await this.txtFldRecepient).isDisplayed;
        (await this.btnContinue).isDisplayed;

    }


}

export default new cbdcPage();
