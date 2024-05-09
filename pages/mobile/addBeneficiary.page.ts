import Gestures from '../../commons/gestures';
import CommonsPage from './commons.page';
import DashboardPage from './dashboard.page';
import moreFeaturesPage from './moreFeatures.page';
import CashOutPage from './cashOut.page';
import Page from './page';

class AddBeneficiaryPage extends Page{

    get btnAddNewBeneficiary() {return $('//*[@text="New beneficiary"]')}
    get lblThirdPartyBank() {return $('//*[@text="Bank Of Nova Scotia (Jamaica) Limited"]')}
    get lblBankNcbAch() {return $('//*[@text="National Commercial Bank"]')}
    get lnkUseAccDetails() {return $('//*[@resource-id="serviceItem"]')}
    get lblAccTypeSavings() {return $('//*[@text="Savings"]')}
    get lblBeneficiaryType() {return $('//*[@text="Personal"]')}
    get lblBusinessBeneficiaryType() {return $('//*[@text="Business"]')}
    get txtFldAccountNumber() {return $('//*[@text="Account number"]')}
    get ddlBranch() {return $('//*[@resource-id="handlepress"]')}
    get branchName() {return $('//*[@text="00125 - CHRISTIANA"]')}
    get ncbBranchName() {return $('//*[@text="00001 - OPERATIONS CENTRE"]')}
    get txtFldFirstName() {return $('//*[@text="First Name"]')}
    get txtFldLastName() {return $('//*[@text="Last Name"]')}
    get txtFldNickName() {return $('//*[@text="Nickname"]')}
    get txtFldBusinessName() {return $('//*[@resource-id="businessname-input"]')}
    get chkBoxAccOwner() {return $('//*[@resource-id="checkbox"]')}
    get btnContinue() {return $('//*[@resource-id="button"]')}
    get lnkOtherBankBeneficiary() {return $('//*[@text="Jon"]')}
    get lnkNCBBeneficiary() {return $('//*[@text="Matt NCB"]')}
    get searchFld() {return $('//*[@text="Search name, bank or account type"]')}
    //get btnEdit() {return $('//*[@resource-id="editBtn"]')}
    get btnEdit() {return $('android=new UiSelector().className("android.view.ViewGroup").enabled(true).instance(1)')}
    get lnkBeneficiary1() {return $('//*[@text="BNS"]')}
    get lnkBeneficiaryAchNCB() {return $('//*[@text="NCB"]')}
    get txtFldEditNickName() {return $('(//*[@resource-id="iptNickName"])')}
    get txtFldEditFirstName() {return $('(//*[@resource-id="iptName"])')}
    get txtFldEditLastName() {return $('(//*[@resource-id="iptLastName"])')}
    get txtFldEditBankName() {return $('(//*[@resource-id="iptBank"])')}
    get txtFldEditAccountType() {return $('(//*[@resource-id="iptAccountType"])')}
    get txtFldEditAccountNum() {return $('(//*[@resource-id="iptAccountNumber"])')}
    get btnSaveChanges() {return $('//*[@resource-id="saveChanges"]')}
    get btnRemove() {return $('//*[@resource-id="handleRemoveBeneficiaryButton"]')}
    get btnBack() {return $('//*[@resource-id="chavron-left-button"]')}
    get btnConfirmDelete() {return $('//*[@text="Yes, remove"]')}
    
    

    async validate(): Promise<void> {
        (await this.btnAddNewBeneficiary).isDisplayed()
    }

    async addBeneficiaryDetails(accNum:string, firstName:string, lastName:string){

        (await this.txtFldAccountNumber).waitForDisplayed();
        (await this.txtFldAccountNumber).setValue(accNum);
        (await this.txtFldFirstName).waitForDisplayed();
        (await this.txtFldFirstName).setValue(firstName);
        (await this.txtFldLastName).waitForDisplayed();
        (await this.txtFldLastName).setValue(lastName);
        (await this.txtFldNickName).waitForDisplayed();
        (await this.txtFldNickName).setValue(firstName);
    }

