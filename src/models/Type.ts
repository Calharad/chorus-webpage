import {Column, Model, HasMany} from "sequelize-typescript";
import { UserType } from "./UserType";

export class Type extends Model<Type> {
    
    @Column
    name: string;

    @HasMany(() => UserType)
    userTypes: UserType[];

}