
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { databaseProvidersTokens, databaseRepositoryTokens } from './database.tokens';

export const userRepository = [
    {
        provide: databaseRepositoryTokens.USER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [databaseProvidersTokens.DATABASE_MYSQL_CONNECTION],
    },
];
