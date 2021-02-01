"use strict";
const config = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT) | 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map