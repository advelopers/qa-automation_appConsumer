import Page from './page';
import axios from 'axios';

/**
 * Receives SMS validation code screen
 */
class SignUpOtpPage extends Page {
    get btnBackBtn() { return $('//android.widget.Button[@content-desc="Go back"]') }
    get lblVerifyNumber() { return $('//*[@text="Verify your number"]') }
    get otpFld() { return $('(//*[@resource-id="code"])') }
    get lblPhoneNumber() { return $('//*[@text="Text message sent to"]') }
    get btnDifferentPhone() { return $('//*[@text="Send to different number"]') }
    get btnResend() { return $('//*[@text="Resend code"]') }

    /**
     *  Modal resend Code
     */
    
    get lblButtonModal() { return $('//*[@resource-id="button"]') }


    async validate(): Promise<void> {
        //await expect(this.btnBackBtn).toBeDisplayed();
        await expect(this.lblVerifyNumber).toBeDisplayed();
        //await expect(this.iptSms).toBeDisplayed();
        await expect(this.lblPhoneNumber).toBeDisplayed();
        //await expect(this.lblPhoneNumberFormat).toBeDisplayed();
        await expect(this.btnDifferentPhone).toBeDisplayed();
        await expect(this.btnResend).toBeDisplayed();
    }

    async getSmsCode2(): Promise<string> {
        return axios.get("https://twilio-api-nautilus.herokuapp.com/phones/+12514187060/getsms").then((response) => {
            console.log('------------------------- Var code ---------------------');
            console.log(response.data.code);
            return response.data.code;
        }, (error) => {
            console.log(error);
            return "000000"
        });
    }

    async getSmsCode(phone_num:string) {
        const response = await axios.get("https://twilio-api-nautilus.herokuapp.com/phones/"+phone_num+"/getsms")
        return response.data.code
    }

    async inputOTP(otp:string){

        const otpFlds = (await $$('(//*[@resource-id="code"])'));

        try{
            otpFlds.forEach((otpFld, index)=>{
                otpFld.setValue(otp[index])
            })
        }
        catch(error){
            console.log(error)
            console.log("OTP was not received")
        }      

    }
}

export default new SignUpOtpPage();
