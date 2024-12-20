import { Test, TestingModule } from '@nestjs/testing';
import { PresidentesService } from './presidentes.service';

describe('PresidentesService', () => {
  let service: PresidentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresidentesService],
    }).compile();

    service = module.get<PresidentesService>(PresidentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
