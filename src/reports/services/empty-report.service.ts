import { Injectable, Logger } from '@nestjs/common';
import { ReportService } from '../report.service';

@Injectable()
export class EmptyReportService implements ReportService {
  private readonly logger = new Logger(EmptyReportService.name);

  submit() {
    this.logger.log('Submitting EMPTY report...');
  }
}
