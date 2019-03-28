import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { SampleType } from "./SampleType";
import { Song } from "./Song";

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