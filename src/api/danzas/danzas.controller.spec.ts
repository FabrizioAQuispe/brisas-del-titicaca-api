import { Test, TestingModule } from '@nestjs/testing';
import { DanzasController } from './danzas.controller';

describe('DanzasController', () => {
  let controller: DanzasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanzasController],
    }).compile();

    controller = module.get<DanzasController>(DanzasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
