import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';

@ApiTags('Foydalanuchila')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Foydalanuvchi qoshish' })
  @ApiResponse({status: 201, description: 'Success', type: [User]})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchi rolini ozgartirish' })
  @ApiResponse({status: 201, description: 'Edit roole', type: [User]})
  @Post('add-role')
  addRole(@Body() addRoleDto: AddRoleDto){
    return this.usersService.addRole(addRoleDto)
  }

  @ApiOperation({ summary: 'Foydalanuvchi rolini ochirish' })
  @ApiResponse({status: 201, description: 'Remove roole', type: [User]})
  @Post('remove-role')
  removeRole(@Body() addRoleDto: AddRoleDto){
    return this.usersService.removeRole(addRoleDto)
  }

  @ApiOperation({ summary: 'Foydalanuvchilani olib olish' })
  @ApiResponse({status: 201, description: 'Get users', type: [User]})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'bta foydalanuvchini olish' })
  @ApiResponse({status: 201, description: 'Get one user', type: [User]})
  @Get(':id')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @ApiOperation({ summary: 'Foydalanuvchini ozgartirish' })
  @ApiResponse({status: 201, description: 'Edit one user', type: [User]})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchini ochirish' })
  @ApiResponse({status: 201, description: 'return 1',})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @ApiOperation({ summary: 'Foydalanuvchini activini ozgartirish' })
  @ApiResponse({status: 201, description: 'Edit activate', type: [User]})
  @HttpCode(200)
  @Post('activate')
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto)
  }
}
