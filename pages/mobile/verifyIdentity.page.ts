import Page from './page';

class verifyIdentityPage extends Page{

    get lblVerifyIdentity() { return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[1]') }
    get btnStartVerification() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup')}
    get lnkContinueLater() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[5]')}
 
    async validate(): Promise<void> {
        (await this.lblVerifyIdentity).isDisplayed;
        (await this.btnStartVerification).isDisplayed;
        (await this.lnkContinueLater).isDisplayed
    }
}

export default new verifyIdentityPage();