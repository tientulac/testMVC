const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/admin";
const HocVien = require('../models/config/db/hocvien');


function notice(req,res) {
    var a = {
        "status": "success",
        " message":"Thanh Cong"
    }
    res.json(a);
}

function database(err,db) {
    if (err) throw err;
    dbo = db.db("admin");
}

function insertData(req,res) {
    MongoClient.connect(url, function(err, db) {
        database(err,db);
        let myInsertS = [{
            parent:req.body.parent,
            name: req.body.name,
            dateofbirth: req.body.dateofbirth,
            gender: req.body.gender,
            tel: req.body.tel,
            cmt: req.body.cmt,
            address: req.body.address,
            idclass: req.body.idclass,
            status: req.body.status
        }];
        dbo.collection("hocvien")
            .insertMany(myInsertS, function(err, myInsertS) {
                if (err) throw err;
                console.log(myInsertS.result.n + " student(s) inserted");
                db.close();
            });
        notice(req,res);
    });
};

function deleteData(req,res) {
    let _idS = req.body._id;
    HocVien.findByIdAndDelete(_idS, (err, doc) => {
        if (err) throw err;
        console.log(_idS)
    })
    notice(req,res);
};

function findData(req,res) {
    MongoClient.connect(url, function(err, db) {
        database(err,db);
        dbo.collection("hocvien")
            .find({})
            .toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
};


function updateData(req,res) {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/')
        })
};

module.exports.insertData = insertData;
module.exports.deleteData = deleteData;
module.exports.findData = findData;
module.exports.updateData = updateData;

























