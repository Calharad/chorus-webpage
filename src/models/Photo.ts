import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull, Table} from "sequelize-typescript";
import { Gallery } from "./Gallery";
import { Article } from "./Article";
import { SiteData } from "./SiteData";

@Table({
    timestamps: false
})
export class Photo extends Model<Photo>
{
    @Column
    src: string;

    @AllowNull(true)
    @Column
    desc: string;

    @ForeignKey(() => Gallery)
    @Column
    galleryId: number;

    @BelongsTo(() => Gallery)
    gallery: Gallery;

    @HasMany(() => Article)
    articles: Article[];

    @HasMany(() => SiteData)
    siteDatas: SiteData[];
}