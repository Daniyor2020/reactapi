import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('dashboards')
export class DashboardController {
  @Get()
  getAll() {
    return 'all reports!';
  }
  @Get (':id')
  get(){
      return 'get report with id!'
  }
  @Post()
  create() {
      return " create reports!"
  }
  @Put()
  update() {
      return "update report!"
  }
  @Delete()
  delete() {
      return 'delete report!'
  }
}
