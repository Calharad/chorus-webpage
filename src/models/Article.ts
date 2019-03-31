import {Column, Model, BelongsTo, ForeignKey, AllowNull, Table} from "sequelize-typescript";
import { User } from "./User";
import { Photo } from "./Photo";
import { Gallery } from "./Gallery";

@Table({
    timestamps: false
})
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
    @AllowNull(true)
    @Column
    photoId: number;

    @BelongsTo(() => Photo)
    photo: Photo;

    @ForeignKey(() => Gallery)
    @AllowNull(true)
    @Column
    galleryId: number;

    @BelongsTo(() => Gallery)
    gallery: Gallery;

}