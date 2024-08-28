import { Module } from '@nestjs/common';
import { EmptyReportCommand } from './commands/empty-report.command';
import { HalfReportCommand } from './commands/half-report.command';
import { FullReportCommand } from './commands/full-report.command';
import { ReportCommandFactory } from './report-command.factory';
import { ReportsController } from './reports.controller';

@Module({
  providers: [
    ReportCommandFactory,
    { provide: 'EmptyReportCommand', useClass: EmptyReportCommand },
    { provide: 'HalfReportCommand', useClass: HalfReportCommand },
    { provide: 'FullReportCommand', useClass: FullReportCommand },
  ],
  controllers: [ReportsController],
  exports: [ReportCommandFactory],
})
export class ReportsModule {}
