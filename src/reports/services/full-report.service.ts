import { Injectable, Logger } from '@nestjs/common';
import { ReportService } from '../report.service';

@Injectable()
export class FullReportService implements ReportService {
  private readonly logger = new Logger(FullReportService.name);

  submit() {
    this.logger.log('Submitting FULL report...');
  }
}
