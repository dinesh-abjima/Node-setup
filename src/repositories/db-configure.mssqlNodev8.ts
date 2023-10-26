import connection from "./tedious.connections";

var config={
    server:'localhost',
    database:'Northwind',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true,
    }
}

// const sql=require('mssql');

// function dbConnection(){
//     const db=sql.connect(config,function(err:any){
//         if(err)
//         throw err;
//     console.log('db connected')
//     })
// }
connection.connect();


export default dbConnection;