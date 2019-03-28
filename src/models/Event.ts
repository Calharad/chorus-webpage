import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";

export class Event extends Model<Event> {
    
    @Column
    title: string;

    @Column
    date: Date;

}