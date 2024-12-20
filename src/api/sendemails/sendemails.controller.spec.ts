import { Test, TestingModule } from '@nestjs/testing';
import { SendemailsController } from './sendemails.controller';

describe('SendemailsController', () => {
  let controller: SendemailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendemailsController],
    }).compile();

    controller = module.get<SendemailsController>(SendemailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
