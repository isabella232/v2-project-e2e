import { injectable } from 'inversify';

import { CustomConfig } from '../../../interfaces/custom/custom-config';
import { LogginLevel } from 'tabcorp-cucumber-protractor-framework-v2';

@injectable()
export class SSCCustomConfig implements CustomConfig {
  jurisdictions: string;
  logginLevel: LogginLevel;
  loginPromptCheckUpDelay: number;
  mockServerURL: string;
  fakeDataPath: string;
  jsonPayloadPath: string;
  urlsPath: string;
  operatorsPath: string;
}
