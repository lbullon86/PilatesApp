import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
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

  @Put(':id/update')
  saveAttendance(@Param('id', ParseIntPipe) id: number, @Body() pass: Pass) : Promise<any> {
      return this.passService.saveAttendance(pass);
  }

  @Get(':id/passActive')
  getOnePassActiveOneClient(@Param('id', ParseIntPipe) id:number): Promise<Pass>{
    return this.passService.getOnePassActiveOneClient(id);
  }

}
