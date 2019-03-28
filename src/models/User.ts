import {Table, Column, Model, HasMany, DataType} from "sequelize-typescript";

@Table
class User extends Model<User> {

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    

}