    async addBusinessBeneficiaryDetails(accNum:string, businessName:string){

        (await this.txtFldAccountNumber).waitForDisplayed();
        (await this.txtFldAccountNumber).setValue(accNum);
        (await this.txtFldBusinessName).waitForDisplayed();
        (await this.txtFldBusinessName).setValue(businessName);
        (await this.txtFldNickName).waitForDisplayed();
        (await this.txtFldNickName).setValue(businessName);
    }

    async navigateToACHBeneficiaries(pin:string){
        const screenSize = driver.getWindowRect();
        const from = {
            x: (await screenSize).width / 2,
            y: (await screenSize).height - 500,
        };
        const to = {
            x: (await screenSize).width / 2,
            y: 0 + 100,
        };
        
        
        (await DashboardPage.lnkMore).waitForDisplayed();
        (await DashboardPage.lnkMore).click();

        await CommonsPage.delay(10);

        Gestures.swipe(from, to);
        Gestures.swipe(from, to);

        (await moreFeaturesPage.lnkCashOut).waitForDisplayed();
        (await moreFeaturesPage.lnkCashOut).click();

        (await CashOutPage.lblOtherBankCashOut).waitForDisplayed();
        (await CashOutPage.lblOtherBankCashOut).click();

        (await CommonsPage.txtFldPIN).waitForDisplayed();
        (await CommonsPage.txtFldPIN).setValue(pin);

        await CommonsPage.delay(7);
        (await CommonsPage.btnContinue).waitForDisplayed();
        (await CommonsPage.btnContinue).click();

        await CommonsPage.delay(15);
    }

    async deleteBeneficiary(){

        (await this.lnkBeneficiary1).waitForDisplayed();
        (await this.lnkBeneficiary1).click();
        

        (await this.btnRemove).waitForClickable();
        (await this.btnRemove).click();

        await expect(CommonsPage.findlabelbytext('Remove beneficiary')).toBeDisplayed();
        await expect(CommonsPage.findLabelThatContainsText('Are you sure you want to remove this beneficiary?')).toBeDisplayed();
        await expect(CommonsPage.findlabelbytext('Yes, remove')).toBeDisplayed();

        (await this.btnConfirmDelete).waitForClickable();
        (await this.btnConfirmDelete).click();

        await CommonsPage.delay(5)
    }

    async deleteBeneficiaryNcb(){

        (await this.lnkBeneficiaryAchNCB).waitForDisplayed();
        (await this.lnkBeneficiaryAchNCB).click();

        (await this.btnRemove).waitForClickable();
        (await this.btnRemove).click();

        await expect(CommonsPage.findlabelbytext('Remove beneficiary')).toBeDisplayed();
        await expect(CommonsPage.findLabelThatContainsText('Are you sure you want to remove this beneficiary?')).toBeDisplayed();
        await expect(CommonsPage.findlabelbytext('Yes, remove')).toBeDisplayed();

        (await this.btnConfirmDelete).waitForClickable();
        (await this.btnConfirmDelete).click();

        await expect(CommonsPage.findLabelThatContainsText('Account deleted successfully')).toBeDisplayed(); 
    }

    async addBeneficiary()
    {
        (await this.btnContinue).waitForDisplayed(); 
        (await this.btnContinue).click();
        (await this.lblThirdPartyBank).waitForDisplayed();
        (await this.lblThirdPartyBank).click();
        (await this.lblAccTypeSavings).waitForDisplayed();
        (await this.lblAccTypeSavings).click();
        (await this.lblBeneficiaryType).waitForDisplayed();
        (await this.lblBeneficiaryType).click();
        await this.addBeneficiaryDetails("121145", "Jon", "Snow");
        (await this.ddlBranch).waitForDisplayed();
        (await this.ddlBranch).click();
        (await this.branchName).waitForDisplayed();
        (await this.branchName).click();

        await CommonsPage.delay(5);

        (await CommonsPage.btnContinue).waitForEnabled();
        await expect(CommonsPage.btnContinue).toBeEnabled(); 
        (await CommonsPage.btnContinue).click()
        await expect(CommonsPage.findLabelThatContainsText('New account added!')).toBeDisplayed(); 
    }

}

export default new AddBeneficiaryPage()