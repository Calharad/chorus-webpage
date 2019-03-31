import {Column, Model, ForeignKey, BelongsTo, Table} from "sequelize-typescript";
import { Type } from "./Type";
import { Sample } from "./Sample";

@Table({
    timestamps: false
})
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