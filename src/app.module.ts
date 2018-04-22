import { Module } from '@nestjs/common';
import { AppController } from './controllers';

@Module({
  imports: [],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
