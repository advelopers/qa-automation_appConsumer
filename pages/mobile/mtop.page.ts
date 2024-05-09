import Page from "./page";

class MtopPage extends Page{

    get btnCreateNew() {return $('//*[@text="Create new Top Up"]')}
    get iptFldSearch() {return $('//*[@text="Search name or number"]')}
    get lnkSyncContact() {return $('//*[@text="Sync Contacts"]')}
    get ddlCarrier() {return $('//*[@text="Carrier"]')}
    get ddlProduct() {return $('//*[@text="Product"]')}
    get ddlProductDataPlan() {return $('//*[@text="Data Plan"]')}
    get ddlOption() {return $('//*[@text="Digicel"]')}
    get lnkDataPlanOption() {return $('//*[@text="Data Add On 200 MB"]')}
    get ddlTopUpOption() {return $('//*[@text="Top Up"]')}
    get iptPhoneNum() {return $('//*[@text="+1 876"]')}
    get iptName() {return $('//*[@text="Name (optional)"]')}
    get btnTopUpAcc() {return $('//*[@text="Continue"]')}
    get lnkTopUpAmt() {return $('//*[@text="$100"]')}
    get btnSubmit() {return $('//*[@text="Submit for review"]')}
    get confirmationSlider() {return $('//*[@text="Swipe up to top up"]')}
    get txtFldPIN() {return $('//*[@resource-id="pin-input"]')}
    get btnContinue() {return $('//*[@resource-id="button"]')}
    get iptAmount() {return $('//*[@content-desc="Input money amount"]')}
    get lnkRecentTopUp() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.HorizontalScrollView/android.view.ViewGroup[1]')}
    get txtTopUpAmt() {return $('/hierarchy/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TextView[2]')}
    get btnCashIn() {return $('//*[@resource-id="button"]')}
    get btnGoBack() {return $('~Go back')}

    async validate() :Promise<void>{
          expect(this.btnCreateNew).toBeDisplayed();
          expect(this.iptFldSearch).toBeDisplayed();
          expect(this.lnkSyncContact).toBeDisplayed();
    }
    
}

export default new MtopPage