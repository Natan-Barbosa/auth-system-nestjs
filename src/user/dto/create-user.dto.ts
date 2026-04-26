import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsStrongPassword, Length } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty({ message: 'Email is required' })
    email!: string;

    @IsNotEmpty({ message: 'Password is required' })
    @IsStrongPassword()
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters' })
    password!: string;

    @IsOptional()
    @IsEnum(UserRole, { message: 'Role must be either ADMIN or USER' })
    userRole?: UserRole;
}
