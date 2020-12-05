const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// required: true === NOT NULL
let DanhmucSchema = new Schema({
    name: {type: String, required: true, max: 100}
});

// Export the model
module.exports = mongoose.model('danhmuc', DanhmucSchema,"danhmuc");
