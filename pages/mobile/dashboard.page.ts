import Page from './page';
import UserProfilePage from '../../pages/mobile/userProfile.page';
import commonsPage from './commons.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    
    /**
    * define selectors using getter methods
    */

    get lnkProfile() { return $('//*[@resource-id="profile-button"]') }
    get lnkMore() {return $('//*[@resource-id="service-button"]')}
    get lnkCards() {return $('//*[@resource-id="virtualcard-button"]')}
    get balance() {return $('(//*[@resource-id="balance-amount"])[1]')}
    get balanceCBDC() {return $('(//*[@resource-id="balance-amount"])[2]')}
    get balanceDecimals() {return $('//*[@resource-id="balance-amount-decimals"]')}
    get balanceEye() {return $('//*[@resource-id="balance-value-touchable"]')}
    get balanceHeader() {return $('//*[@resource-id="header-balance-content"]')}
    get btnTransfer() { return $('//*[@resource-id="transfer-button"]') } 
    get btnQr() { return $('//*[@text="Pay with QR"]') }
    get avatarWrapper() {return $('//*[@resource-id="avatar"]')}
    get homeScreen() {return $('//*[@resource-id="home-body"]')}
    
    get lnkSeeAll() {return $('//*[@text="View all transactions"]')}

    get accJMD() {return $('//*[@text="Lynk (JMD)"]')}
    get accJamDex() {return $('//*[@text="JAM-DEX (JMD)"]')}

    //get btnCashIn() {return $('//*[@text="Cash In"]')}
    get btnCashIn() {return $('(//*[@resource-id="feature-button"])[4]')}
    get btnCashOut() {return $('//*[@text="Cash out"]')}

    /**
    * Help Tips first time
    */

    get btnAllowNotification() { return $('//*[@resource-id="android:id/button1"]') }
    get btnskipTip() { return $('//*[@class = "android.widget.FrameLayout"]') }
    get btnNext() {return $('//*[@text="Next"]')}
    get btnFinish() {return $('//*[@text="Done"]')}
    get btnCloseTips() { return $('//*[@resource-id="stop-button"]') }

    get txtLatestTransac() {return $('(//*[@resource-id="amount"])[1]')}
    get txtStepDescription() {return $('//*[@resource-id="stepDescription"]')}
    

    async validate(): Promise<void> {
        await this.lnkProfile;
    }

    async getBalance(): Promise<string> {
        return (await (this.balance)).getText();
     }

     async getBalanceDecimal(): Promise<string> {
        return (await (this.balanceDecimals)).getText();
     }

     async closeWelcomeTips(){
        // try{
        //     (await this.btnCloseTips).waitForDisplayed()
        //     if(await (await this.btnCloseTips).isExisting()){
        //         (await this.btnCloseTips).click(); 
        //     }
        // } catch(error){
        //     console.log('Welcome tips was not displayed')
        // }

        try{
            (await this.btnNext).waitForDisplayed()
            if(await (await this.btnNext).isDisplayed()){
                await commonsPage.tapByCoordinates(929,436);
            }
        }
        catch(error){
            console.log('Welcome tips was not displayed');
        }
     }


    async navigateToBankAndCards(){
        (await this.avatarWrapper).waitForDisplayed();
        (await this.avatarWrapper).click();
        (await UserProfilePage.lblBankAndCards).waitForDisplayed();
        (await UserProfilePage.lblBankAndCards).click();
    }

    async navigateToP2PScreen(){
        (await (this.btnTransfer)).waitForDisplayed();
        (await (this.btnTransfer)).click();
        (await (this.accJMD)).waitForDisplayed();
        (await (this.accJMD)).click();
    }
}

export default new DashboardPage();
