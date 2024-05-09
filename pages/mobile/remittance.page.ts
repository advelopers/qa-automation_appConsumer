import Page from './page';

class RemittancePage extends Page{

    get txtFldAddress1() {return $('//*[@text="Address Line 1"]')}
    get txtFldAddress2() {return $('//*[@text="Address Line 2"]')}
    get ddlParish() {return $('//*[@text="Parish"]')} //Parish Drop Down List (ddl)
    get txtFldCountry() {return $('//*[@text="Jamaica"]')}
    get btnContinue() {return $('//*[@text="Continue"]')}
    get txtFldRefNumber() {return $('//*[@resource-id="iptReferenceNumber"]')}
    get txtFldSearch() { return $('//*[@resource-id="handlesearch"]') }
    get lblParish() {return $('//*[@text="Kingston"]')}
    get btnProceedToReview() {return $('//*[@resource-id="action-button"]')}
    get ddlRelshipToSender() {return $('//*[@text="Relationship to Sender"]')} 
    get ddlTransPurpose() {return $('//*[@text="Purpose of Transaction"]')} 
    get ddlRecBirthCountry() {return $('//*[@text="Receiver Birth Country"]')} 
    get ddlWhyMoneyGram() {return $('//*[@text="Why do you typically use MoneyGram?"]')} 
    get ddlRecOccupation() {return $('//*[@text="Receiver Occupation"]')}
    get txtFldSecondryID() {return $('//*[@resource-id="receiverLegalIdNumber"]')} 
    get ddlSecondaryIDType() {return $('//*[@text="Receiver Secondary ID Type"]')} 
    get ddlItemRelToSender() {return $('//*[@text="Client"]')} 
    get ddlItemTransPurpose() {return $('//*[@text="Donation"]')}
    get ddlItemBirthCountry() {return $('//*[@text="Jamaica"]')}
    get ddlItemWhyMoneyGram() {return $('//*[@text="Business-Related"]')}
    get ddlItemOccupation() {return $('//*[@text="Automotive"]')}
    get ddlItemSecondaryIDType() {return $('//*[@text="TRN ID"]')}
    get remitReviewTitle() {return $('//*[@text="Remittance Review"]')}
    get remitConfirmationSwipe() {return $('//*[@text="Swipe up to collect remittance"]')}



    async validate(): Promise<void> {

        await expect(this.txtFldAddress1).toBeDisplayed();
        await expect(this.txtFldAddress2).toBeDisplayed();
        await expect(this.txtFldCountry).toBeDisplayed();
        await expect(this.ddlParish).toBeDisplayed();
    }
}

export default new RemittancePage()