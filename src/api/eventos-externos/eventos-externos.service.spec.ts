import { Test, TestingModule } from '@nestjs/testing';
import { EventosExternosService } from './eventos-externos.service';

describe('EventosExternosService', () => {
  let service: EventosExternosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventosExternosService],
    }).compile();

    service = module.get<EventosExternosService>(EventosExternosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
