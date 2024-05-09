import Page from './page'

class ResetPinPage extends Page{

    get fldPhoneNumber() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText')}
    get btnStartVerification() {return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup')}

    async validate(): Promise<void> {
        (await this.fldPhoneNumber).isDisplayed();
        (await this.btnStartVerification).isDisplayed();
    }
}

export default new ResetPinPage();