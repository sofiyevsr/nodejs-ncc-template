import db from "@db";
import { hrtime } from "process";

const queries: {
  [key: string]: {
    sql: string;
    startTime: bigint;
  };
} = {};

if (process.env.KNEX_LOGGER === "true")
  db.on("query", (query) => {
    const uid = query.__knexQueryUid;
    queries[uid] = {
      sql: query.sql,
      startTime: hrtime.bigint(),
    };
  }).on("query-response", (_, query) => {
    const uid = query.__knexQueryUid;
    if (queries[uid]) {
      console.log(
        `Took ${
          Number(hrtime.bigint() - queries[uid].startTime) / 1e9
        }s >>> ${queries[uid].sql.replace(/\s\s+/g, " ")}`
      );
      delete queries[uid];
    }
  });
