import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [DashboardModule,ReportsModule],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
