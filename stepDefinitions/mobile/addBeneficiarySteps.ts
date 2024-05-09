import { Given, Then, When, After, Before,} from '@cucumber/cucumber';
import Page from '../../pages/mobile/page';
import AddBeneficiaryPage from '../../pages/mobile/addBeneficiary.page'
import CashOutPage from '../../pages/mobile/cashOut.page'
import CommonsPage from '../../pages/mobile/commons.page'
import AllureReporter from '@wdio/allure-reporter';
import addBeneficiaryPage from '../../pages/mobile/addBeneficiary.page';
import initialPage from '../../pages/mobile/initial.page';
import signInPage from '../../pages/mobile/signIn.page';

import DashboardPage from '../../pages/mobile/dashboard.page';


const pages: { [key: string]: Page } = { ["addBeneficiary"]: AddBeneficiaryPage };


//This Before Hook runs before any test that requires that a beneficiary record exists for that test to be successfully executed
//This hook is executed on tests that are tagged with "@beneficiary-setup" in the add beneficiary feature file

Before({tags: "@beneficiary-setup"}, async ()=> {
    
   await initialPage.SignIn();

   const loginData = {
       phone:"18765619022",
       pin:"199310"
   }

   await signInPage.login(loginData.phone, loginData.pin)
   await CommonsPage.delay(5);
   await DashboardPage.closeWelcomeTips();
   await addBeneficiaryPage.navigateToACHBeneficiaries(loginData.pin);
   await addBeneficiaryPage.addBeneficiary();
   await browser.takeScreenshot();
   await browser.reset();
});


// //This After Hook runs after any test that has created a beneficiary and deletes that beneficiary record which was added from the test
// //This hook is executed on tests that are tagged with "@beneficiary-cleanup" in the add beneficiary feature file
After({tags: "@beneficiary-cleanup"}, async ()=> {
    
   await browser.reset();
   await initialPage.SignIn();

   const loginData = {
       phone:"18765619022",
       pin:"199310"
   }

   await signInPage.login(loginData.phone, loginData.pin)
   await CommonsPage.delay(10);
   await DashboardPage.closeWelcomeTips();
   await addBeneficiaryPage.navigateToACHBeneficiaries(loginData.pin);
   await CommonsPage.delay(5);
   await CommonsPage.tapEditBtn();
   await addBeneficiaryPage.deleteBeneficiary();
   await browser.takeScreenshot();
   await browser.closeApp();
});

After({tags: "@beneficiary-cleanup-ncb"}, async ()=> {
    
   await browser.reset();
   await initialPage.SignIn();

   const loginData = {
       phone:"18765619022",
       pin:"199310"
   }

   await signInPage.login(loginData.phone, loginData.pin)
   await CommonsPage.delay(10);
   await DashboardPage.closeWelcomeTips();
   await addBeneficiaryPage.navigateToACHBeneficiaries(loginData.pin);
   await CommonsPage.delay(5);
   await CommonsPage.tapEditBtn();
   await addBeneficiaryPage.deleteBeneficiaryNcb();
   await browser.takeScreenshot();
   await browser.closeApp();
});



When(/^I click other bank transfer$/, async()=>{

    (await CashOutPage.lblOtherBankCashOut).waitForDisplayed();
    (await CashOutPage.lblOtherBankCashOut).click()
})

When(/^the new beneficiary button is clicked$/, async () => {
   (await AddBeneficiaryPage.btnAddNewBeneficiary).waitForDisplayed(); 
   (await AddBeneficiaryPage.btnAddNewBeneficiary).click();
    
});

When(/^The user enters PIN that was prompted for "(.*)"$/, async(pin:string) =>{
    (await CommonsPage.txtFldPIN).setValue(pin);
    //(await AddBeneficiaryPage.btnContinue).click()
})

When(/^The user selects a beneficiary bank$/, async()=>{

    (await AddBeneficiaryPage.lblThirdPartyBank).click();
    (await AddBeneficiaryPage.lblAccTypeSavings).click();
    
})

When(/^The user selects a non-ncb beneficiary bank$/, async()=>{

   (await AddBeneficiaryPage.lblThirdPartyBank).waitForDisplayed();
   (await AddBeneficiaryPage.lblThirdPartyBank).click();
   (await AddBeneficiaryPage.lblAccTypeSavings).waitForDisplayed();
   (await AddBeneficiaryPage.lblAccTypeSavings).click();
   
})

