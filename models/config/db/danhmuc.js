const mongoose = require('mongoose');

const danhmucSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    }
});

module.exports = mongoose.model('danhmuc', danhmucSchema, 'danhmuc');
