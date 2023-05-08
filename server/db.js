const Pool = require("pg").Pool

const chiefPool = new Pool({
    user: process.env.POSTGES_CHIEF_USER,
    password: process.env.DB_CHIEF_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const detectivePool = new Pool({
    user: process.DB_PASSWORD_DETECTIVE,
    password: process.env.DB_PASSWORD_DETECTIVE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const clientPool = new Pool({
    user: process.env.DB_USER_CLIENT,
    password: process.env.DB_PASSWORD_CLIENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = {
    chiefPool,
    detectivePool,
    clientPool
}