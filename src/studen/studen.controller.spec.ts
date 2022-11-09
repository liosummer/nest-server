import { Test, TestingModule } from '@nestjs/testing';
import { StudenController } from './studen.controller';
import { StudenService } from './studen.service';

describe('StudenController', () => {
  let controller: StudenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudenController],
      providers: [StudenService],
    }).compile();

    controller = module.get<StudenController>(StudenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
