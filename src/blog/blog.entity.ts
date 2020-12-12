import { Entity } from "typeorm/decorator/entity/Entity";
import {PrimaryGeneratedColumn} from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";

@Entity()
export class BlogEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;
}
