import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PassService } from './pass.service';
import { Pass } from './pass.entity';


@Controller('pass')
export class PassController {
  constructor(private readonly passService: PassService) {}

  @Get()
  getAll() {
    return this.passService.getAll();
  }

  @Post()
  save(@Body() pass: Pass) {
    return this.passService.save(pass);
  }
  @Get('id')
  saveAttendance(@Param('id', ParseIntPipe) id: number, @Body() pass: Pass) : Promise<any> {
      return this.passService.saveAttendance(pass);
      ;
  }
}
