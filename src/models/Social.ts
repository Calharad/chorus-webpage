import {Column, Model, AllowNull, Table} from "sequelize-typescript";

@Table({
    timestamps: false
})
export class Social extends Model<Social> {

    @Column({
        comment: "Src to an icon"
    })
    icon: string;

    @Column
    link: string;

    @AllowNull(true)
    @Column
    comment: string;
    
}