import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './features/mobile/*.feature'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel_4_API_31',
        'appium:platformVersion': '12.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './app/lynk-qa.apk'),
        // @ts-ignore
        //'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:appPackage':'us.lynk.consumer',
        'appium:appActivity':'us.lynk.consumer.SplashActivity',
        //'appium:newCommandTimeout': 240,
    },
];

// config.reporters = [
//     'spec',
//     ['allure', {
//         outputDir: './allure-results-android/',
//         disableWebdriverStepsReporting: true,
//         disableWebdriverScreenshotsReporting: false,
//         useCucumberStepReporter:true,
//         tmsLinkTemplate: 'https://dev.azure.com/nautilus-org/Lynk/_workitems/edit/{}',
        
//     }],
//     ['junit', {
//         outputDir: 'junit-report',
//         outputFileFormat: (options: { cid: string; capabilities: any; }): string =>  {
//             return `results-${options.cid}.${options.capabilities.platformName}.xml`
//         },
//     }]
// ],

exports.config = config;