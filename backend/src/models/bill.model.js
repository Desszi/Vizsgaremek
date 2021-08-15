const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    } ,
    grandTotal: {
        type: Number,
        required: true,
    },
    paid: {
        type: Boolean,
        required: true
    },
    customer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    products: [
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Product',
        }
    ],
}, {
    timeStamps: true
});

module.exports = mongoose.model('Bill', BillSchema);
