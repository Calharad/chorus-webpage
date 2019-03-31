import {Column, Model, Table} from "sequelize-typescript";

@Table({
    timestamps: false
})
export class Event extends Model<Event> {
    
    @Column
    title: string;

    @Column
    date: Date;

}