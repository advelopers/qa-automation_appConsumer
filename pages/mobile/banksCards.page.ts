import Page from './page';
import CommonsPage from '../../pages/mobile/commons.page';

class BanksCards extends Page{

    get btnConnectAcc() { return $('//*[@resource-id="addAccountButton"]') }
    get btnConnectCard() { return $('//*[@resource-id="addCardButton"]') }
    get txtFldPIN() {return $('//*[@resource-id="pin-input"]')}
    get btnContinue() {return $('//*[@text="Continue"]')}
    get btnAddPaymethod() {return $('//*[@text="Add payment method"]')}
    get lnkAddBankAcc() {return $('//*[@text="Bank account"]')}
    get btnAddYourBank() {return $('//*[@resource-id="continue-sso-ncb"]')}
    get btnCancel() {return $('//*[@text="Cancel"]')}
    get lblDebit() {return $('//*[@resource-id="testDebit"]')}
    get lblCredit() {return $('//*[@resource-id="testCredit"]')}
    get lblUSD() {return $('//*[@text="USD"]')}
    get txtFldCardNumber() {return $('//*[@text="Card number"]')}
    get txtFldExpiryDate() {return $('//*[@text="MM/YY"]')}
    get txtFldNameOnCard() {return $('//*[@text="Cardholder name"]')}
    get txtFldCardNickName() {return $('//*[@text="Personal"]')}
    get maxCardAmtMsg() {return $('/hierarchy/android.widget.FrameLayout/android.widget.TextView[3]')}

    //get lnkSavingAcc() {return $('//*[@resource-id="payment-method=touchable"]')}
    
    get txtFldCVV() {return $('//*[@text="CVV"]')}

    get ddlCurrency() {return $('(//*[@text="Currency"])')}

    //Bank Account Elements
    get lnkSavingAcc() {return $('(//*[@resource-id="payment-method=touchable"])[1]')}
    get btnEditBankName() {return $('android=new UiSelector().className("android.view.ViewGroup").enabled(true).instance(1)')}
    get txtFldBankNickName() {return $('//*[@text="Enter nickname"]')}
    get btnSaveNickName() {return $('(//*[@text="Save"])')}
    get lnkOpenSpace() {return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup[1]')}
    get lblBankNickName() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup[1]/android.widget.TextView[1]')}
    get lnkUnverifiedCard() {return $('(//*[@text="Martha"])')}

    get btnCashIn() {return $('(//*[@resource-id="action-button-cashout"])')}
    get btnCashOut() {return $('(//*[@resource-id="action-button-cashin"])')} //Element ID for these two buttons are in reverse

    get profileBackBtn() {return $('//android.widget.Button[@content-desc="Profile, back"]')}
    get userProfileBackBtn() {return $('(//*[@resource-id="chavron-left-button"])')}

    get btnContinueAddingAcc() {return $('(//*[@resource-id="noMethodsAdd"])')}
    get itemBank() {return $('(//*[@resource-id="SelectBankCashIn"])[1]')}
    get lnkNonPrefSavingAcc() {return $('(//*[@resource-id="payment-method=touchable"])[2]')}
    get switchPrefAcc() {return $('(//*[@resource-id="switch"])')}
    get lnkRemoveAcc() {return $('(//*[@resource-id="unlink-touchable"])')}
    get lblAccName() {return $('/hierarchy/android.widget.FrameLayout/android.widget.TextView[1]')}
    get btnRemoveAcc() {return $('(//*[@resource-id="button"])')}


    async validate(): Promise<void> {
        expect(await this.btnConnectAcc).toBeDisplayed();
        expect(await this.btnConnectCard).toBeDisplayed();
    }


    async deleteLinkedCards(){

        const elem = await $('(//*[@resource-id="payment-method=touchable"])')
        const pinFld = await $('(//*[@resource-id="pin-input"])')
        const pinContinueBtn = await $('(//*[@resource-id="continue-btn-pin"])')
            
            await elem.waitForDisplayed();
            await elem.click();
            (await this.lnkRemoveAcc).waitForDisplayed();
            (await this.lnkRemoveAcc).click();
            await driver.pause(3000);
            (await this.btnRemoveAcc).waitForDisplayed();
            (await this.btnRemoveAcc).click();
            await driver.pause(3000);
            await pinFld.waitForDisplayed()
            await pinFld.setValue("199310")
            await driver.pause(3000);
            await pinContinueBtn.waitForEnabled();
            await pinContinueBtn.click();
            await expect(CommonsPage.findlabelbytext('Card removed')).toBeDisplayed()
    }

}

export default new BanksCards()