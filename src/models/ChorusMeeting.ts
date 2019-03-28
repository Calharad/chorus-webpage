import {Column, Model, HasMany} from "sequelize-typescript";
import { UserPresence } from "./UserPresence";

export class ChorusMeeting extends Model<ChorusMeeting> {

    @Column
    date: Date;

    @HasMany(() => UserPresence)
    userPresences: UserPresence[];

}