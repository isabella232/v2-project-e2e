import { BeforeAll, Before, After } from 'cucumber';
import { browser, protractor } from 'protractor';

import { RegistrationIoC } from 'tabcorp-cucumber-protractor-framework-v2';

import { BaseCustomImplementationRegistration, CustomTypeRegistration } from '../../IoC/custom/ssc/custom-registration';

BeforeAll(async function () {
  RegistrationIoC.addCustomRegistrationMethod({ callback: BaseCustomImplementationRegistration,
    args: [browser.params.customConfig] });

  RegistrationIoC.addCustomRegistrationMethod({ callback: CustomTypeRegistration });

  RegistrationIoC.triggerPublicRegistration(protractor, browser.params.requiredConfig);
});

const clearCache = () => {

  function clearStorage() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  return browser.executeScript(clearStorage);
};

Before(async function () {
  browser.ignoreSynchronization = true;
});

After(async function () {
  browser.switchTo().defaultContent();
  await clearCache();
});
