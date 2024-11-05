import { Test, TestingModule } from '@nestjs/testing';
import { EventosFechasService } from './eventos-fechas.service';

describe('EventosFechasService', () => {
  let service: EventosFechasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventosFechasService],
    }).compile();

    service = module.get<EventosFechasService>(EventosFechasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
