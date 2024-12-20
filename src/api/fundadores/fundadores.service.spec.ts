import { Test, TestingModule } from '@nestjs/testing';
import { FundadoresService } from './fundadores.service';

describe('FundadoresService', () => {
  let service: FundadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundadoresService],
    }).compile();

    service = module.get<FundadoresService>(FundadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
