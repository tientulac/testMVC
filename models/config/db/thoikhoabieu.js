const mongoose = require('mongoose');

const thoikhoabieuSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('thoikhoabieu', thoikhoabieuSchema, 'thoikhoabieu');
