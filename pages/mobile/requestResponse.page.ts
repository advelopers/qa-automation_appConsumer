import Page  from "./page";

class RequestResponsePage extends Page{

    get btnAcceptAndContinue() {return $('//*[@text="Accept and continue"]')}
    get btnDecline() {return $('//*[@text="Decline"]')}
    get declineBtn() {return $('//*[@resource-id="PaymentRequestDeclinePrimaryBtn"]')}
    get requestAmount() { return $('android=new UiSelector().className("android.widget.TextView").enabled(true).instance(3)')}
    get requesterName() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[3]')}
    get requesterUserName() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[4]')}
    get confirmationSwipe() {return $('//*[@text="Swipe up to send"]')}
    get userDisplayName() {return $('//*[@resource-id="userDisplayName"]')}

    get requestAmtNotifs() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[5]')}

   async validate(): Promise<void> {
       await expect(this.requesterUserName).toBeDisplayed()
       await expect(this.requestAmount).toBeDisplayed()
       await expect(this.requesterUserName).toBeDisplayed()
       await expect(this.btnAcceptAndContinue).toBeDisplayed()
       await expect(this.btnDecline).toBeDisplayed()
   }

   async getRequestAmt():Promise<string>{

    return (await (this.requestAmount)).getText();

   }
   

}

export default new RequestResponsePage