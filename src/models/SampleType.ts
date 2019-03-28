import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { Type } from "./Type";
import { Sample } from "./Sample";

export class SampleType extends Model<SampleType> {

    @ForeignKey(() => Type)
    @Column
    typeId: number;

    @BelongsTo(() => Type)
    type: Type;

    @ForeignKey(() => Sample)
    @Column
    sampleId: number;

    @BelongsTo(() => Sample)
    sample: Sample;

}