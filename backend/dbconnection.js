// var mysql=require('mysql');

// // const cnn = new sql.ConnectionPool({ host:'192.168.200.5',
// // user:'sa',
// // password:'sihl$123',
// // database:'SampleAngular'
// //  })

// var cnn=mysql.createPool({



//     host:'192.168.200.5',
//     user:'sa',
//     password:'sihl$123',
//     database:'SampleAngular'

//    });
//    console.log("db");
//     module.exports=cnn;

var sql = require('mssql');
//2.
var config = {
    server: '192.168.200.5',
    database: 'myapp',
    user: 'sa',
    password: 'sihl$123',
    port: 1433
};

var dbConn = new sql.ConnectionPool(config);

    dbConn.connect();
    //6.
    var request = new sql.Request(dbConn);



module.exports=request;
