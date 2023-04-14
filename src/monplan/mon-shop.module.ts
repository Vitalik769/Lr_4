import { Module } from '@nestjs/common';
import { MonPlanService } from './mon-shop.service';
import { MonPlanController } from './mon-shop.controller';
import Advertisement from './entities/mon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Advertisement])],
  controllers: [MonPlanController],
  providers: [MonPlanService],
})
export class MonPlanModule {}
