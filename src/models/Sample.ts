import {Column, Model, HasMany, ForeignKey, BelongsTo, Table} from "sequelize-typescript";
import { SampleType } from "./SampleType";
import { Song } from "./Song";

@Table({
    timestamps: false
})
export class Sample extends Model<Sample> {

    @Column
    isPublic: boolean;

    @Column
    name: string;

    @Column
    src: string;

    @HasMany(() => SampleType)
    sampleTypes: SampleType;

    @ForeignKey(() => Song)
    @Column
    songId: number;

    @BelongsTo(() => Song)
    song: Song;

}