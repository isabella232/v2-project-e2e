import { browser } from 'protractor';
import { injectable, inject } from 'inversify';

import { BASETYPES } from 'tabcorp-cucumber-protractor-framework-v2';
import { ICustomNavigationBehaviorHelper } from 'tabcorp-cucumber-protractor-framework-v2';
import { CUSTOMTYPES } from '../../../../IoC/custom/ssc/custom-types';
import { CustomConfig } from '../../../framework-helpers/interfaces/custom/custom-config';

@injectable()
export class LoginHelper {
  private readonly customConfig: CustomConfig;
  private readonly customeNavigationBehaviorHelper: ICustomNavigationBehaviorHelper;

  constructor(@inject(CUSTOMTYPES.CustomConfig) customConfig: CustomConfig,
            @inject(BASETYPES.CustomNavigationBehaviorHelper) customeNavigationBehaviorHelper:
             ICustomNavigationBehaviorHelper) {
    this.customeNavigationBehaviorHelper = customeNavigationBehaviorHelper;
    this.customConfig = customConfig;
  }

  public async navigateToSTSLoginPage(): Promise<void> {
    const pageName = 'sts login';
    const url = await this.customeNavigationBehaviorHelper.generateUrl(pageName);
    await this.customeNavigationBehaviorHelper.setCurrentPage(pageName);
    await browser.get(url);
  }

}
