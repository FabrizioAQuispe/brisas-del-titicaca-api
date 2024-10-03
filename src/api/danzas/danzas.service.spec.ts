import { Test, TestingModule } from '@nestjs/testing';
import { DanzasService } from './danzas.service';

describe('DanzasService', () => {
  let service: DanzasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanzasService],
    }).compile();

    service = module.get<DanzasService>(DanzasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
