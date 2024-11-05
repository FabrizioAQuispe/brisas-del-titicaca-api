import { Test, TestingModule } from '@nestjs/testing';
import { EventosFechasController } from './eventos-fechas.controller';

describe('EventosFechasController', () => {
  let controller: EventosFechasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosFechasController],
    }).compile();

    controller = module.get<EventosFechasController>(EventosFechasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
