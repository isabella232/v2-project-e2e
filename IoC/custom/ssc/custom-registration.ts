import { Container } from 'inversify';

import { BASETYPES } from 'tabcorp-cucumber-protractor-framework-v2';
import { ICustomNavigationBehaviorHelper } from 'tabcorp-cucumber-protractor-framework-v2';
import { IWebElementLoader } from 'tabcorp-cucumber-protractor-framework-v2';
import { ILogger } from 'tabcorp-cucumber-protractor-framework-v2';

import { SSCWebElementLoader } from
  '../../../support/framework-helpers/implementations/custom/ssc/web-element-loader';
import { SSCCustomNavigationBehavior } from
  '../../../support/framework-helpers/implementations/custom/ssc/custom-navigation-behavior-helper';

import { SSCLogger } from '../../../support/logger/custom/ssc/logger';
import { PageURLHelper } from '../../../support/steps-helpers/custom/ssc/page-url-helper';
import { LoginHelper } from '../../../support/steps-helpers/custom/ssc/login-helper';
import { OperatorHelper } from '../../../support/steps-helpers/custom/ssc/operator-helper';

import { CustomConfig } from '../../../support/framework-helpers/interfaces/custom/custom-config';
import { CUSTOMTYPES } from './custom-types';

export const BaseCustomImplementationRegistration = (container: Container, customConfig: CustomConfig): void => {
  container.bind<CustomConfig>(CUSTOMTYPES.CustomConfig).toConstantValue(customConfig);
  container.bind<ICustomNavigationBehaviorHelper>(BASETYPES.CustomNavigationBehaviorHelper)
    .to(SSCCustomNavigationBehavior)
    .inSingletonScope();
  container.bind<IWebElementLoader>(BASETYPES.WebElementLoader).to(SSCWebElementLoader).inSingletonScope();
  container.bind<ILogger>(BASETYPES.Logger).to(SSCLogger);
};

export const CustomTypeRegistration = (container: Container) => {
  container.bind<PageURLHelper>(CUSTOMTYPES.PageURLHelper).to(PageURLHelper);
  container.bind<LoginHelper>(CUSTOMTYPES.LoginHelper).to(LoginHelper);
  container.bind<OperatorHelper>(CUSTOMTYPES.OperatorHelper).to(OperatorHelper);
};
