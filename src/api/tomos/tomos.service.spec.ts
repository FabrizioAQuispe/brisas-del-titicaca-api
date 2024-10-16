import { Test, TestingModule } from '@nestjs/testing';
import { TomosService } from './tomos.service';

describe('TomosService', () => {
  let service: TomosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TomosService],
    }).compile();

    service = module.get<TomosService>(TomosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
