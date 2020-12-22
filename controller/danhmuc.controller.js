const Danhmuc = require('../models/danhmuc.model');

exports.danhmuc_insert = function (req, res) {
    const dm = new Danhmuc(
        {
            name: req.body.name
        }
    );
    dm.save(function (err) {
        if (err) {
            return (err);
        }
        var a = {
            "status": "success",
            " message":"Thanh Cong"
        }
        res.json(a);
        console.log(dm);
    })
};

exports.danhmuc_update = function (req, res) {
    Danhmuc.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return (err);
        res.send('Product udpated.');
    });
};

exports.danhmuc_delete = function (req, res) {
    Danhmuc.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        var a = {
            "status": "success",
            " message":"Thanh Cong"
        }
        res.json(a);
    })
};

exports.danhmuc_find = function (req, res) {
    Danhmuc.find({}, function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};
