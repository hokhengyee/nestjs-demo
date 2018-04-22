import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { catProviders } from './cat.providers';
import { CatService } from './cat.service';
import { CatsController } from './cat.controller';

@Module({
    controllers: [CatsController],
    imports: [DatabaseModule],
    components: [
        ...catProviders,
        CatService,
    ],
    exports: [CatService],
})
export class CatModule { }