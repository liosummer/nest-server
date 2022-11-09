import {
  Injectable,
  NestInterceptor,
  CallHandler,
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from '@nestjs/common';
@Catch()
export class ResponseError<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    response.status(status).json({
      status,
      success: false,
      time: new Date(),
      data: exception.message,
      url: request.url,
    });
  }
}
