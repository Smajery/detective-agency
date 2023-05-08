const Pool = require("pg").Pool

const chiefPool = new Pool({
    user: process.env.DB_USER_CHIEF,
    password: process.env.DB_PASSWORD_CHIEF,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const seniorPool = new Pool({
    user: process.env.DB_USER_SENIOR,
    password: process.env.DB_PASSWORD_SENIOR,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const detectivePool = new Pool({
    user: process.env.DB_USER_DETECTIVE,
    password: process.env.DB_PASSWORD_DETECTIVE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = {
    chiefPool,
    seniorPool,
    detectivePool
}