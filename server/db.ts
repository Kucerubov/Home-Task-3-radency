const {Sequelize} = require('sequelize');

const DB_NAME = 'database';
const DB_USER ='root';
const DB_PASSWORD ='root';
const DB_HOST: string = '172.17.0.1';
const DB_PORT: number = 5433;

module.exports = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT
    }
)