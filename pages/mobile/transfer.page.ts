import Gestures from '../../commons/gestures';
import CommonsPage from './commons.page';
import Page from './page';
import requestPage from './request.page';

class TransferPage extends Page{
    // contact access popup
    get mdlContactAllow() {return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')}
    get mdlContactDeny() {return $('//*[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]')}

    // transfer screenn
    get iptSearch() {return $('//*[@resource-id="_textInput"]')}
    get lnkQR() {return $('//*[@resource-id="qrButton"]')}
    get txtLynkBal() {return $('//*[@resource-id="balance_text2"]')}
    get iconShowBal() {return $('//*[@resource-id="icon-show-balance"]')}
    get iptNote() {return $('//*[@text="Add a note (optional)"]')}
    get txtNoteInput() {return $('//*[@resource-id="notes-input"]')}
    get iptAmount() { return $('//*[@content-desc="Input money amount"]')}
    get iptAmountCents() { return $('//*[@content-desc="Input decimal amount"]')}
    get confirmationSwipe() { return $('//*[@text="Swipe up to send"]')}
    get swipeText() {return $('//*[@resource-id="swipe-text"]')}
    get confirmRecipientContinueBtn() {return $('//*[@resource-id="action-continue-button"]')}
    get confirmRecipientCancelBtn() {return $('//*[@resource-id="action-cancel-button"]')}
    

    async validate() :Promise<void>{
        //expect(await this.iptSearch).toBeDisplayed;
        //expect(await this.iptSearch).toBeDisplayed;
        //expect(await this.iptAmount).toBeDisplayed;

        await expect(this.iptSearch).toBeDisplayed()
        await expect(this.iptAmount).toBeDisplayed()
    }

    async getBalance(): Promise<string> {
        return (await (this.txtLynkBal)).getText();
     }

    async searchUser(user : string){
        await (await this.iptSearch).click();
        await (await this.iptSearch).setValue(user);
    }

    async addNote(note: string) {
        await (await this.iptNote).setValue(note);
    }

    async makeTransfer(user:string, amount:string){

        const screenSize = driver.getWindowRect();
        const from = {
            x: (await screenSize).width / 2,
            y: (await screenSize).height - 100,
        };
        const to = {
            x: (await screenSize).width / 2,
            y: 0 + 100,
        }
        
        await (requestPage.searchUser(user));        

        Gestures.swipe(from, to)
        Gestures.swipe(from, to)
        Gestures.swipe(from, to)

        await CommonsPage.delay(3)

        await (CommonsPage.tapbytext("@"+user))
        //await (CommonsPage.tapbytext("@"+user))

        await expect(this.iptAmount).toBePresent();
        (await (this.iptAmount)).setValue(amount)

        await CommonsPage.delay(5);

        await expect((this.swipeText)).not.toBePresent();

        await CommonsPage.confirmationSwipe(await this.confirmationSwipe, await this.iptAmount)
    }
}
export default new TransferPage();