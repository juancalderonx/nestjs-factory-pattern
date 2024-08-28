import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FullReportCommand {
  private readonly logger = new Logger(FullReportCommand.name);

  execute() {
    this.logger.log('Executing FULL report command...');
  }
}
