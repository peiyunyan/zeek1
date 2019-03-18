var express = require('express');
var router = express.Router();
var Mongo = require('Mongodb-curd');
var baseName = 'user';
var collcationName = 'img';
/* GET home page. */
router.get('/list', function(req, res, next) {
	let {page,pageSize} = req.query;
	pageSize = pageSize * 1;
	page = (page - 1) * pageSize;
  Mongo.find(baseName,collcationName,function(result){
      if(!result){
         res.send({
             code:0,
             mes:"error"
          })
      }else{
          res.send({
             code:1,
             mes:"success",
             data:result
          })
      }
  },{
      skip:page,
      limit:pageSize
  })
});

module.exports = router;
