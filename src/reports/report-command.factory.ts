import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class ReportCommandFactory {
  constructor(private readonly moduleRef: ModuleRef) {}

  private readonly commands = {
    EMPTY: 'EmptyReportCommand',
    HALF: 'HalfReportCommand',
    FULL: 'FullReportCommand',
  };

  get(code: string) {
    const command = this.commands[code];
    if (!command) {
      throw new Error(`Report command for code ${code} not found.`);
    }
    return this.moduleRef.get(command, { strict: false });
  }
}
