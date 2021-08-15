const mongoose = require('mongoose');

const TransportSchema = mongoose.Schema({
    travelBy: String,
    place: {
        type: String,
        required: true,
    }, //destinationplace
    trustMember: [
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
    startStorage: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Storage',
        }
    ],
}, {
    timeStamps: true
});

module.exports = mongoose.model('Transport', TransportSchema);
