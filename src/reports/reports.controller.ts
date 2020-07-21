import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReportsService } from './reports.services';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getAll(): any {
    return this.reportsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportsService.find(id);
  }
  @Post()
  Create(@Body() report: any) {
    return this.reportsService.create(report);
  }
  @Put(':id')
  Update(@Param('id') id: string, @Body() report: any) {
    return this.reportsService.update(id, report);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.reportsService.delete(id);
  }
}
