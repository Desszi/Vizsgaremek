const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors')
mongoose.Promise = global.Promise;
//prklbmrcdsz

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swager.yaml');

const { host } = config.get('database');
mongoose
.connect(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        require('./seed/seeder');
        logger.info('MongoDB connection has been established successfully.') 
    }) 
    .catch( err => {
        logger.error(err);
        process.exit();
    });

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     next();
// });
app.use(cors())
app.use(morgan('combined', {stream: logger.stream}));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/bills', authenticateJwt, adminOnly, require('./controllers/bill/bill.routes'));
app.use('/orders', authenticateJwt, adminOnly, require('./controllers/order/order.routes'));
app.use('/products', authenticateJwt, adminOnly, require('./controllers/product/product.routes'));
app.use('/storages', authenticateJwt, adminOnly, require('./controllers/storage/storage.routes'));
app.use('/users', authenticateJwt, require('./controllers/user/user.routes'));
app.use('/transports', authenticateJwt, adminOnly, require('./controllers/transport/transport.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use( (err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
