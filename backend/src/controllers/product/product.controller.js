const express = require('express');
const createError = require('http-errors');

const productService = require('./product.service');

exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newpProduct = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return productService.create(newpProduct)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return productService.findAll()
        .then( people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return productService.findOne(req.params.id)
        .then( product => {
            if (!product) {
                return next(new createError.NotFound("product is not found"));
            }
            return res.json(product);
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
    return productService.update(req.params.id, update)
        .then(product => {
            res.json(product);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return productService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
