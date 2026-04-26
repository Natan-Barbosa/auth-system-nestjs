import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { BcryptService } from 'src/shared/bcrypt.service';

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository, private readonly bcryptService: BcryptService) { }

  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;
    const hashedPassword = await this.bcryptService.encryptPassword(password);
    const userDtoWithHashedPassword = { ...createUserDto, password: hashedPassword };
    await this.userRepository.create(userDtoWithHashedPassword);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!await this.userRepository.existsById(id)) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
    const { password } = updateUserDto;
    if (password) {
      const hashedPassword = await this.bcryptService.encryptPassword(password);
      updateUserDto.password = hashedPassword;
    }
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.remove(id);
  }
}
