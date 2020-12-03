const mongoose = require('mongoose');

const banquanliSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('banquanli', banquanliSchema, 'banquanli');
