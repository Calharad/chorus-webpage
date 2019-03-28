import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull, PrimaryKey} from "sequelize-typescript";
import { Photo } from "./Photo";

export class SiteData extends Model<SiteData> {

    @Column
    @PrimaryKey
    name: string;

    @Column
    text: string;

    @ForeignKey(() => Photo)
    @Column
    @AllowNull(true)
    photoId: number;

    @BelongsTo(() => Photo)
    photo: Photo;

}