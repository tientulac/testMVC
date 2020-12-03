const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/admin";
const GiaoVien = require('../models/config/db/giaovien');


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
        let myInsertT = [{
            parent:req.body.parent,
            name: req.body.name,
            dateofbirth: req.body.dateofbirth,
            gender: req.body.gender,
            tel: req.body.tel,
            cmt: req.body.cmt,
            address: req.body.address,
            idclass: req.body.idclass
        }];
        dbo.collection("giaovien")
            .insertMany(myInsertT, function(err, myInsertT) {
                if (err) throw err;
                console.log(myInsertT.result.n + " student(s) inserted");
                db.close();
            });
        notice(req,res);
    });
};

function deleteData(req,res) {
    let _idT = req.body._id;
    GiaoVien.findByIdAndDelete(_idT, (err, doc) => {
        if (err) throw err;
        console.log(_idT)
    })
    notice(req,res);
};

function findData(req,res) {
    MongoClient.connect(url, function(err, db) {
        database(err,db);
        dbo.collection("giaovien")
            .find({})
            .toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
};


function updateData(req,res) {
    let teacherId = req.body._id;
    GiaoVien.findByIdAndUpdate(
        { _id: teacherId },
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

























