import { Test, TestingModule } from '@nestjs/testing';
import { OokService } from './ook.service';

describe('OokService', () => {
  let service: OokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OokService],
    }).compile();

    service = module.get<OokService>(OokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
