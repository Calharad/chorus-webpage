import {Column, Model, HasMany, AllowNull, Table} from "sequelize-typescript";
import { Sample } from "./Sample";
import { Sheet } from "./Sheet";
import { SongCategory } from "./SongCategory";

@Table({
    timestamps: false
})
export class Song extends Model<Song> {
    
    @Column
    name: string;

    @AllowNull(true)
    @Column
    desc: string;

    @HasMany(() => Sample)
    samples: Sample[];

    @HasMany(() => Sheet)
    sheets: Sheet[];

    @HasMany(() => SongCategory)
    songCategories: SongCategory[];

}