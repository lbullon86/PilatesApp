import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { Schedule } from './schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ScheduleService],
  imports:[TypeOrmModule.forFeature([Schedule])],
  controllers: [ScheduleController]
})
export class ScheduleModule {}
