import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/models/role.model";
import { UserRoles } from "src/roles/models/user-roles.model";

interface IUser{
    name: string;
    email: string;
    password: string;
}
@Table({tableName: 'users'})
export class User extends Model<User, IUser>{
    @ApiProperty({example: 1, description: 'Unikal ID'})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'example@gmail.com', description: 'Email'})
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true 
    })
    email: string

    @ApiProperty({example: '123QWER!@qwe', description: 'password'})
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    password: string

    @ApiProperty({example: true, description: 'is active'})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
