import { Injectable } from '@nestjs/common';
import { Schedule } from './schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {

    constructor(
        @InjectRepository(Schedule)
        private readonly repositorySchedule: Repository<Schedule>,
      ) {}

    find(){
            return this.repositorySchedule.find()
        }

      save(schedule:Schedule){
          return this.repositorySchedule.save(schedule)
      }

      async getOneDay(daySelected:number){
          var allDay:Schedule[] =[]
           allDay =  await this.repositorySchedule.createQueryBuilder('schedule')
          .select('schedule.day','day')
          .addSelect('schedule.hour', 'hour')
          .addSelect('schedule.activity', 'activity')
          .where('schedule.day =:day',{day:daySelected} )
          .orderBy('schedule.hour')
          .getRawMany()
          return allDay;
      }

       async getWeek(){
          const allDays=[]
            for (let index = 0; index < 5; index++) {
                console.log(this.getOneDay(index))
                await allDays.push(this.getOneDay(index))
            }
            return allDays;
           
        
      }
}
