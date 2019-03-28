import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { Song } from "./Song";

export class Sheet extends Model<Sheet> {

    @Column
    name: string;

    @Column
    @AllowNull(true)
    desc: string;

    @ForeignKey(() => Song)
    @Column
    songId: number;

    @BelongsTo(() => Song)
    song: Song;
    
}