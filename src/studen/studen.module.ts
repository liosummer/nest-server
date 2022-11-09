import { Module } from '@nestjs/common';
import { StudenService } from './studen.service';
import { StudenController } from './studen.controller';

@Module({
  controllers: [StudenController],
  providers: [StudenService]
})
export class StudenModule {}
