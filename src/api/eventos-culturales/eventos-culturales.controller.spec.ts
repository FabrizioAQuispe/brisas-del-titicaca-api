import { Test, TestingModule } from '@nestjs/testing';
import { EventosCulturalesController } from './eventos-culturales.controller';

describe('EventosCulturalesController', () => {
  let controller: EventosCulturalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosCulturalesController],
    }).compile();

    controller = module.get<EventosCulturalesController>(EventosCulturalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
