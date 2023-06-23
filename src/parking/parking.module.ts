import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { ParkingSpace } from './parking.entity/parking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ParkingService],
  imports: [TypeOrmModule.forFeature([ParkingSpace])],
  controllers: [ParkingController]
})
export class ParkingModule {}
