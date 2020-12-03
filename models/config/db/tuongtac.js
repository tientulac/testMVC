const mongoose = require('mongoose');

const tuongtacSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
});

module.exports = mongoose.model('tuongtac', tuongtacSchema, 'tuongtac');
