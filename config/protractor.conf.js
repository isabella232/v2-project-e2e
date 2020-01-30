"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const moment = require("moment");
const e2econfig = require("./e2e.conf.json");
const protractor_1 = require("protractor");
const jsonReports = path.join(process.cwd(), 'e2e/reports/json');
const htmlReports = path.join(process.cwd(), 'e2e/reports/html');
const screenshots = path.join(process.cwd(), 'e2e/reports/screenshots');
let scenario_tags = [];
scenario_tags.push("~@wip");
const setupDeviceEmulation = () => {
    const tags = process.env.SSC_PLATFORM_TAG || "@desktop";
    const isMobile = tags.includes('@mobile');
    const isTablet = tags.includes('@tablet');
    const isDesktop = tags.includes('@desktop');
    if (isMobile) {
        return {
            'deviceName': 'iPhone 7'
        };
    }
    else if (isTablet) {
        return {
            'deviceName': 'iPad'
        };
    }
    else if (isDesktop) {
        return undefined;
    }
};
const cucumberReporterOptions = {
    //ignore: [],
    jsonDir: jsonReports,
    reportPath: htmlReports,
    metadata: {
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Lott Protractor Tests' },
            { label: 'Base Url', value: e2econfig.baseUrl },
            { label: 'Execution Start Time', value: moment().format() }
        ]
    }
};
if (process.env.SSC_WEB_TAG) {
    scenario_tags.push(process.env.SSC_WEB_TAG);
}
else {
    scenario_tags.push("@smoke");
}
if (process.env.SSC_PLATFORM_TAG) {
    scenario_tags.push(process.env.SSC_PLATFORM_TAG);
}
else {
    scenario_tags.push("@desktop");
}
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless', 'disable-web-security=true', '--no-sandbox', '--disable-infobars'
            ],
            mobileEmulation: setupDeviceEmulation(),
            prefs: {
                'profile.default_content_setting_values.geolocation': false,
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        },
    },
    specs: [e2econfig.features],
    baseUrl: e2econfig.baseUrl,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: e2econfig.testsConfigurationVariables.allScriptsTimeout,
    cucumberOpts: {
        require: e2econfig.cucumberRequire,
        format: e2econfig.report,
        tags: scenario_tags
    },
    // suites: {
    //     smoke: 'dist/**/*.js',
    //     full: 'dist/**/*.js'
    // },
    // generate test report folder
    onPrepare: function () {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        if (!fs.existsSync(htmlReports)) {
            mkdirp.sync(htmlReports);
        }
        if (!fs.existsSync(screenshots)) {
            mkdirp.sync(screenshots);
        }
        // pass custom & required config parameters
        protractor_1.browser.params.requiredConfig = (e2econfig.testsConfigurationVariables || { required: null }).required;
        protractor_1.browser.params.customConfig = (e2econfig.testsConfigurationVariables || { custom: null }).custom;
        protractor_1.browser.driver.manage().window().setSize(1680, 1050);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBYUEsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLDZDQUE2QztBQUM3QywyQ0FBcUM7QUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUNqRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFDeEUsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFNUIsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxJQUFJLEdBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxVQUFVLENBQUM7SUFDakUsTUFBTSxRQUFRLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxNQUFNLFFBQVEsR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sU0FBUyxHQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFaEQsSUFBSSxRQUFRLEVBQUU7UUFDWixPQUFPO1lBQ0wsWUFBWSxFQUFFLFVBQVU7U0FDekIsQ0FBQTtLQUNGO1NBQU0sSUFBSSxRQUFRLEVBQUU7UUFDbkIsT0FBTztZQUNMLFlBQVksRUFBRSxNQUFNO1NBQ3JC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