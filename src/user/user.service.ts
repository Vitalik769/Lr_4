import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      // user.password = undefined;
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getAll() {
    // const user = await this.usersRepository.find();
    // if (user) {
    //   user.password = undefined;
    //   return user;
    // }
    // throw new HttpException('There are no users', HttpStatus.NOT_FOUND);

    const users = await this.usersRepository.find();
    if (users) {
      const user = users.map((user) => {
        // user.password = undefined;
        return user;
      });
      return user;
    }
    throw new HttpException('There are no users', HttpStatus.NOT_FOUND);
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user) {
      // user.password = undefined;
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async updateUser(id: number, User: UpdateUserDto) {
    await this.usersRepository.update(id, User);
    const updatedUser = await this.usersRepository.findOne({
      where: { id },
    });
    if (updatedUser) {
      //updatedUser.password = undefined;
      return updatedUser;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async removeUser(id: number) {
    const deleteResponse = await this.usersRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async removeAllUsers() {
    const deleteResponse = await this.usersRepository.delete({});
    if (!deleteResponse.affected) {
      throw new HttpException(
        'There are no users in database',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}