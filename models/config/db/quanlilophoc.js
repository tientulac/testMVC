const mongoose = require('mongoose');

const quanlilophocSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('quanlilophoc', quanlilophocSchema, 'quanlilophoc');
