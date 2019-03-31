import {Column, Model, BelongsTo, ForeignKey, Table} from "sequelize-typescript";
import { User } from "./User";
import { Type } from "./Type";

@Table({
    timestamps: false
})
export class UserType extends Model<UserType> {

    @ForeignKey(() => User) 
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Type)
    @Column
    typeId: number;

    @BelongsTo(() => Type)
    type: Type;
}