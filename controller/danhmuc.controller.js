const DanhMucModel = require('../models/config/db/danhmuc');

function displayData(req,res) {
    DanhMucModel.find({})
        .then(danhmuc => {
            res.render('index', { danhmuc: danhmuc });
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
}



function deleteDataById(req,res) {
    let productId = req.body._id;
    DanhMucModel.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(productId);
        console.log(productId);
    })
}

module.exports.displayData = displayData;
module.exports.deleteDataById = deleteDataById;
