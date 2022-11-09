import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import * as cors from 'cors';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as session from 'express-session';
import { ResponseFormat } from './common/response';
import { ResponseError } from './common/error';

function MiddlewareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  app.useStaticAssets(join(__dirname, 'images'));
  app.use(MiddlewareAll);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(
    session({
      secret: 'XiaoMan',
      name: 'xm.session',
      rolling: true,
      cookie: { maxAge: null },
    }),
  );
  app.useGlobalFilters(new ResponseError());
  app.useGlobalInterceptors(new ResponseFormat());
  await app.listen(3001);
}
bootstrap();
