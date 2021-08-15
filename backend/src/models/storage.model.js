const mongoose = require('mongoose');

const StorageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    opened: {
        type: Boolean,
        required: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
}, {
    timeStamps: true
});

module.exports = mongoose.model('Storage', StorageSchema);
