require("dotenv").config();

const config = {
  development: {
    client: "pg",
    connection: {
      port: process.env.SQL_PORT,
      host: process.env.SQL_HOST,
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations/dev",
    },
    seeds: {
      directory: "./src/db/seeds/dev",
    },
  },
  staging: {
    client: "pg",
    connection: {
      port: process.env.SQL_PORT,
      host: process.env.SQL_HOST,
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations/staging",
    },
    seeds: {
      directory: "./src/db/seeds/staging",
    },
  },
  production: {
    client: "pg",
    connection: {
      port: process.env.SQL_PORT,
      host: process.env.SQL_HOST,
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations/prod",
    },
    seeds: {
      directory: "./src/db/seeds/prod",
    },
  },
};

export default config;
