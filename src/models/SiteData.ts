import {Column, Model, ForeignKey, BelongsTo, AllowNull, PrimaryKey, Table} from "sequelize-typescript";
import { Photo } from "./Photo";

@Table({
    timestamps: false
})
export class SiteData extends Model<SiteData> {

    @PrimaryKey
    @Column
    name: string;

    @Column
    text: string;

    @ForeignKey(() => Photo)
    @AllowNull(true)
    @Column
    photoId: number;

    @BelongsTo(() => Photo)
    photo: Photo;

}