const express = require('express');
const createError = require('http-errors');

const billService = require('./bill.service');

exports.create = (req, res, next) => {
    const { name, grandTotal, paid, customer, products } = req.body;
    if (!name || !grandTotal || !paid || !customer) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newBill = {
        name,
        grandTotal,
        paid,
        customer,
        products: products || []
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
                return next(new createError.NotFound("Bill is not found"));
            }
            return res.json(bill);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, grandTotal, paid, customer, products } = req.body;
    if (!name || !grandTotal || !paid || !customer) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

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
