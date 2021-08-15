const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date,
    birthPlace: String,
    email: {
        type: String,
        required: true,
    },
    address: String,
    active: Boolean,
    businessRelationship: String,
    orders: [
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Order',
        }
    ]
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);
