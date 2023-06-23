import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ParkingSpace } from './parking.entity/parking.entity';

@Injectable()
export class ParkingService {
    constructor(
        @InjectRepository(ParkingSpace) private parkingRepository: Repository<ParkingSpace>,
    ) {}

    async getAllParkingSpaces(isOccupied: number): Promise<ParkingSpace[]> {
        if (isOccupied) {
            return await this.parkingRepository.find({
                select: ['id', 'isOccupied'],
                where: [{isOccupied: isOccupied}]
            });
        } else {
            return await this.parkingRepository.find();
        };
    }

    async getOneParkingSpace(id: number): Promise<ParkingSpace> {
        return await this.parkingRepository.findOne({
            select: ['id', 'isOccupied'],
            where: [{id: id}]
        });
    }

    async updateParkingSpaceAvailability(parkingSpace: ParkingSpace): Promise<UpdateResult> {
        if (parkingSpace.isOccupied === 0) {
            return await this.parkingRepository.update({id: parkingSpace.id}, {isOccupied: 1});
        } else {
            return await this.parkingRepository.update({id: parkingSpace.id}, {isOccupied: 0});
        };
    }
}
