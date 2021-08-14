const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
}, {
    timeStamps: true
});

module.exports = mongoose.model('Bill', BillSchema);
