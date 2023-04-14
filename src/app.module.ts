import { Module } from '@nestjs/common';
import { MonPlanModule } from './monplan/mon-shop.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './date-base/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    MonPlanModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
