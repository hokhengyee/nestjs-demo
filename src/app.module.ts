import { Module } from '@nestjs/common';
import { AppController } from './controllers';

import {
  CatModule,
} from './modules';

@Module({
  imports: [
    CatModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class AppModule { }
