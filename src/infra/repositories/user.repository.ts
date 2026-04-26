import { Inject, Injectable } from '@nestjs/common';
import { databaseRepositoryTokens } from '../database/database.tokens';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UserRepository {

    constructor(
        @Inject(databaseRepositoryTokens.USER_REPOSITORY)
        private readonly userRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.save(createUserDto)
    }

    async findAll() {
        return await this.userRepository.find({ where: { isActive: true } });
    }

    async findOne(id: string) {
        return await this.userRepository.findOne({ where: { id, isActive: true } });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        await this.userRepository.update(id, updateUserDto);
        return this.findOne(id);
    }

    async remove(id: string) {
        const user = await this.findOne(id);
        if (!user) {
            return null;
        }
        await this.userRepository.update(id, { isActive: false });
        return user;
    }
}
