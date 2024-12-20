import { Test, TestingModule } from '@nestjs/testing';
import { EventosExternosController } from './eventos-externos.controller';

describe('EventosExternosController', () => {
  let controller: EventosExternosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosExternosController],
    }).compile();

    controller = module.get<EventosExternosController>(EventosExternosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
