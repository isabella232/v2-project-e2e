import { LogginLevel } from "tabcorp-cucumber-protractor-framework-v2";

export interface ICustomConfig {
  loginPromptCheckUpDelay: number;
  logginLevel: LogginLevel;
  mockServerURL: string;
  jsonPayloadPath: string;
  fakeDataPath: string;
  urlsPath: string;
}
