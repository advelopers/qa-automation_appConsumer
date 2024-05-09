import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InitialPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin() { return $('//*[@resource-id="signIn"]') }
    get btnHav() { return $('//*[@resource-id="signIn"]') }
    get btnSignup() { return $('//*[@resource-id="signUp"]') }

    /**
     * slider 
    */
    get carousel() { return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.ViewGroup') }
    //get sldSecond() { return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.ViewGroup') }
    //get sldThird() { return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.ViewGroup') }



    async validate(): Promise<void> {
        // await this.btnLogin;
        // await this.btnSignup;
        await expect(this.btnLogin).toBeDisplayed()
        await expect(this.btnSignup).toBeDisplayed()
    }

    /**
     * Signup Button
     */
    async SignUp(): Promise<void> {
        await (await this.btnSignup).click();
    }

    /**
     * Signin Button
     */
    async SignIn(): Promise<void> {
        (await (this.btnLogin)).waitForDisplayed();
        await (await this.btnLogin).click();
    }


}

export default new InitialPage();
