import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 1, description: 'UserId' })
  id?: number;
  @ApiProperty({ example: 'TestMail@gmail.com', description: 'UserEmail' })
  email: string;
  @ApiProperty({ example: 'Alex', description: 'UserName' })
  name: string;
  @ApiProperty({ example: '85126sdqw73', description: 'UserPassword' })
  password: string;
}