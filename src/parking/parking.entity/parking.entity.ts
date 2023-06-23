import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParkingSpace {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isOccupied: number;

}
