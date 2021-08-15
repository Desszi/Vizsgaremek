const storage = require('../../models/storage.model');

exports.create = storageData => {
    const storage = new Storage(storageData);
    return storage.save();
};

exports.findAll = () => storage.find().populate('products');

exports.findOne = id => storage.findById(id).populate('products');

exports.update = (id, updateData) => storage.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => storage.findByIdAndRemove(id);
