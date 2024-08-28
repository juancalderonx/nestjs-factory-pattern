import { Module } from '@nestjs/common';
import { ReportServiceFactory } from './report-service.factory';
import { EmptyReportService } from './services/empty-report.service';
import { HalfReportService } from './services/half-report.service';
import { FullReportService } from './services/full-report.service';
import { ReportsController } from './reports.controller';

@Module({
  providers: [
    ReportServiceFactory,
    { provide: 'EmptyReportService', useClass: EmptyReportService },
    { provide: 'HalfReportService', useClass: HalfReportService },
    { provide: 'FullReportService', useClass: FullReportService },
  ],
  controllers: [ReportsController],
})
export class ReportsModule {}
