const transport = require('../../models/transport.model');

exports.create = transportData => {
    const transport = new Transport(transportData);
    return transport.save();
};

exports.findAll = () => transport.find().populate('posts');

exports.findOne = id => transport.findById(id).populate('posts');

exports.update = (id, updateData) => transport.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => transport.findByIdAndRemove(id);
