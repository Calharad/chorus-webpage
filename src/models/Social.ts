import {Column, Model, AllowNull} from "sequelize-typescript";

export class Social extends Model<Social> {

    @Column({
        comment: "Src to an icon"
    })
    icon: string;

    @Column
    link: string;

    @Column
    @AllowNull(true)
    comment: string;
    
}