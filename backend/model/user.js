var sql = require('mssql');
var dbConn=require('../dbconnection');
var bodyParser = require("body-parser");
var randomToken = require('random-token');


var users={


    login:function(user,callback){
 return dbConn.query("select * from user_table where user_email='"+user.user_email+"' and password='"+user.password+"'",callback);
    //return  db.query('select * from UserMaster where UserId=? and password=?',[user.email,user.password],callback);
},
  token:function(id,callback){
    var token = randomToken(16);
    console.log(token);
    dbConn.query("update user_table set user_token='"+token+"' where user_email='"+[id]+"'");
     return dbConn.query("select * from [user_table] WHERE (user_email = '"+[id]+"')",callback);
  },
    deleteuser:function(id,callback)
    {
            return dbConn.query("DELETE FROM [user_table] WHERE (user_email = '"+[id]+"')",callback);
    },
    sign_up:function(user,callback){
       return     dbConn.query("INSERT INTO [user_table] VALUES ('"+user.user_email+"','"+user.user_name+"','"+user.password+"','"+user.user_image+"','"+user.user_token+"')",callback);
        //return db.query('insert into UserMaster values(?,?,?,?,?,?,?,?,?)',[user.email,user.uname,user.password,user.address,user.mobile_no,user.gender,null,null,null],callback);
    },
    getalluser:function(callback){
       return dbConn.query("select * from [user_table]",callback);
    },
    getuser:function(id,token,callback){

      return dbConn.query("select * from [user_table] WHERE (user_email = '"+[id]+"' and  user_token = '"+[token]+"')",callback);
    },

    updateUsers: function(id, user, callback) {


    return    dbConn.query("update user_table set user_email='"+user.user_email+"',password='"+user.password+"',user_token='"+user.user_token+"',user_name='"+user.user_name+"',user_image='"+user.user_image+"' where user_email='"+id+"'",callback);



        //return db.query("update UserMaster set uname=?,gender=?,mobile_no=? where email=?", [User.uname, User.gender, User.mobile,id], callback);
    },
    changePassword: function(id, User, callback) {
        return db.query("update user_table set password=? where user_email=?", [User.password, id], callback);
    }
};

module.exports=users;
