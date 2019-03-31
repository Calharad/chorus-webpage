import {Column, Model, HasMany, Table} from "sequelize-typescript";
import { UserPresence } from "./UserPresence";

@Table({
    timestamps: false
})
export class ChorusMeeting extends Model<ChorusMeeting> {

    @Column
    date: Date;

    @HasMany(() => UserPresence)
    userPresences: UserPresence[];

}