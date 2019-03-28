import { Model, Column, HasMany } from "sequelize-typescript";
import { Photo } from "./Photo";
import { Article } from "./Article";

export class Gallery extends Model<Gallery> {

    @Column
    name: string;

    @HasMany(() => Photo)
    photos: Photo[];

    @HasMany(() => Article)
    articles: Article[];

}