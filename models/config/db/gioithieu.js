const mongoose = require('mongoose');

const gioithieuSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('gioithieu', gioithieuSchema, 'gioithieu');
