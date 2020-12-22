const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const danhmuc_controller = require('../controller/danhmuc.controller');
const hocvien_controller = require('../controller/hocvien.controller');


/* -------------------------------------DANH MUC---------------------------------------------------------------------- */
// a simple test url to check that all of our files are communicating correctly.
router.post('/insertDataDanhmuc',function (req,res) {
    danhmuc_controller.danhmuc_insert(req,res);
});
router.get('/findDataDanhmuc',function (req,res) {
    danhmuc_controller.danhmuc_find(req,res);
});
router.put('/updateDataDanhmuc/:id',function (req,res) {
    danhmuc_controller.danhmuc_update(req,res);
});
router.delete('/deleteDataDanhmuc/:id',function (req,res) {
    danhmuc_controller.danhmuc_delete(req,res);
});

/* -------------------------------------HOC VIEN---------------------------------------------------------------------- */
router.post('/insertDataHocvien',function (req,res) {
    hocvien_controller.hocvien_insert(req,res);
});
router.get('/findDataHocvien',function (req,res) {
    hocvien_controller.hocvien_find(req,res);
});
router.put('/updateDataHocvien/:id',function (req,res) {
    hocvien_controller.hocvien_update(req,res);
});
router.delete('/deleteDataHocvien/:id',function (req,res) {
    hocvien_controller.hocvien_delete(req,res);
});
router.get('/findDataByIdHocvien/:id',function (req,res) {
    hocvien_controller.hocvien_findById(req,res)
})

module.exports = router;
