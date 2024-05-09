import banksCardsPage from './banksCards.page';
import CommonsPage from './commons.page';
import dashboardPage from './dashboard.page';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class cashInPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtTapMoney() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.EditText') } 
    get btnClickToCashOut() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[1]') }
    get txtCashInSuccessful() { return $('//*[@text="Transfer successful!"]') }
    get txtCashedinJMD() { return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]') } 
    get txtInsufficientFunds() { return $('//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]') } 
    //get iptAmount() { return $('//*[@content-desc="Input money amount"]') } 
    get iptAmount() { return $('//android.widget.EditText[@content-desc="Input money amount"]') } 

    get cashInCard() {return $('//*[@text="Debit/Credit card"]')}
    get registeredCard() {return $('//*[@text="Auto"]')}
    get cashInBank() {return $('//*[@resource-id="ncb-account-in"]')}
    get cashInABM() {return $('//*[@resource-id="abm-cash-in"]')}
    get lnkNCB() {return $('//*[@text="National Commercial Bank"]')}
    get btnAddYourBank() {return $('//*[@resource-id="continue-sso-ncb"]')}
    get ncbSavingsAcc() {return $('//*[@text="Savings-NCB"]')}
    get cardIptAmount() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.EditText[1]')}
    get confirmSwipe() {return $('//*[@text="Swipe up to cash in"]')}

    get cardCashInFrom() {return $('//*[@resource-id="listMenuItem"]')}
    get txtFldCVV() {return $('//*[@text="CVV"]')}

    get swipeText() {return $('//*[@resource-id="swipe-text"]')}

    get btnGoToCardProvider() {return $('//*[@resource-id="button"]')}

    get txtAccountName() {return $('//*[@resource-id="account-ncb-text"]')}
    get lnkNonPrefAcc() {return $('(//*[@resource-id="account-test-id"])[2]')}

    get txtBankAccName() {return $('//*[@resource-id="lynk_balance_text"]')}

    get lnkCardFee() {return $('//*[@resource-id="fee-value"]')}
    

    async validate(): Promise<void> {
        (await this.txtTapMoney).isDisplayed;
        (await this.btnClickToCashOut).isDisplayed;
    }

    async bankCashIn(amount:string){

        (await dashboardPage.btnCashIn).waitForDisplayed();
        (await dashboardPage.btnCashIn).click();
        (await this.cashInBank).waitForDisplayed();
        (await this.cashInBank).click();
        //(await cashInPage.ncbSavingsAcc).waitForDisplayed();
        //(await cashInPage.ncbSavingsAcc).click();

        (await banksCardsPage.txtFldPIN).waitForDisplayed();
        (await banksCardsPage.txtFldPIN).setValue('040992');
        (await (CommonsPage.btnContinue)).waitForEnabled();
        await expect(CommonsPage.btnContinue).toBeEnabled();
        (await CommonsPage.btnContinue).click();

        (await this.ncbSavingsAcc).waitForDisplayed();
        (await this.ncbSavingsAcc).click();

        await CommonsPage.delay(8);

        (await this.iptAmount).setValue(amount);

        await expect((this.swipeText)).not.toBePresent();
        
        await CommonsPage.confirmationSwipe(await this.confirmSwipe, await this.iptAmount);

        await CommonsPage.delay(10);
        const btnGoHome = await $('//*[@text="Go to home"]');

        await btnGoHome.waitForDisplayed();
    }

}

export default new cashInPage();
