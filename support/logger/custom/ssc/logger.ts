import { ElementFinder } from 'protractor';
import { injectable } from 'inversify';

import { ILogger } from 'tabcorp-cucumber-protractor-framework-v2';
import { LogginLevel, ILog } from 'tabcorp-cucumber-protractor-framework-v2';

@injectable()
export class SSCLogger implements ILogger {
  private logLevel: LogginLevel;

  public async getIdentifierFromWebElement(webElement: ElementFinder): Promise<string> {
    const id = `selector="${webElement.locator().value}"`;
    return id;
  }

  public log(log: ILog): void {
    this.writeLog(log);
  }

  public logError(error: string): void {
    this.writeLog({logData: error, logLevel: LogginLevel.Error});
  }

  private shouldLog(log: ILog): boolean {
    if (this.logLevel === LogginLevel.Info)
      return true;

    if (this.logLevel === LogginLevel.InfoSuccess
      && log.logLevel === LogginLevel.Info)
      return false;

    if (this.logLevel === LogginLevel.Warning
      && (log.logLevel === LogginLevel.Info
      || log.logLevel === LogginLevel.InfoSuccess))
      return false;

    if (this.logLevel === LogginLevel.Error
      && log.logLevel !== LogginLevel.Error)
      return false;

    return true;
  }

  generateLogMessage(log: ILog): string {
    let formattedLogMessage = null;

    if (this.shouldLog(log)) {

      const color: string = log.logLevel === LogginLevel.Error
        ? '\x1b[31m'
        : log.logLevel === LogginLevel.Warning
          ? '\x1b[33m'
          : log.logLevel === LogginLevel.InfoSuccess
            ? '\x1b[32m'
            : '\x1b[37m';

      formattedLogMessage = `${color}${log.logData}\x1b[0m`;
    }

    return formattedLogMessage;
  }

  generateErrorMessage(error: string): string {
    return `\x1b[31m${error}\x1b[0m`;
  }

  private writeLog(log: ILog): string {
    const logMsg: string = this.generateLogMessage(log);

    if (logMsg != null)
      return logMsg;
  }

}
