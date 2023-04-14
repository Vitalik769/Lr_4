import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';

@Controller('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 200, type: [User] })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  //@UseGuards(JwtAuthenticationGuard)
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: [User] })
  //@UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    const user = this.usersService.getById(Number(id));
    console.log(user);
    return user;
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Get user by email' })
  @ApiResponse({ status: 200, type: [User] })
  //@UseGuards(JwtAuthenticationGuard)
  @Get(':email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.getByEmail(email);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, type: [User] })
  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  async updatePet(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), user);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 200, type: [User] })
  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  async removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(Number(id));
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Delete all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Delete()
  @UseGuards(JwtAuthenticationGuard)
  async removeAllUsers() {
    return this.usersService.removeAllUsers();
  }
}