"use strict";
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'newuser',
    password: 'password',
    database: 'app',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrationsRun: false,
    logging: "all",
    logger: 'advanced-console',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
module.exports = config;
//# sourceMappingURL=database.config.js.map