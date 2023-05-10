require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const router = require('./router/index');
const errorMiddleware = require('./middleware/error-middleware');
const userService = require('./service/user-service');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

start()
    .catch(
        e => console.error(e)
    );
