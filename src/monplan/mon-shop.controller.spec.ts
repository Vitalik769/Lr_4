import { Test, TestingModule } from '@nestjs/testing';
import { MonPlanController } from './mon-shop.controller';
import { MonPlanService } from './mon-shop.service';

describe('MonPlanController', () => {
  let controller: MonPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonPlanController],
      providers: [MonPlanService],
    }).compile();

    controller = module.get<MonPlanController>(MonPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
