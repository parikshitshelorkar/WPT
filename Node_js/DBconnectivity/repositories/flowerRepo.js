var connection = require('../config/db');

exports.addFlower=(id, name, desc, price, quantity, result)=>{
    var sql = "insert into flowers(flower_id, flower_name, description, price, quantity) values(?,?,?,?,?)";
    connection.query(sql, [id, name, desc, price, quantity], result);
}
exports.getAllFlowers=(result)=>{
    var sql = "select * from flowers";
    connection.query(sql, result);
}
    