import { Column, Entity } from "typeorm";

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

@Entity('users')
export class User {

    @Column({ type: 'uuid', primary: true, default: () => 'UUID()' })
    id!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 255 })
    password!: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    userRole!: UserRole;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;
}
