import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmptyReportCommand {
  private readonly logger = new Logger(EmptyReportCommand.name);

  execute() {
    this.logger.log('Executing EMPTY report command...');
  }
}
