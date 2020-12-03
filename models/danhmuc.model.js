const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/admin";
const DanhMuc = require('../models/config/db/danhmuc');

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
        let myInsert = [{
            parent:req.body.parent,
            name: req.body.name
        }];
        dbo.collection("danhmuc")
            .insertMany(myInsert, function(err, myInsert) {
                if (err) throw err;
                console.log(myInsert.result.n + " document(s) inserted");
                db.close();
            });
        notice(req,res);
    });
};


function deleteData(req,res) {
    let _id = req.body._id;
    DanhMuc.findByIdAndDelete(_id, (err, doc) => {
        if (err) throw err;
        console.log(_id);
    })
    notice(req,res);
};

function findData(req,res) {
    MongoClient.connect(url, function(err, db) {
        database(err,db);
        dbo.collection("danhmuc")
            .find({})
            .toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
};


function updateData(req,res) {
    let productId = req.body._id;
    DanhMuc.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.name } },
        { useFindAndModify: false })
        .then(doc => {
            notice(req,res);
        })
}

module.exports.insertData = insertData;
module.exports.deleteData = deleteData;
module.exports.findData = findData;
module.exports.updateData = updateData;

























