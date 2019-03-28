import {Column, Model, HasMany, BelongsTo, ForeignKey, AllowNull} from "sequelize-typescript";
import { User } from "./User";
import { Photo } from "./Photo";
import { Gallery } from "./Gallery";

export class Article extends Model<Article> {

    @Column
    title:string;

    @Column
    text: string;

    @Column
    date: Date

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Photo)
    @Column
    @AllowNull(true)
    photoId: number;

    @BelongsTo(() => Photo)
    photo: Photo;

    @ForeignKey(() => Gallery)
    @Column
    @AllowNull(true)
    galleryId: number;

    @BelongsTo(() => Gallery)
    gallery: Gallery;

}