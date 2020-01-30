import { injectable, inject } from 'inversify';

import { CUSTOMTYPES } from '../../../../IoC/custom/ssc/custom-types';
import { CustomConfig } from '../../../framework-helpers/interfaces/custom/custom-config';

import * as path from 'path';
@injectable()
export class OperatorHelper {
  private readonly customConfig: CustomConfig;

  constructor(@inject(CUSTOMTYPES.CustomConfig) customConfig: CustomConfig) {
    this.customConfig = customConfig;
  }

  operatorsFor() {
    return require(path.join(process.cwd(), this.customConfig.operatorsPath + '.json'));
  }

  getOperator(currentOperator): string {
    const operator = this.operatorsFor()[currentOperator];
    return operator;
  }
}
