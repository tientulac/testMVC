const HocVienModel = require('../models/config/db/hocvien');

function displayData(req,res) {
    HocVienModel.find({})
        .then(danhmuc => {
            res.render('index', { danhmuc: danhmuc });
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
}



function deleteDataById(req,res) {
    let studentId = req.body._id;
    HocVienModel.findByIdAndDelete(studentId, (err, doc) => {
        if (err) throw err;
        res.send(studentId);
        console.log(studentId);
    })
}

module.exports.displayData = displayData;
module.exports.deleteDataById = deleteDataById;