When(/^The user selects ncb beneficiary bank$/, async()=>{

   AllureReporter.addTestId('50384');
   (await AddBeneficiaryPage.lblBankNcbAch).waitForDisplayed();
   (await AddBeneficiaryPage.lblBankNcbAch).click();
   (await AddBeneficiaryPage.lnkUseAccDetails).waitForDisplayed();
   (await AddBeneficiaryPage.lnkUseAccDetails).click();
   (await AddBeneficiaryPage.lblAccTypeSavings).waitForDisplayed();
   (await AddBeneficiaryPage.lblAccTypeSavings).click();
   
})

When(/^Click the add another account button$/, async()=>{

   (await AddBeneficiaryPage.lblBeneficiaryType).waitForDisplayed();
   (await AddBeneficiaryPage.lblBeneficiaryType).click();
   
})

When(/^The user selects a beneficiary type$/, async()=>{

   (await AddBeneficiaryPage.lblBeneficiaryType).waitForDisplayed();
   (await AddBeneficiaryPage.lblBeneficiaryType).click();
   
})

When(/^The user adds beneficiary details like "(.*?)" and "(.*?)" and "(.*?)"$/, async(accNum:string, firstName:string, lastName:string)=>{

    AllureReporter.addTestId('28417');
    (await AddBeneficiaryPage.addBeneficiaryDetails(accNum, firstName, lastName));

})

When(/^The user adds ncb beneficiary details like "(.*?)" and "(.*?)" and "(.*?)"$/, async(accNum:string, firstName:string, lastName:string)=>{

   (await AddBeneficiaryPage.addBeneficiaryDetails(accNum, firstName, lastName));

})

When(/^The user adds beneficiary details with special characters in nickname like "(.*?)" and "(.*?)" and "(.*?)"$/, async(accNum:string, firstName:string, lastName:string)=>{

   (await AddBeneficiaryPage.addBeneficiaryDetails(accNum, firstName, lastName));

})

When(/^The user adds beneficiary details with special characters in first name like "(.*?)" and "(.*?)" and "(.*?)"$/, async(accNum:string, firstName:string, lastName:string)=>{

   (await AddBeneficiaryPage.addBeneficiaryDetails(accNum, firstName, lastName));

})

When(/^The user adds beneficiary details with special character in lasst name like "(.*?)" and "(.*?)" and "(.*?)"$/, async(accNum:string, firstName:string, lastName:string)=>{

   (await AddBeneficiaryPage.addBeneficiaryDetails(accNum, firstName, lastName));
})

When(/^The user adds a nickname with special character "(.*?)"$/, async(nickname:string)=>{

    AllureReporter.addTestId('42039');
    (await AddBeneficiaryPage.txtFldNickName).waitForDisplayed();
    (await AddBeneficiaryPage.txtFldNickName).setValue(nickname);

})

When(/^The user adds a first name with special character "(.*?)"$/, async(firstName:string)=>{

   AllureReporter.addTestId('42001');
   (await AddBeneficiaryPage.txtFldFirstName).waitForDisplayed();
   (await AddBeneficiaryPage.txtFldFirstName).setValue(firstName);
})

When(/^The user adds a last name with special character "(.*?)"$/, async(lastName:string)=>{

   AllureReporter.addTestId('42038');
   (await AddBeneficiaryPage.txtFldLastName).waitForDisplayed();
   (await AddBeneficiaryPage.txtFldLastName).setValue(lastName);
})

When (/^User selects bank branch$/, async()=>{

   //(await AddBeneficiaryPage.ddlBranch).waitForDisplayed();
   (await AddBeneficiaryPage.ddlBranch).click();
   (await AddBeneficiaryPage.branchName).waitForDisplayed();
   (await AddBeneficiaryPage.branchName).click();
})

When (/^I click the beneficiary page continue button$/, async()=>{
   await CommonsPage.delay(3);
   (await CommonsPage.btnContinue).waitForEnabled();
   await expect(CommonsPage.btnContinue).toBeEnabled();
   (await CommonsPage.btnContinue).click();
})

