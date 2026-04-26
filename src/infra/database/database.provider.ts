import { DataSource } from "typeorm";
import { databaseProvidersTokens } from "./database.tokens";
import enviroments from "src/config/enviroments";
import { User } from "src/user/entities/user.entity";

export const databaseProviders = [
    {
        provide: databaseProvidersTokens.DATABASE_MYSQL_CONNECTION,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mariadb',
                host: enviroments.MARIADB_HOST,
                port: enviroments.MARIADB_PORT,
                username: 'root',
                password: enviroments.MARIADB_ROOT_PASSWORD,
                database: enviroments.MARIADB_DATABASE,
                entities: [User],
                synchronize: false,
            });
            return dataSource.initialize();
        },
    },
];