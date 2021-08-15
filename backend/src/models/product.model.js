const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    storage: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Storage',
        }
    ]
}, {
    timeStamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
