const mongoose = require('mongoose');

const giaovienSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('giaovien', giaovienSchema, 'giaovien');
