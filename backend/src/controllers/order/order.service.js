const order = require('../../models/order.model');

exports.create = orderData => {
    const order = new Order(orderData);
    return order.save();
};

exports.findAll = () => order.find().populate('businessUser').populate('products').populate('transport');

exports.findOne = id => order.findById(id).populate('businessUser').populate('products').populate('transport');

exports.update = (id, updateData) => order.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => order.findByIdAndRemove(id);
