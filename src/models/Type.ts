import {Column, Model, HasMany, Table} from "sequelize-typescript";
import { UserType } from "./UserType";

@Table({
    timestamps: false
})
export class Type extends Model<Type> {
    
    @Column
    name: string;

    @HasMany(() => UserType)
    userTypes: UserType[];

}