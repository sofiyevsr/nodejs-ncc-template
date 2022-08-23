import knex from "knex";
import configDB from "knexfile";

// @ts-ignore
const db = knex(configDB[process.env.NODE_ENV]);

export default db;
