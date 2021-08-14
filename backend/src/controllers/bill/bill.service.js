const bill = require('../../models/bill.model');

exports.create = billData => {
    const bill = new Bill(billData);
    return bill.save();
};

exports.findAll = () => bill.find().populate('posts');

exports.findOne = id => bill.findById(id).populate('posts');

exports.update = (id, updateData) => bill.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => bill.findByIdAndRemove(id);
