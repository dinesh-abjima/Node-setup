const tedious=require('tedious')
var Connection = require('tedious').Connection; 
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;
var config = {  
    server: 'localhost',  //update me
    authentication: {
        type: 'default',
        options: {
            trustedConnection:true,
            // userName: 'your_username', //update me
            // password: 'your_password'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'Northwind',  //update me
        trustedConnection:true,
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err:any) {  
    if(err){
        console.warn(err);
    }
    else{
        console.log("Connected");  
    }
});

function executeStatement(){

}

export default connection;