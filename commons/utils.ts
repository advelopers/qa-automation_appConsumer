import url from 'url';
import axios from 'axios';
/**
 * Create a cross platform solution for opening a deep link
 */
export async function openDeepLinkUrl(url:string) {
    const prefix = 'https://';

    if (driver.isAndroid) {
        // Life is so much easier
        return driver.execute('mobile:deepLink', {
            url: `${ prefix }${ url }`,
            package: 'us.lynk.consumer',
        });
    }

    // We can use `driver.url` on iOS simulators, but not on iOS real devices. The reason is that iOS real devices
    // open Siri when you call `driver.url('')` to use a deep link. This means that real devices need to have a different implementation
    // then iOS sims
    // iOS sims and real devices can be distinguished by their UDID. Based on these sources there is a diff in the UDIDS
    // - https://blog.diawi.com/2018/10/15/2018-apple-devices-and-their-new-udid-format/
    // - https://www.theiphonewiki.com/wiki/UDID
    // iOS sims have more than 1 `-` in the UDID and the UDID is being
    const simulatorRegex = new RegExp('(.*-.*){2,}');

    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test( driver.capabilities.udid as string )){
        await driver.url(`${ prefix }${ url }`);
    } else {
        // Else we are a real device and we need to take some extra steps
        // Launch Safari to open the deep link
        await driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

        // Add the deep link url in Safari in the `URL`-field
        // This can be 2 different elements, or the button, or the text field
        // Use the predicate string because  the accessibility label will return 2 different types
        // of elements making it flaky to use. With predicate string we can be more precise
        const addressBarSelector = 'label == "Address" OR name == "URL"';
        const urlFieldSelector = 'type == "XCUIElementTypeTextField" && name CONTAINS "URL"';
        const addressBar = $(`-ios predicate string:${ addressBarSelector }`);
        const urlField = await $(`-ios predicate string:${urlFieldSelector}`);

        // Wait for the url button to appear and click on it so the text field will appear
        // iOS 13 now has the keyboard open by default because the URL field has focus when opening the Safari browser
        if (!(await driver.isKeyboardShown())) {
            await (await addressBar).waitForDisplayed();
            await (await addressBar).click();
        }

        // Submit the url and add a break
        await urlField.setValue(`${ prefix }${ url }\uE007`);
    }

    /**
     * PRO TIP:
     * if you started the iOS device with `autoAcceptAlerts:true` in the capabilities then Appium will auto accept the alert that should
     * be shown now. You can then comment out the code below
     */
    // Wait for the notification and accept it
    // When using an iOS simulator you will only get the pop-up once, all the other times it won't be shown
    try {
        const openSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'Open\'';
        const openButton = await $(`-ios predicate string:${openSelector}`);
        // Assumption is made that the alert will be seen within 2 seconds, if not it did not appear
        await openButton.waitForDisplayed({ timeout: 2000 });
        await openButton.click();
    } catch (e) {
        // ignore
    }
}

/**
 * Function generates a token that is used as Authorization for any other API calls required
 */
export async function getToken(){
    const endpoint = 'https://auth.beta.lynk.us/oauth/token';
        const params = new url.URLSearchParams({
            grant_type:'http://auth0.com/oauth/grant-type/password-realm',
            username:'lynk.merchant@yopmail.com',
            password:'9a97Dr!d',
            audience:'https://beta.lynkbiz.us',
            client_id:'9i4eDBUD41z1QeLSOqPciU2Q5umN3QVf',
            realm:'Lynk-Merchant-Accounts'
        })


        const response = await axios.post(endpoint, params.toString());

        return response.data.access_token
}

/**
 * This function generates and returns the short URL for a Pay With Lynk (PWL) link
 */
export async function generatePWL(amt:number){
    const endpoint = 'https://qa-krakend.core-nautilus.net/bff-mcp-pay/customer-transactions'
        const access_token = await this.getToken()
        const payload = {
            amount_to_pay: amt,
            currency: "JMD",
            description: ""
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }

        const response = await axios({
            method: 'post',
            headers:headers,
            url: endpoint,
            data: payload
          })
          return response.data.short_url.slice(8)
}