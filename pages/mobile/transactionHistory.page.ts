import Page from './page';

class TransactionHistoryPage extends Page {

    get tabAll() {return $('//*[@text="All"]')}
    get tabSent() {return $('//*[@text="Sent"]')}
    get tabReceived() {return $('//*[@text="Received"]')}
    get tabRequest() {return $('//*[@text="Requests"]')}

    get transactionAmt() {return $('//*[@resource-id="badge-text"]')}

    get transItem() {return $('//*[@resource-id="item-activity"]')}
    get profileImage() {return $('//*[@resource-id="avatar"]')}
    get btnRespond() {return $('//*[@text="Respond"]')}

    get iconNotes() {return $('//*[@resource-id="count"]')}

    get cardCashInItem() {return $('//*[@text="Auto"]')}
    get pendingItem() {return $('(//*[@text="Pending"])[1]')}

    get currencySelector() {return $('//*[@resource-id="testPress"]')}
    get currencyJamDex() {return $('//*[@text="JAM-DEX (JMD)"]')}
    get cbdcExchangeItem() {return $('(//*[@resource-id="item_202166-800847-9245163"]')}
    get cashInTransItem() {return $('//*[@resource-id="text_Savings-NCB"]')}
    get billPaymentItem() {return $('//*[@resource-id="text_JPS"]')}
    get welcomeBonusItem() {return $('//*[@resource-id="text_Welcome Bonus"]')}
    get referralBonusItem() {return $('//*[@resource-id="text_Referral Bonus"]')}


    async validate() :Promise<void>{
        await expect(this.tabAll).toBeDisplayed()
        await expect(this.tabSent).toBeDisplayed()
        await expect(this.tabReceived).toBeDisplayed()
        await expect(this.tabRequest).toBeDisplayed()
    }


    async moveToElment(element:WebdriverIO.Element) {
        element.waitForDisplayed();
        element.moveTo();
    }
}

export default new TransactionHistoryPage()