import { IElementDefinition } from "tabcorp-cucumber-protractor-framework-v2";

export interface SSCElement extends IElementDefinition {
  pageName: string;
  name: string;
  dataId: string;
}
