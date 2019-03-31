import {Column, Model, ForeignKey, BelongsTo, AllowNull, Table} from "sequelize-typescript";
import { Song } from "./Song";

@Table({
    timestamps: false
})
export class Sheet extends Model<Sheet> {

    @Column
    name: string;

    @AllowNull(true)
    @Column
    desc: string;

    @ForeignKey(() => Song)
    @Column
    songId: number;

    @BelongsTo(() => Song)
    song: Song;
    
}