const product = require('../../models/product.model');

exports.create = productData => {
    const product = new Product(productData);
    return product.save();
};

exports.findAll = () => product.find().populate('storage');

exports.findOne = id => product.findById(id).populate('storage');

exports.update = (id, updateData) => product.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => product.findByIdAndRemove(id);
