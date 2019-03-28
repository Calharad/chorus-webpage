import {Column, Model, HasMany, ForeignKey, BelongsTo, AllowNull} from "sequelize-typescript";
import { Sample } from "./Sample";
import { Sheet } from "./Sheet";
import { SongCategory } from "./SongCategory";

export class Song extends Model<Song> {
    
    @Column
    name: string;

    @Column
    @AllowNull(true)
    desc: string;

    @HasMany(() => Sample)
    samples: Sample[];

    @HasMany(() => Sheet)
    sheets: Sheet[];

    @HasMany(() => SongCategory)
    songCategories: SongCategory[];

}