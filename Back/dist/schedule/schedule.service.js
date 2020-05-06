"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const schedule_entity_1 = require("./schedule.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ScheduleService = class ScheduleService {
    constructor(repositorySchedule) {
        this.repositorySchedule = repositorySchedule;
    }
    find() {
        return this.repositorySchedule.find();
    }
    save(schedule) {
        return this.repositorySchedule.save(schedule);
    }
    async getOneDay(daySelected) {
        var allDay = [];
        allDay = await this.repositorySchedule.createQueryBuilder('schedule')
            .select('schedule.day', 'day')
            .addSelect('schedule.hour', 'hour')
            .addSelect('schedule.activity', 'activity')
            .where('schedule.day =:day', { day: daySelected })
            .orderBy('schedule.hour')
            .getRawMany();
        return allDay;
    }
    async getWeek() {
        const allDays = [];
        for (let index = 0; index < 5; index++) {
            console.log(this.getOneDay(index));
            await allDays.push(this.getOneDay(index));
        }
        return allDays;
    }
};
ScheduleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map