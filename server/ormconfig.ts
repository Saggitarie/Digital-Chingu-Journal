import { ConnectionOptions } from 'typeorm';

// TYPEORM Configuration
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT) | 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [`${__dirname}/**/*.entity.{ts,js}`],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  logging: true,
  logger: 'file',
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'custom_migration_table',
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  // Run migrations automatically,
  // You can disable this if you prefer running migration manually.
  migrationsRun: false,
};

export = config;
