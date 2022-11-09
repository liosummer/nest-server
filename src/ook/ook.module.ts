import { Module } from '@nestjs/common';
import { OokService } from './ook.service';
import { OokController } from './ook.controller';

@Module({
  controllers: [OokController],
  providers: [OokService]
})
export class OokModule {}
