import { browser } from 'protractor';
import { injectable, inject } from "inversify";

import { IComponentsWait } from 'tabcorp-cucumber-protractor-framework-v2';
import { BASETYPES } from 'tabcorp-cucumber-protractor-framework-v2';
import { IRequiredConfig } from 'tabcorp-cucumber-protractor-framework-v2';

@injectable()
export class SSCAngularComponentsWait implements IComponentsWait {

  private readonly requiredConfig: IRequiredConfig;

  constructor(@inject(BASETYPES.RequiredConfig) requiredConfig: IRequiredConfig) {
    this.requiredConfig = requiredConfig;
  }

  public async WaitForAllComponentsToLoad(reloadSamePage: boolean): Promise<void> {
    browser.waitForAngular();
  }

}



