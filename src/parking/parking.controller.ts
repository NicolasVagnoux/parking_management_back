import { Controller, Post, Body, Get, Put, Delete, Param, Query, NotFoundException } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { UpdateResult } from 'typeorm';

@Controller('parking')
export class ParkingController {
    constructor(private service: ParkingService) {}

    @Get('/')
    async getAllParkingSpaces(@Query('is_occupied') isOccupied: number) {
        return await this.service.getAllParkingSpaces(isOccupied);
    }

    @Get('/:id')
    async getOneParkingSpace(@Param('id') id: number) {
        const parkingSpace = await this.service.getOneParkingSpace(id);
        if (parkingSpace) {
            return parkingSpace;
        } else {
            throw new NotFoundException('This parking space does not exist!');
        }
    }

    @Put('/:id')
    async updateParkingSpaceAvailability(@Param('id') id: number) {
        const parkingSpaceToUpdate = await this.service.getOneParkingSpace(id);
        if (parkingSpaceToUpdate) {
            const update = await this.service.updateParkingSpaceAvailability(parkingSpaceToUpdate);
            if (update.affected) {
                const parkingSpaceUpdated = await this.service.getOneParkingSpace(id);
                return parkingSpaceUpdated;
            }
        } else {
            throw new NotFoundException('This parking space does not exist!');
        }
    }
}
