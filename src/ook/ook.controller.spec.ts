import { Test, TestingModule } from '@nestjs/testing';
import { OokController } from './ook.controller';
import { OokService } from './ook.service';

describe('OokController', () => {
  let controller: OokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OokController],
      providers: [OokService],
    }).compile();

    controller = module.get<OokController>(OokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
