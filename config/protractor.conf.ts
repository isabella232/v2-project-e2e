import * as protractor from 'protractor';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as e2econfig from './e2e.conf.json';
import { browser } from 'protractor';

const jsonReports = path.join(process.cwd(), 'e2e/reports/json');
const htmlReports = path.join(process.cwd(), 'e2e/reports/html');
const screenshots = path.join(process.cwd(), 'e2e/reports/screenshots');
const scenarioTags = [];
scenarioTags.push('~@wip');

if (process.env.SSC_WEB_TAG)
  scenarioTags.push(process.env.SSC_WEB_TAG);
else
  scenarioTags.push('@smoke');

export const config: protractor.Config = {

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless', 'disable-web-security=true', '--no-sandbox', '--disable-infobars'
      ],
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

  allScriptsTimeout: e2econfig.testsConfigurationVariables.allScriptsTimeout,

  cucumberOpts: {
    require: e2econfig.cucumberRequire,
    format: e2econfig.report,
    tags: scenarioTags
  },

  onPrepare: function () {

    if (!fs.existsSync(jsonReports))
      mkdirp.sync(jsonReports);

    if (!fs.existsSync(htmlReports))
      mkdirp.sync(htmlReports);

    if (!fs.existsSync(screenshots))
      mkdirp.sync(screenshots);

    browser.params.requiredConfig = (e2econfig.testsConfigurationVariables || {required:null}).required;
    browser.params.customConfig = (e2econfig.testsConfigurationVariables || {custom:null}).custom;
    browser.driver.manage().window().setSize(1680, 1050);
  },
};
