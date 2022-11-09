import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Date<T> {
  data: T;
}

@Injectable()
export class ResponseFormat<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Date<T>> | Promise<Observable<Date<T>>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          message: '成功',
          success: true,
        };
      }),
    );
  }
}
