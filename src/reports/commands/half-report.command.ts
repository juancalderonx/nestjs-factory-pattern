import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HalfReportCommand {
  private readonly logger = new Logger(HalfReportCommand.name);

  execute() {
    this.logger.log('Executing HALF report command...');
  }
}
