const createError = require('http-errors');
const logger = require('../../config/logger');
const orderService = require('./order.service');

exports.create = (req, res, next) => {
    const { title, body, author } = req.body;
    if (!title || !body || !author) {
        return next(new createError.BadRequest('No title, body or author!'));
    }

    const orderData = { 
        title, 
        body, 
        author 
    };

    return orderService.create(orderData)
        .then( createdorder => {
            res.status(201);
            res.json(createdorder);
        })
        .catch( err => next( new createError.BadRequest(err.message)) );
};

exports.findOne = (req, res, next) => {
    return orderService.findOne(req.params.id)
        .then( order => {
            if (!order) {
                return next(new createError.BadRequest('order is not found!'));
            }
            res.json(order);
        })
        .catch( err => {
            return next(new createError.InternalServerError(err.message));
        });
};
