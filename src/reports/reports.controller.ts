import { Controller, Param, Post } from '@nestjs/common';
import { ReportCommandFactory } from './report-command.factory';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportCommandFactory: ReportCommandFactory) {}

  @Post(':code/submit')
  submitReport(@Param('code') code: string) {
    const command = this.reportCommandFactory.get(code);
    return command.execute();
  }
}
