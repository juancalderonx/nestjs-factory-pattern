import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ReportService } from './report.service';

@Injectable()
export class ReportServiceFactory {
  constructor(private readonly moduleRef: ModuleRef) {}

  private readonly strategies = {
    EMPTY: 'EmptyReportService',
    HALF: 'HalfReportService',
    FULL: 'FullReportService',
  };

  get(code: string): ReportService {
    const service = this.strategies[code];
    if (!service) {
      throw new Error(`Report strategy for code ${code} not found.`);
    }
    return this.moduleRef.get(service, { strict: false });
  }
}
