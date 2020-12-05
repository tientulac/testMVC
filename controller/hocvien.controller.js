const Hocvien = require('../models/hocvien.model');


exports.hocvien_insert = function (req, res) {
    const hv = new Hocvien(
        {
            parent: req.body.parent,
            name: req.body.name,
            birthday: req.body.birthday,
            gender: req.body.gender,
            tel: req.body.tel,
            idcard: req.body.idcard,
            address: req.body.address,
            class: req.body.class,
            status: req.body.status
        }
    );
    hv.save(function (err) {
        if (err) {
            return (err);
        }
        var a = {
            "status": "success",
            " message":"Thanh Cong"
        }
        res.json(a);
        console.log(hv);
    })
};

exports.hocvien_update = function (req, res) {
    Hocvien.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return (err);
        res.send('Student udpated.');
    });
};


exports.hocvien_delete = function (req, res) {
    Hocvien.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        var a = {
            "status": "success",
            " message":"Thanh Cong"
        }
        res.json(a);
    })
};

exports.hocvien_find = function (req, res) {
    Hocvien.find({}, function (err, result) {
        if (err) return (err);
        res.send(result);
    })
};
