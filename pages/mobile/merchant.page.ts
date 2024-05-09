import Page from "./page";

class MerchantPage extends Page{

    get iptSearch() {return $('//*[@resource-id="_textInput"]')}
    get iptAmount() { return $('//*[@content-desc="Input money amount"]')}
    get iptAmountCents() { return $('//*[@content-desc="Input decimal amount"]')}
    get confirmationSwipe() { return $('//*[@text="Swipe up to send"]')}
    get swipeText() {return $('//*[@resource-id="swipe-text"]')}
    get userId() {return $('//*[@resource-id="userName"]')}
    get userDisplayName() {return $('//*[@resource-id="userDisplayName"]')}
    get btnGoBack() {return $('~HomeScreen, back')}

    get btnCashIn() {return $('//*[@resource-id="button"]')}


    async validate(): Promise<void> {
        await expect(this.iptSearch).toBeDisplayed()
        await expect(this.iptAmount).toBeDisplayed()
    }
    
}

export default new MerchantPage