import Page from './page';
import CommonsPage from './commons.page';
import transferPage from './transfer.page';
import Gestures from '../../commons/gestures';

class RequestPage extends Page{

    get iptSearch() {return $('//*[@resource-id="_textInput"]')}
    get lnkUserItem() {return $('//*[@resource-id="user-item"]')}
    get lnkQR() {return $('//*[@resource-id="qrButton"]')}
    get iptNote() {return $('//*[@text="Add a note (optional)"]')}
    get iptAmount() { return $('//*[@content-desc="Input money amount"]')}
    get confirmationSlider() {return $('//*[@text="Swipe up to ask"]')}
    get swipeText() {return $('//*[@resource-id="swipe-text"]')}
    get openSpace() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView')}

    async validate() :Promise<void>{
        await expect(this.iptSearch).toBeDisplayed()
        await expect(this.iptAmount).toBeDisplayed()
    }

    async searchUser(user : string){
        await (await this.iptSearch).click();
        await (await this.iptSearch).setValue(user);
        (await this.openSpace).click();
        await driver.hideKeyboard();
        await CommonsPage.delay(3);
    }

    async addNote(note: string) {
        await (await this.iptNote).setValue(note);
    }

    async addRequest(amount:string){
        
        await expect(this.iptAmount).toBePresent();
        (await (this.iptAmount)).setValue(amount)

        await CommonsPage.delay(5);

        (await transferPage.iptNote).waitForDisplayed();
        await expect((transferPage.iptNote)).toBePresent();
        (await transferPage.iptNote).click();
        (await transferPage.txtNoteInput).waitForDisplayed();
        (await transferPage.txtNoteInput).click();
        (await transferPage.txtNoteInput).setValue('Test Note');
        await driver.hideKeyboard();
        (await CommonsPage.btnContinue).waitForDisplayed();
        (await CommonsPage.btnContinue).click();

        await expect((this.swipeText)).not.toBePresent();

        await CommonsPage.confirmationSwipe(await this.confirmationSlider, await this.iptAmount)
    }

    async addUser(user:string)
    {
        const screenSize = driver.getWindowRect();
        const from = {
            x: (await screenSize).width / 2,
            y: (await screenSize).height - 100,
        };
        const to = {
            x: (await screenSize).width / 2,
            y: 0 + 100,
        }
        
        await (this.searchUser(user));        

        Gestures.swipe(from, to)
        Gestures.swipe(from, to)
        Gestures.swipe(from, to)

        await CommonsPage.delay(3)

        await (CommonsPage.tapbytext("@"+user))
    }


}
export default new RequestPage