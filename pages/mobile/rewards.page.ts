import Page from './page'

class RewardsPage extends Page{

    get lnkInviteFriends() {return $('//*[@resource-id="invite-friends"]')}
    get lnkClaimBonus() {return $('//*[@resource-id="clain-bonus"]')}
    get txtFldRewardCode() {return $('//*[@resource-id="actionBtnCodeCopy"]')}
    //get lnkClaimBonus() {return $('//*[@resource-id="clain-bonus"]')}
    get btnInviteFriends() {return $('//*[@resource-id="actionBtnCodeShare"]')}
    get txtFldRedeemCode() {return $('//*[@resource-id="inputRedeemCodeContinue"]')}
    get btnRedeemCode() {return $('//*[@resource-id="btnRedeemCodeContinue"]')}

    async validate(): Promise<void> {
        await expect(this.lnkClaimBonus).toBeDisplayed()
        await expect(this.lnkInviteFriends).toBeDisplayed()
    }
}

export default new RewardsPage();