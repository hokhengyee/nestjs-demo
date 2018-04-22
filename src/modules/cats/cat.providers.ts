import { Connection, Repository } from 'typeorm';
import { Cat } from '../../entity';

export const catProviders = [
    {
        provide: 'CatRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Cat),
        inject: ['DbConnectionToken'],
    },
];