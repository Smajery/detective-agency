require('dotenv').config();
const express = require('express');
const sequelize = require('./sequelize_db');
const models = require('./models/models');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const router = require('./router/index');
const errorMiddleware = require('./middleware/error-middleware');
const path = require('path')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

//Error processing, Last Middleware
app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e)
    }
};

start()
