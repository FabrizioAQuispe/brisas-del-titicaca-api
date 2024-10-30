import { Test, TestingModule } from '@nestjs/testing';
import { PresidentesController } from './presidentes.controller';

describe('PresidentesController', () => {
  let controller: PresidentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresidentesController],
    }).compile();

    controller = module.get<PresidentesController>(PresidentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
