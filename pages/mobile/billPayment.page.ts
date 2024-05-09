import Page from "./page";

class BillPayment extends Page{

    get btnPayNewBill_n() {return $('//*[@text="Pay new bill"]')}
    get btnPayNewBill() {return $('~action-button')}
    get lnkElecBillerType() {return $('//*[@text="Electricity"]')}
    get lnkInternetBillerType() {return $('//*[@text="Internet/Cable"]')}
    get itemJPSBiller() {return $('//*[@text="Jamaica Public Service New Customer Acc (JPS)"]')}
    get itemFlowBiller() {return $('//*[@text="Flow (8-9 digits Landline mobile internet)"]')}
    get itemJPSBalanceBiller() {return $('//*[@text="Jamaica Public Service Ltd."]')}
    get txtFldAccNum() {return $('//*[@text="Account number"]')}
    get txtFldVerifyAccNum() {return $('//*[@text="Verify account number"]')}
    get txtFldBillName() {return $('//*[@text="Bill nickname"]')}
    get lnkBiller() {return $('//*[@text="JPS"]')}
    get lnkInfoIcon() {return $('android=new UiSelector().className("android.view.ViewGroup").enabled(true).instance(0)')}
    get iptAmount() { return $('//*[@content-desc="Input money amount"]')}
    get iptAmountCents() { return $('//*[@content-desc="Input decimal amount"]')}
    get confirmationSwipe() { return $('//*[@text="Swipe up to pay"]')}
    get btnPayAnother() {return $('//*[@resource-id="another-transfer"]')}
    get btnGoToHome() {return $('//*[@resource-id="home"]')}
    get lnkDownload() {return $('//*[@resource-id="download"]')}
    get lnkShare() {return $('//*[@resource-id="share"]')}
    get billPaidHeader() {return $('//*[@text="Bill Paid"]')}
    get swipeElement() {return $('//*[@resource-id="swipe-text"]')}
    //get iptSearchBiller() {return $('//*[@text="Search by company name"]')}
    get iptSearchBiller() {return $('//*[@resource-id="_textInput"]')}
    get iptSearchPayee() {return $('//*[@resource-id="searchInput_textInput"]')}

    get btnEditBiller() {return $('android=new UiSelector().className("android.view.ViewGroup").enabled(true).instance(0)')}
    get lnkPayee() {return $('//*[@text="1187023820099"]')}

    get lnkJPSBalancePayee() {return $('//*[@text="1168243820616"]')}  //This is the configured Payee for bill payment 4.0 where users can see bill balance
    get lnkFlowBalancePayee() {return $('//*[@text="50054711"]')}

    get lnkFullPay() {return $('//*[@text="Full payment"]')}
    get lnkPartialPay() {return $('//*[@text="Partial payment"]')}

    get txtBalanceAmt() {return $('//*[contains(@text,"Your total balance is")]')}
    get balanceUnavailableIcon() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup[2]')}

    get editPayeeAccNum() {return $('//*[@resource-id="iptAccountNumber"]')}
    get editPayeeNickName() {return $('//*[@resource-id="iptBillNickname"]')}
    get btnSaveChanges() {return $('//*[@text="Save changes"]')}
    get btnDeletePayee() {return $('//*[@text="Delete payee"]')}
    get btnConfirmDeletePayee() {return $('//*[@text="Yes, remove"]')}
    get btnCancelDeletePayee() {return $('//*[@text="Cancel"]')}
    get lnkEditedBiller() {return $('//*[@text="JPS Edit"]')}
    

    async validate(): Promise<void> {
        
    }

}

export default new BillPayment()