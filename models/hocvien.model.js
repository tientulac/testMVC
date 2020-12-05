const mongoose = require('mongoose');

const HocvienSchema = mongoose.Schema({
    parent: {type:String},
    name: {type:String},
    birthday: {type:Date},
    gender: {type:String},
    tel: {type:String},
    idcard: {type:String},
    address: {type:String},
    class: {type:String},
    condition: {type:String},
});

module.exports = mongoose.model('hocvien', HocvienSchema, 'hocvien');
