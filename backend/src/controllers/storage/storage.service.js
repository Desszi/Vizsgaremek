const storage = require('../../models/storage.model');

exports.create = storageData => {
    const storage = new Storage(storageData);
    return storage.save();
};

exports.findAll = () => storage.find().populate('posts');

exports.findOne = id => storage.findById(id).populate('posts');

exports.update = (id, updateData) => storage.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => storage.findByIdAndRemove(id);
