import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboards')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get()
  getAll() {
    return this.dashboardService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardService.find(id);
  }
  @Post()
  Create(@Body() report: any) {
    return this.dashboardService.create(report);
  }
  @Put (':id')
  Update(@Param('id') id: string, @Body() report: any) {
    return this.dashboardService.update(id, report);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.dashboardService.delete(id);
  }
}
