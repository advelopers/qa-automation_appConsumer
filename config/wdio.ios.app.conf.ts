import { join } from "path";
import config from "./wdio.shared.local.appium.conf";

// ============
// Specs
// ============
config.specs = ["./features/mobile/*.feature"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "iOS",
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // This is `appium:` for all Appium Capabilities which can be found here
        // http://appium.io/docs/en/writing-running-appium/caps/
        "appium:deviceName": "iPhone 13",
        "appium:platformVersion": "16.4",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        //"appium:bundleId":'us.lynk.consumer',
       // bundleId:'us.lynk.consumer',
        // The path to the app
        "appium:app": join(process.cwd(), "./app/lynk.app"),
        "appium:noReset":true,
        
        //"appium:newCommandTimeout": 240,
        
        
    },
]

// config.reporters = [
//     'spec',
//     ['allure', {
//         outputDir: './allure-results-ios/',
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
// ];

exports.config = config;