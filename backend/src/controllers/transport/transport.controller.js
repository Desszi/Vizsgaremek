const express = require('express');
const createError = require('http-errors');

const transportService = require('./transport.service');

exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newTransport = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return transportService.create(newTransport)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return transportService.findAll()
        .then( people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return transportService.findOne(req.params.id)
        .then( transport => {
            if (!transport) {
                return next(new createError.NotFound("transport is not found"));
            }
            return res.json(transport);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };
    return transportService.update(req.params.id, update)
        .then(transport => {
            res.json(transport);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return transportService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
