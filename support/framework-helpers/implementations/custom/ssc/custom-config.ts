import { injectable } from "inversify";

import { ICustomConfig } from "../../../interfaces/custom/custom-config";
import { LogginLevel } from "tabcorp-cucumber-protractor-framework-v2";

@injectable()
export class SSCCustomConfig implements ICustomConfig {
  jurisdictions: string;
  logginLevel: LogginLevel;
  loginPromptCheckUpDelay: number;
  mockServerURL: string;
  fakeDataPath: string;
  jsonPayloadPath: string;
  urlsPath: string;
}
