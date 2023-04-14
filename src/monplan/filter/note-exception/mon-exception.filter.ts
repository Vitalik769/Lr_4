import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { MonsException } from '../../exception/note.exception/mon.exception';

@Catch(MonsException)
export class MonsExceptionFilter implements ExceptionFilter {
  catch(exception: MonsException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(500).json({
      timestamp: new Date().toISOString(),
      msg: exception.what(),
    });
  }
}
