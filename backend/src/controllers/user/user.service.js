const user = require('../../models/user.model');

exports.create = userData => {
    const user = new User(userData);
    return user.save();
};

exports.findAll = () => user.find().populate('orders');

exports.findOne = id => user.findById(id).populate('orders');

exports.update = (id, updateData) => user.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => user.findByIdAndRemove(id);
