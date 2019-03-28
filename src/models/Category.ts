import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { SongCategory } from "./SongCategory";

export class Category extends Model<Category> {

    @Column
    name: string;

    @Column
    @AllowNull(true)
    desc: string;

    @HasMany(() => SongCategory)
    songCategories: SongCategory[];
    
}