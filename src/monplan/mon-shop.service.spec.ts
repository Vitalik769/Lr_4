import { Test, TestingModule } from '@nestjs/testing';
import { MonPlanService } from './mon-shop.service';

describe('MonPlanService', () => {
  let service: MonPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonPlanService],
    }).compile();

    service = module.get<MonPlanService>(MonPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
