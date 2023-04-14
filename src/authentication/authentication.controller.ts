import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import RequestWithUser from './requestWithUser.interface';
import { Response } from 'express';
import JwtAuthenticationGuard from './jwt-authentication.guard';
import Authentication from './entities/authentication.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @ApiTags('Auth API')
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: 200, type: [Authentication] })
  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @ApiTags('Auth API')
  @ApiOperation({ summary: 'Login into account' })
  @ApiResponse({ status: 200, type: [Authentication] })
  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Req() request: RequestWithUser, @Res() response: Response) {
    const { user } = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return response.send(user);
  }

  @ApiTags('Auth API')
  @ApiOperation({ summary: 'Logout from account' })
  @ApiResponse({ status: 200, type: [Authentication] })
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @ApiTags('Auth API')
  @ApiOperation({ summary: 'Get Authenticated user' })
  @ApiResponse({ status: 200, type: [Authentication] })
  @UseGuards(JwtAuthenticationGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}