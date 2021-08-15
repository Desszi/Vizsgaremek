const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    time: Date,
    comment: String,
    active: Boolean,
    // businessUser: User =  new User();
    // products: Product[] = [];
    // transport: Transport = new Transport();
    businessUser: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
    transport: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trasport'
    } ],
}, {
    timeStamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
