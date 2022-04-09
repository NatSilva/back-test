import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 40 })
    name: string;
    
    @ApiProperty()
    @Column()
    age: number;

    @ApiProperty()
    @Column({ length: 40 })
    estado_civil: string

    @ApiProperty()
    @Column({ length: 20 })
    cpf: string;

    @ApiProperty()
    @Column({ length: 20 })
    cidade: string;

    @ApiProperty()
    @Column({ length: 20 })
    estado: string;

}