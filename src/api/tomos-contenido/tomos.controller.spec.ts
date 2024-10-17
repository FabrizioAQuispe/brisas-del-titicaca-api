import { Test, TestingModule } from '@nestjs/testing';
import { TomosController } from './tomos-contenido.controller';

describe('TomosController', () => {
  let controller: TomosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TomosController],
    }).compile();

    controller = module.get<TomosController>(TomosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
