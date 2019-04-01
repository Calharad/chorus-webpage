import {Table, Column, Model, HasMany, AllowNull} from "sequelize-typescript";
import { UserType } from "./UserType";
import { UserPresence } from "./UserPresence";
import { Article } from "./Article";

@Table({
    timestamps: false
})
export default class User extends Model<User> {

    @Column
    username: string;

    @Column
    active: boolean;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    joinDate: Date;

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

export class LoginData {
    constructor(login: string, passwd: string) {
        this.login = login;
        this.password = passwd;
    }

    readonly login: string;
    readonly password: string;
}