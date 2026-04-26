import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.logger.debug(`Creating user with email: ${createUserDto.email}`);
    const createdUser = await this.userService.create(createUserDto);
    this.logger.debug('User created');
    return createdUser;
  }

  @Get()
  async findAll() {
    this.logger.debug('Finding all users');
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.logger.debug(`Finding user with id: ${id}`);
    const user = await this.userService.findOne(id);
    this.logger.debug(`User with id: ${id} found`);
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.logger.debug(`Updating user with id: ${id}`);
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.logger.debug(`Removing user with id: ${id}`);
    return await this.userService.remove(id);
  }
}
