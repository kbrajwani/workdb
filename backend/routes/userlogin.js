var express = require('express');
var router = express.Router();
var user=require('../model/user');
var sql = require('mssql');
var dbConn=require('../dbconnection');

router.post('/',function(req,res,next){

        user.login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows.recordset);
console.log(rows);
            }
        });
});

router.delete('/:id',function(req,res,next){

    user.deleteuser(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){

    user.updateUsers(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.get('/:id/:token',function(req,res,next){
    user.getuser(req.params.id,req.params.token,function(err,rows){
        res.json(rows.recordset);

    });

});
module.exports=router;
