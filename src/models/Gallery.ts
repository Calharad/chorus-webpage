import { Model, Column, HasMany, Table } from "sequelize-typescript";
import { Photo } from "./Photo";
import { Article } from "./Article";

@Table({
    timestamps: false
})
export class Gallery extends Model<Gallery> {

    @Column
    name: string;

    @HasMany(() => Photo)
    photos: Photo[];

    @HasMany(() => Article)
    articles: Article[];

}