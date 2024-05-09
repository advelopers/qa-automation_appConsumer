import Gestures from '../../commons/gestures';
import Page from './page';

class CommonsPage extends Page {

    get btnBackBtn() { return $('//android.widget.Button[@content-desc="WelcomeScreen, back"]/android.view.ViewGroup') }
    get txtFldPIN() {return $('//*[@resource-id="pin-input"]')}
    get btnContinue() {return $('//*[@text="Continue"]')}

    get btnAnotherTransfer() {return $('//*[@resource-id="another-transfer"]')}
    get btnGoToHome() {return $('//*[@resource-id="home"]')}

    async validate(): Promise<void> {
        await this.btnBackBtn;
    }

    /**
     * General Methods for finding elements by specifics texts
    **/

    // async findlabelbytext(text: string) {
    //     const elem = await $('//*[@text="' + text + '"]');
    //     //elem.touchScroll(100, 100)
    //     return elem;
    // }

    //Another find label by text function, will potentially replace the original after iOS implentation is completed
    async findlabelbytext(text:string){
        const elem = driver.isAndroid ? await $('//*[@text="' + text + '"]') : await $('//XCUIElementTypeStaticText[@value="' + text + '"]');
        return elem;
    }

    // // async findLabelThatContainsText(text:string){
    // //     const elem = await $('//*[contains(@text,"'+text+'")]');
    // //     //elem.touchScroll(100, 100)
    // //     return elem;
    // }

    //Another find label that contains text function, will potentially replace the original after iOS implentation is completed
    async findLabelThatContainsText(text:string){
        const elem = driver.isAndroid ? await $('//*[contains(@text,"'+text+'")]') : await $('**/XCUIElementTypeStaticText[`value CONTAINS[cd] "'+text+'"`]');
        return elem;
    }

    // async tapbytext(text: string) {
    //     try {
    //         const elem = await $('//*[@text="' + text + '"]');
    //         await elem.click();
    //       } catch (error) {
    //           // Sometimes the element it self is not clickable and we need to find superior parent
    //           // like a label inside a clickable DIV - BOX
    //         console.error(error);
    //         const elem = await $('//*[@text="' + text + '"]/..');
    //         await elem.click();
    //       }
    // }

    //Another tap by text function, will potentially replace the original after iOS implentation is completed
    async tapbytext(text:string){
        try{
            if(driver.isAndroid){
                const elem = await $('//*[@text="' + text + '"]');
                await elem.click();
            }else
            {
                const elem = await $('//XCUIElementTypeStaticText[@value="' + text + '"]')
                await elem.click();
            }
        }catch(error){
            console.log(error);
            const elem = driver.isAndroid ? await $('//*[@text="' + text + '"]/..') : await $('//XCUIElementTypeStaticText[@value="' + text + '"]/..');
            await elem.click();
        }
    }

    async tapByTextContains(text:string){
        try{
            if(driver.isAndroid){
                const elem = await $('//*[contains(@text,"'+text+'")]');
                await elem.click();
            }else
            {
                const elem = await $('**/XCUIElementTypeStaticText[`value CONTAINS[cd] "'+text+'"`]')
                await elem.click();
            }
        }catch(error){
            console.log(error);
            const elem = driver.isAndroid ? await $('//*[contains(@text,"'+text+'")]/..') : await $('**/XCUIElementTypeStaticText[`value CONTAINS[cd] "'+text+'"`]/..');
            await elem.click();
        }
    }

    async delay(ms: number) {
        const seconds = ms * 1000;
        return new Promise(resolve => setTimeout(resolve, seconds));
    }

    async usenumpad(element:WebdriverIO.Element,number: string) {
        await this.delay(3);
        await element.click();
        for (const char of number) {
            console.log(char);
            await element.sendKeys([char]);
            await this.delay(5);
        }
        await driver.hideKeyboard();
        await this.delay(2);
    }

    /**
     * Swipes confirmation slider using like a drag & drop method where I drag the confirmation swiper element and drops it in another element of my choice
     */
    async confirmationSwipe(source:WebdriverIO.Element, destination:WebdriverIO.Element) {

        driver.performActions([
            {
                type:'pointer',
                id:'finger1',
                parameters:{pointerType:'touch'},
                actions:[
                    {type:'pointerMove', duration:0, origin: source, x:0, y:0},
                    {type: 'pointerDown', button:0},
                    {type: 'pause', duration:100},
                    {type:'pointerMove', duration:1000, origin:destination, x:0, y:0},
                    { type: 'pointerUp', button: 0 },
                ]
            }
        ]);
        
    }

    async checkIfDisplayedAfterSwipe(elem:WebdriverIO.Element, maxScroll:number, amount:number){

        amount = 0;
        const screenSize = driver.getWindowRect();
        const from = {
        x: (await screenSize).width / 2,
        y: (await screenSize).height - 100,
    };
        const to = {
        x: (await screenSize).width / 2,
        y: 0 + 100,
    }

        if(!elem.isDisplayed() && amount<=maxScroll){
            Gestures.swipe(from, to)
            this.checkIfDisplayedAfterSwipe(elem, maxScroll, amount + 1)
        } else if( amount > maxScroll){
            throw new Error(`The element '${elem}' cannot be found`)
        }
    }

    async tapEditBtn(){
        await driver.touchAction({
            action: 'tap',
            x: 915,
            y:289
        })
    }

    async tapByCoordinates(x:number, y:number){
        await driver.touchAction({
            action: 'tap',
            x: x,
            y:y
        })
    }
}

export default new CommonsPage();
