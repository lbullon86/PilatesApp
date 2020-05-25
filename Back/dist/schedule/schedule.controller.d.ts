import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getAll(): Promise<Schedule[]>;
    save(schedule: Schedule): Promise<Schedule>;
    getWeeek(): Promise<any[]>;
    getOneDay(day: number): Promise<Schedule[]>;
    update(id: number, activity: Schedule): Promise<any>;
    deleteActivity(id: number): Promise<import("typeorm").DeleteResult>;
}
