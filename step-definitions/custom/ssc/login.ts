import { Given, Then } from 'cucumber';
import { browser, by } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

import { RegistrationIoC } from 'tabcorp-cucumber-protractor-framework-v2';
import { LoginHelper } from '../../../support/steps-helpers/custom/ssc/login-helper';
import { OperatorHelper } from '../../../support/steps-helpers/custom/ssc/operator-helper';
import { CUSTOMTYPES } from '../../../IoC/custom/ssc/custom-types';

const loginHelper = (): LoginHelper =>
  RegistrationIoC.getContainer()
    .get<LoginHelper>(CUSTOMTYPES.LoginHelper);

const operatorHelper = (): OperatorHelper =>
  RegistrationIoC.getContainer()
    .get<OperatorHelper>(CUSTOMTYPES.OperatorHelper);

Given(/^I navigate to the STS Login page$/, async () => {
  await loginHelper().navigateToSTSLoginPage();
});

Then(/^I am logged in as "([^"]*)"$/, async(operator: string) => {
  const retrieveOperator = operatorHelper().getOperator(operator).split(':');
  const currentOperatorUsername = retrieveOperator[0];
  const currentOperatorPassword = retrieveOperator[1];
  await browser.driver.findElement(by.css('[test-id="username"]')).sendKeys(currentOperatorUsername);
  await browser.driver.findElement(by.css('[test-id="password"]')).sendKeys(currentOperatorPassword);
  await browser.driver.findElement(by.css('[test-id="signin"]')).click();
});
