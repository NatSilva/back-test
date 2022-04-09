import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nathanael123',
      database: 'teste',
      entities: [
          __dirname + '/../../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];