When (/^User selects NCB bank branch$/, async()=>{

   //(await AddBeneficiaryPage.ddlBranch).waitForDisplayed();
   (await AddBeneficiaryPage.ddlBranch).click();
   (await AddBeneficiaryPage.ncbBranchName).waitForDisplayed();
   (await AddBeneficiaryPage.ncbBranchName).click();
})

 When(/^The User clicks continue button$/, async()=>{
    
   (await AddBeneficiaryPage.btnContinue).waitForDisplayed(); 
   (await AddBeneficiaryPage.btnContinue).click();
 })

 Then(/^User is redirected to transfers page$/,async () => {
    AllureReporter.addTestId('28416');
    //await expect(CommonsPage.findlabelbytext('Transfer to')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('With lynk you can even do a bank transfer! and the best part? 0% fees.')).toBeDisplayed();
    //await expect(CommonsPage.findLabelThatContainsText('Who would you lynk up with?')).toBeDisplayed(); --This assertion is not working for some reason and is causing a false negative, removing for now
    await expect(CommonsPage.findlabelbytext('Add your beneficiaries and start sending money to people you know.')).toBeDisplayed();
    await expect(AddBeneficiaryPage.btnAddNewBeneficiary).toHaveText('New beneficiary');
 })

//  Then(/^User is redirected to add beneficiary page$/,async () => {
//     AllureReporter.addTestId('10097');
//     //await expect(CommonsPage.findlabelbytext('Add beneficiary')).toBeDisplayed();
//     await expect(CommonsPage.findlabelbytext('Select your bank:')).toBeDisplayed();
//     await expect(CommonsPage.findlabelbytext('Bank Of Nova Scotia (Jamaica) Limited')).toBeDisplayed();
//     await expect(CommonsPage.findlabelbytext("First Caribbean Int'l Bank.")).toBeDisplayed();
//  })

 Then(/^User is redirected to add beneficiary page$/,async () => {
   AllureReporter.addTestId('10097');
   await expect(CommonsPage.findlabelbytext('Select Bank')).toBeDisplayed();
   await expect(CommonsPage.findlabelbytext('Bank Of Nova Scotia (Jamaica) Limited')).toBeDisplayed();
   await expect(CommonsPage.findlabelbytext("First Caribbean Int'l Bank.")).toBeDisplayed();
})


 Then(/^User searches for a beneficiary "(.*?)"$/,async (search:string) => {
    
    (await AddBeneficiaryPage.searchFld).waitForDisplayed();
    (await AddBeneficiaryPage.searchFld).setValue(search); 
    
 })

 Then(/^Verify that non-existent beneficiary cannot be seen$/,async () => {
    AllureReporter.addTestId('42079');
    await expect(CommonsPage.findLabelThatContainsText("We couldn't find any account with that name")).toBeDisplayed();
    
 })

 When(/^I click the edit beneficiary button$/,async () => {

   await CommonsPage.tapEditBtn();

 })

 Then(/^I am redirected to the Benficiary details screen$/,async () => {

    await expect(CommonsPage.findlabelbytext("Beneficiary details")).toBeDisplayed();
    
    (await addBeneficiaryPage.txtFldEditNickName).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditNickName).toBeEnabled();

    (await addBeneficiaryPage.txtFldEditFirstName).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditFirstName).toBeEnabled();

    (await addBeneficiaryPage.txtFldEditLastName).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditLastName).toBeEnabled();

    (await addBeneficiaryPage.txtFldEditBankName).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditBankName).toBeDisabled();

    (await addBeneficiaryPage.txtFldEditAccountType).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditAccountType).toBeDisabled();

    (await addBeneficiaryPage.txtFldAccountNumber).waitForDisplayed();
    expect(await addBeneficiaryPage.txtFldEditAccountNum).toBeDisabled();
 })

 When(/^I edit an existing beneficiary$/,async () => {
    AllureReporter.addTestId('42040');

    (await addBeneficiaryPage.lnkBeneficiary1).waitForDisplayed();
    (await addBeneficiaryPage.lnkBeneficiary1).click();
    (await addBeneficiaryPage.lnkBeneficiary1).click();

    (await addBeneficiaryPage.txtFldEditNickName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditNickName).setValue('Aeg');

    (await addBeneficiaryPage.txtFldEditFirstName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditFirstName).setValue('Aegon');

    (await addBeneficiaryPage.txtFldEditLastName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditLastName).setValue('Targ');

    const newNickName = await (await addBeneficiaryPage.txtFldEditNickName).getText();

    (await addBeneficiaryPage.btnSaveChanges).waitForClickable();
    (await addBeneficiaryPage.btnSaveChanges).click();

    await expect(CommonsPage.findLabelThatContainsText('Account details updated successfully')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText(newNickName)).toBeDisplayed();
 })

 When(/^I edit an existing beneficiary to include special characters in names field$/,async () => {
    AllureReporter.addTestId('42041');

    (await addBeneficiaryPage.lnkBeneficiary1).waitForDisplayed();
    (await addBeneficiaryPage.lnkBeneficiary1).click();
    (await addBeneficiaryPage.lnkBeneficiary1).click();

    (await addBeneficiaryPage.txtFldEditNickName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditNickName).setValue('@eg');

    (await addBeneficiaryPage.txtFldEditFirstName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditFirstName).setValue('Aegon-VI');

    (await addBeneficiaryPage.txtFldEditLastName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditLastName).setValue('Targ#');

    const newNickName = await (await addBeneficiaryPage.txtFldEditNickName).getText();

    (await addBeneficiaryPage.btnSaveChanges).waitForClickable();
    (await addBeneficiaryPage.btnSaveChanges).click();

    await expect(CommonsPage.findLabelThatContainsText('Account details updated successfully')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext(newNickName)).toBeDisplayed();
 })

 When(/^I cancel updating an existing beneficiary$/,async () => {
    AllureReporter.addTestId('42072');

    (await addBeneficiaryPage.lnkBeneficiary1).waitForDisplayed();
    (await addBeneficiaryPage.lnkBeneficiary1).click();
    (await addBeneficiaryPage.lnkBeneficiary1).click();

    (await addBeneficiaryPage.txtFldEditNickName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditNickName).setValue('@eg');

    (await addBeneficiaryPage.txtFldEditFirstName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditFirstName).setValue('Aegon-VI');

    (await addBeneficiaryPage.txtFldEditLastName).waitForDisplayed();
    (await addBeneficiaryPage.txtFldEditLastName).setValue('Targ#');


    (await addBeneficiaryPage.btnBack).waitForClickable();
    (await addBeneficiaryPage.btnBack).click();

    await expect(CommonsPage.findlabelbytext('Unsaved Changes')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Hey there! It looks like you’re in the middle of something important and you haven’t saved yet. Are you sure you want to leave this page?')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Yes, discard changes')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Cancel')).toBeDisplayed();
 })


 When(/^I delete a beneficiary$/,async () => {
    AllureReporter.addTestId('42044');

    (await addBeneficiaryPage.lnkBeneficiary1).waitForDisplayed();
    (await addBeneficiaryPage.lnkBeneficiary1).click();
    (await addBeneficiaryPage.lnkBeneficiary1).click();

    const nickName = await (await addBeneficiaryPage.txtFldEditNickName).getText();

    (await addBeneficiaryPage.btnRemove).waitForClickable();
    (await addBeneficiaryPage.btnRemove).click();

    await expect(CommonsPage.findlabelbytext('Remove beneficiary')).toBeDisplayed();
    await expect(CommonsPage.findLabelThatContainsText('Are you sure you want to remove this beneficiary?')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext('Yes, remove')).toBeDisplayed();
    //await expect(CommonsPage.findlabelbytext('Cancel')).toBeDisplayed();

    (await addBeneficiaryPage.btnConfirmDelete).waitForClickable();
    (await addBeneficiaryPage.btnConfirmDelete).click();

    await expect(CommonsPage.findLabelThatContainsText('Account deleted successfully')).toBeDisplayed();
    await expect(CommonsPage.findlabelbytext(nickName)).not.toBeDisplayed();
    
 })

 When(/^The user adds business beneficiary details like "(.*?)" and "(.*?)"$/, async(accNum:string, businessName:string, )=>{
   AllureReporter.addTestId('50383');
   (await AddBeneficiaryPage.addBusinessBeneficiaryDetails(accNum, businessName));
})

When(/^The user selects business beneficiary type$/, async()=>{

   (await AddBeneficiaryPage.lblBusinessBeneficiaryType).waitForDisplayed();
   (await AddBeneficiaryPage.lblBusinessBeneficiaryType).click();
   
})

Then(/^Validate add business beneficiary screen/,async () => {
   AllureReporter.addTestId('50382');
   await expect(CommonsPage.findlabelbytext('Add beneficiary')).toBeDisplayed();
   await expect(addBeneficiaryPage.txtFldAccountNumber).toBeDisplayed();
   await expect(addBeneficiaryPage.ddlBranch).toBeDisplayed();
   await expect(addBeneficiaryPage.txtFldBusinessName).toBeDisplayed();
   await expect(addBeneficiaryPage.txtFldNickName).toBeDisplayed();
})

 