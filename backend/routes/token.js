var express = require('express');
var router = express.Router();
var user=require('../model/user');
var sql = require('mssql');
var dbConn=require('../dbconnection');

router.put('/:id',function(req,res,next){

        user.token(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows.recordset);
console.log(rows);
            }
        });
});
module.exports=router;
