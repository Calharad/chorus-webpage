import {Column, Model, ForeignKey, BelongsTo} from "sequelize-typescript";
import { Category } from "./Category";
import { Song } from "./Song";

export class SongCategory extends Model<SongCategory> {

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @ForeignKey(() => Song)
    @Column
    songId: number;

    @BelongsTo(() => Song)
    song: Song;
    
}