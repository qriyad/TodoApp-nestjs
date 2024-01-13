import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('findAll')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
