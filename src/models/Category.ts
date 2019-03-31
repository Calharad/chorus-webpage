import {Column, Model, HasMany, AllowNull, Table} from "sequelize-typescript";
import { SongCategory } from "./SongCategory";

@Table({
    timestamps: false
})
export class Category extends Model<Category> {

    @Column
    name: string;

    @AllowNull(true)
    @Column
    desc: string;

    @HasMany(() => SongCategory)
    songCategories: SongCategory[];
    
}