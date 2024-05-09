import Page from "./page";

class MoreFeaturesPage extends Page{

    get lnkCashIn() {return $('//*[@text="Cash in"]')}
    get lnkCashOut() {return $('//*[@text="Cash out"]')}
    get lnkMerchantList() {return $('//*[@text="Merchant Listing"]')}
    get lnkTopUp() {return $('//*[@text="Top-up"]')}
    get lnkBillPay() {return $('//*[@text="Bill payment"]')}
    get txtFldPIN() {return $('//*[@resource-id="pin-input"]')}
    get lnkExchange() {return $('//*[@text="Exchange"]')}
    get lnkRemittance() {return $('//*[@text="Remittance"]')}
    get lnkMoneyGram() {return $('//*[@text="MoneyGram"]')}

    async validate(): Promise<void> {
        await expect(this.lnkCashIn).toBeDisplayed()
        await expect(this.lnkCashOut).toBeDisplayed()
        await expect(this.lnkMerchantList).toBeDisplayed()
        await expect(this.lnkTopUp).toBeDisplayed()
    }
}

export default new MoreFeaturesPage