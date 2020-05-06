import { Schedule } from './schedule.entity';
import { Repository } from 'typeorm';
export declare class ScheduleService {
    private readonly repositorySchedule;
    constructor(repositorySchedule: Repository<Schedule>);
    find(): Promise<Schedule[]>;
    save(schedule: Schedule): Promise<Schedule>;
    getOneDay(daySelected: number): Promise<Schedule[]>;
    getWeek(): Promise<any[]>;
}
