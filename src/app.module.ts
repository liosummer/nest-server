import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { StudenModule } from './studen/studen.module';
import { OssModule } from './oss/oss.module';
import { OokModule } from './ook/ook.module';

@Module({
  imports: [UserModule, UploadModule, StudenModule, OssModule, OokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
