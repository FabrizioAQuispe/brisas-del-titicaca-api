import { Test, TestingModule } from '@nestjs/testing';
import { SendemailsService } from './sendemails.service';

describe('SendemailsService', () => {
  let service: SendemailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendemailsService],
    }).compile();

    service = module.get<SendemailsService>(SendemailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
