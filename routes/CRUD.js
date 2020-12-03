const express = require('express');
const router = express.Router();

const DanhMucModel = require('../models/danhmuc.model');
// const HocVienModel = require('../models/hocvien.model');
// const GiaoVienModel = require('../models/giaovien.model');
// const HocVienController = require('../controller/hocvien.controller');

/* -------------------------------------DANH MUC---------------------------------------------------------------------- */
router.post('/insertDataDanhMuc',function (req,res) {
    DanhMucModel(req,res).insertData(req,res);
});
router.post('/deleteDataDanhmuc',function (req,res) {
    DanhMucModel.deleteData(req,res);
});
router.post('/updateDataDanhMuc',function (req,res) {
    DanhMucModel.updateData(req,res);
});
router.get('/findDataDanhMuc',function (req,res) {
    DanhMucModel.findData(req,res);
});

// /* ------------------------------------- HOC VIEN---------------------------------------------------------------------- */
// router.post('/insertDataHocVien',function (req,res) {
//     HocVienModel.insertData(req,res);
// });
// router.post('/deleteDataHocVien',function (req,res) {
//     HocVienModel.deleteData(req,res);
// });
// router.post('/updateDataHocVien',function (req,res) {
//     HocVienModel.updateData(req,res)
// });
// router.get('/findDataHocVien',function (req,res) {
//     HocVienModel.findData(req,res);
// });


// /* ------------------------------------- GIAO VIEN---------------------------------------------------------------------- */
// router.post('/insertDataGiaoVien',function (req,res) {
//     GiaoVienModel.insertData(req,res);
// });
// router.post('/deleteDataGiaoVien',function (req,res) {
//     GiaoVienModel.deleteData(req,res);
// });
// router.post('/updateGiaoVien',function (req,res) {
//     GiaoVienModel.updateData(req,res);
// });
// router.get('/findDataGiaoVien',function (req,res) {
//     GiaoVienModel.findData(req,res);
// });


module.exports = router;
