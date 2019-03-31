import { User } from "./User";
import { Column, Model, BelongsTo, ForeignKey, Table } from "sequelize-typescript";
import { ChorusMeeting } from "./ChorusMeeting";

@Table({
    timestamps: false
})
export class UserPresence extends Model<UserPresence> {
    
    @Column
    isActive: boolean;

    @ForeignKey(() => ChorusMeeting)
    @Column
    chorusMeetingId: number;

    @BelongsTo(() => ChorusMeeting)
    chorusMeeting: ChorusMeeting;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

}