const mysql = require("mysql");
const connection=mysql.createConnection({
    host:"3.3.0.6",
    user:"root",
    password: "Phrog801"
});
connection.connect((error,args) =>{
 if(error){
     console.log(error.code);
 }else{
     console.log("connected");
 }
})




