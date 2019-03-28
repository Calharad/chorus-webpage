import {Table, Column, Model, HasMany, AllowNull} from "sequelize-typescript";
import { UserType } from "./UserType";
import { UserPresence } from "./UserPresence";
import { Article } from "./Article";

@Table
export class User extends Model<User> {

    @Column
    username: string;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    joinDate: Date;

    @Column
    @AllowNull(true)
    quitDate: Date;

    @Column({
        comment: "HeadAdmin: v|1, Admin v|2, Reporter v|4, Musician v|8"
    })
    privileges: number;

    @Column({
        comment: "Used bcryptjs"
    })
    password: string;

    @HasMany(() => UserType)
    userTypes: UserType[];

    @HasMany(() => UserPresence)
    userPresences: UserPresence[];

    @HasMany(() => Article)
    articles: Article[];
    
}