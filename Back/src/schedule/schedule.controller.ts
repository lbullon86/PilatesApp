import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';

@Controller('api/schedule')
export class ScheduleController {

    constructor(private readonly scheduleService: ScheduleService) {}

    @Get()
    getAll(){
        return this.scheduleService.find()
    }

    @Post()
    save(@Body () schedule:Schedule){
        return this.scheduleService.save(schedule);
    }
    @Get('/week')
    getWeeek(){
        return this.scheduleService.getWeek();
    }

    @Get('/:id')
    getOneDay(@Param('id', ParseIntPipe) day:number){
        return this.scheduleService.getOneDay(day);

    }

    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() activity: Schedule,
      ): Promise<any> {
        return this.scheduleService.updateActivity(activity);
      }


    @Delete("/:id/delete")
    deleteActivity(@Param('id', ParseIntPipe) id:number){
        return this.scheduleService.deleteActivity(id)
    }
  
}
