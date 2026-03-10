var connection = require('../config/db');

exports.addUser=(first_name, last_name, contact, email, password_hash, result) =>{
    var sql = "INSERT INTO USERS(first_name, last_name, contact, email, password_hash) values(?,?,?,?,?)";
    connection.query(sql, [first_name, last_name, contact, email, password_hash], result);
}
exports.getAllUsers=(result)=>{
    var sql = "SELECT * FROM USERS";
    connection.query(sql, result);
}
exports.updateUser=(user_id,first_name, last_name, contact, email, password_hash, result)=>{
    var sql = "UPDATE users SET first_name=?, last_name=?, contact=?, email=?, password_hash=? WHERE user_id=?";
    connection.query(sql, [first_name, last_name, contact, email, password_hash,user_id], result);
}
exports.deleteUser=(user_id, result)=>{
    var sql = "DELETE FROM users WHERE user_id=?";
    connection.query(sql, [user_id], result);
}
