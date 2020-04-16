import { Module } from '@nestjs/common';
import { PassController } from './pass.controller';
import { PassService } from './pass.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pass } from './pass.entity';

@Module({
  controllers: [PassController],
  imports: [TypeOrmModule.forFeature([Pass])],
  providers: [PassService],
  exports:[PassService]

})
export class PassModule {}
