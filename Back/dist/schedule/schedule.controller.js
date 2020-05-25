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
const schedule_service_1 = require("./schedule.service");
const schedule_entity_1 = require("./schedule.entity");
let ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    getAll() {
        return this.scheduleService.find();
    }
    save(schedule) {
        return this.scheduleService.save(schedule);
    }
    getWeeek() {
        return this.scheduleService.getWeek();
    }
    getOneDay(day) {
        return this.scheduleService.getOneDay(day);
    }
    async update(id, activity) {
        return this.scheduleService.updateActivity(activity);
    }
    deleteActivity(id) {
        return this.scheduleService.deleteActivity(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_entity_1.Schedule]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "save", null);
__decorate([
    common_1.Get('/week'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "getWeeek", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "getOneDay", null);
__decorate([
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, schedule_entity_1.Schedule]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "update", null);
__decorate([
    common_1.Delete("/:id/delete"),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "deleteActivity", null);
ScheduleController = __decorate([
    common_1.Controller('api/schedule'),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleController);
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=schedule.controller.js.map