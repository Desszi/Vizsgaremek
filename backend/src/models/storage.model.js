const mongoose = require('mongoose');

const StorageSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timeStamps: true
});

module.exports = mongoose.model('Storage', StorageSchema);
