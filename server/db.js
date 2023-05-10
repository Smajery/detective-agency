const Pool = require("pg").Pool

const authPool = new Pool({
    user: process.env.PG_USER_AUTH,
    password: process.env.PG_PASSWORD_AUTH,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_NAME
});

const chiefPool = new Pool({
    user: process.env.PG_USER_CHIEF,
    password: process.env.PG_PASSWORD_CHIEF,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_NAME
});

const seniorPool = new Pool({
    user: process.env.PG_USER_SENIOR,
    password: process.env.PG_PASSWORD_SENIOR,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_NAME
});

const detectivePool = new Pool({
    user: process.env.PG_USER_DETECTIVE,
    password: process.env.PG_PASSWORD_DETECTIVE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_NAME
});

module.exports = {
    authPool,
    chiefPool,
    seniorPool,
    detectivePool
}