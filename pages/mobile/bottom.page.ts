import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BottomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnHome() { return $('~Home') }
    get btnWebView() { return $('~Webview') }
    get btnLogin() { return $('//*[@resource-id="signIn"]') }
    get btnForms() { return $('~Forms') }
    get btnSwipe() { return $('~Swipe') }
    get btnDrag() { return $('~Drag') }

    async validate(): Promise<void> {
        await this.btnHome;
        await this.btnWebView;
        await this.btnLogin;
        await this.btnForms;
        await this.btnSwipe;
        await this.btnDrag;
    }

    /**
     * Home Button
     */
    async home(): Promise<void> {
        await (await this.btnHome).click();
    }

    /**
     * WebView Button
     */
    async webView(): Promise<void> {
        await (await this.btnWebView).click();
    }

    /**
     * Login Button
     */
    async login(): Promise<void> {
        await (await this.btnLogin).click();
    }

    /**
     * Forms Button
     */
    async forms(): Promise<void> {
        await (await this.btnForms).click();
    }

    /**
     * Swipe Button
     */
    async swipe(): Promise<void> {
        await (await this.btnSwipe).click();
    }

    /**
     * Drag Button
     */
    async drag(): Promise<void> {
        await (await this.btnDrag).click();
    }
}

export default new BottomPage();
