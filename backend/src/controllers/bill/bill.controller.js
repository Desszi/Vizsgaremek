const express = require('express');
const createError = require('http-errors');

const billService = require('./bill.service');

exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newBill = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return billService.create(newBill)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return billService.findAll()
        .then( people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return billService.findOne(req.params.id)
        .then( bill => {
            if (!bill) {
                return next(new createError.NotFound("bill is not found"));
            }
            return res.json(bill);
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
    return billService.update(req.params.id, update)
        .then(bill => {
            res.json(bill);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return billService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
