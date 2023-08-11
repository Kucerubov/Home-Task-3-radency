import express from 'express';
import router from "./routes";
const sequelize = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use('/api', router);

const PORT = process.env.API_PORT;
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    }catch (e){
        console.log(e);
    }
}

start();