import { Test, TestingModule } from '@nestjs/testing';
import { StudenService } from './studen.service';

describe('StudenService', () => {
  let service: StudenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudenService],
    }).compile();

    service = module.get<StudenService>(StudenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
