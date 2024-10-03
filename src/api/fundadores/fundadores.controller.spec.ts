import { Test, TestingModule } from '@nestjs/testing';
import { FundadoresController } from './fundadores.controller';

describe('FundadoresController', () => {
  let controller: FundadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundadoresController],
    }).compile();

    controller = module.get<FundadoresController>(FundadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
