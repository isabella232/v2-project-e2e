import { injectable, inject } from "inversify";
import { ElementFinder } from "protractor";

import { IComponentsWait } from "tabcorp-cucumber-protractor-framework-v2";
import { WebElementHelper } from "tabcorp-cucumber-protractor-framework-v2";
import { HtmlHelper } from "tabcorp-cucumber-protractor-framework-v2";
import { BrowserWait } from "tabcorp-cucumber-protractor-framework-v2";
import { IJurisdictionHelper } from "tabcorp-cucumber-protractor-framework-v2";
import { BASETYPES } from "tabcorp-cucumber-protractor-framework-v2";
import { ICustomConfig } from "../../../framework-helpers/interfaces/custom/custom-config";
import { ICustomNavigationBehaviorHelper } from "tabcorp-cucumber-protractor-framework-v2";
import { PageHelper } from "tabcorp-cucumber-protractor-framework-v2";

import { CUSTOMTYPES } from "../../../../IoC/custom/ssc/custom-types";

@injectable()
export class SSCJurisdictionHelper implements IJurisdictionHelper {
  private readonly customConfig: ICustomConfig;
  private readonly customeNavigationBehaviorHelper: ICustomNavigationBehaviorHelper;
  private readonly pageHelper: PageHelper;
  // private readonly customConfig: ICustomConfig;
  // private readonly customConfig: ICustomConfig;
  // private readonly customConfig: ICustomConfig;

  constructor(@inject(CUSTOMTYPES.CustomConfig) customConfig : ICustomConfig,
              @inject(BASETYPES.WebElementHelper) elementHelper: WebElementHelper,
              @inject(BASETYPES.BrowserWait) BrowserWait: BrowserWait,
              @inject(BASETYPES.PageHelper) pageHelper: PageHelper,
              @inject(BASETYPES.CustomNavigationBehaviorHelper) customeNavigationBehaviorHelper: ICustomNavigationBehaviorHelper) {
    this.customConfig = customConfig;
    this.customeNavigationBehaviorHelper = customeNavigationBehaviorHelper;
    this.pageHelper = pageHelper;
  }

  public async selectJurisdiction(jurisdiction: string): Promise<void> {
    // select jurisdiction through UI
    throw new Error('not implemented')
  }

  public async isJurisdiction(jurisdiction: string): Promise<boolean> {
    // inspect page to determine if on the correct jurisdiction
    throw new Error('not implemented')
  }


  public async hardSetJurisdiction(jurisdiction: string): Promise<void> {
    const currentPage: string = this.customeNavigationBehaviorHelper.getCurrentPage();
    const currentURL = await this.customeNavigationBehaviorHelper.generateUrl(currentPage);
    const currentURLWithJurisdiction = currentURL + "?jurisdiction=" + jurisdiction;
    //console.log(currentURLWithJurisdiction);
    await this.pageHelper.navigateToUrl(currentURLWithJurisdiction);
  }
}
