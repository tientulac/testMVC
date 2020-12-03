const mongoose = require('mongoose');

const hocvienSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    parent: String,
    name: {
        type: String,
        default: 'No Name'
    },
    dateofbirth: String,
    gender: String,
    tel: String,
    cmt: String,
    address: String,
    idclass: String,
    status: String
});

module.exports = mongoose.model('hocvien', hocvienSchema, 'hocvien');
