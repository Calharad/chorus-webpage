import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { Gallery } from "./Gallery";
import { Article } from "./Article";
import { SiteData } from "./SiteData";

export class Photo extends Model<Photo>
{
    @Column
    src: string;

    @Column
    @AllowNull(true)
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