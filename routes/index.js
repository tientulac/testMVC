var express = require('express');
var router = express.Router();
const DanhMucController = require('../controller/danhmuc.controller');
const DanhMucModel = require('../models/danhmuc.model');



/* -------------------------------------DANH MUC---------------------------------------------------------------------- */
router.get('/client',function (req,res) {
  res.render('clientPage');
})
/* GET All product */
router.get('/',function (req,res) {
  DanhMucController.displayData(req,res)
});
/* GET Add Product page */
router.get('/add-product', (req, res) => {
  res.render('add-product');
});
/* ADD productName */
router.post('/add/success',function (req,res) {
  DanhMucModel.insertData(req,res);
});
/* GET Delete Product page */
router.get('/delete-product', (req, res) => {
  res.render('delete-product');
});
/* DELETE productId */
router.post('/delete/success',function (req,res) {
  DanhMucController.deleteDataById(req,res);
});
/* GET Update Product page */
router.get('/update-product',(req, res) => {
  res.render('update-product');
})
/* UPDATE productName */
router.post('/update/success',function (req,res) {
  DanhMucModel.updateData(req,res);
});


module.exports = router;
