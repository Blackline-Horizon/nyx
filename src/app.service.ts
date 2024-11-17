import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNyx(): string {
    return 'Reporting from Nyx Service!';
  }
}
