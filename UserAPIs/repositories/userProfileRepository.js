var connection = require('../config/db');

exports.updateProfile=(user_id,gender,date_of_birth,bio,city,state,country,linkedin_url,github_url, result)=>{
    var sql = "INSERT INTO user_profiles";
    connection.query(sql, [user_id,gender,date_of_birth,bio,city,state,country,linkedin_url,github_url], result);
}

exports.showAllProfiles=(result)=>{
    var sql = "SELECT * FROM user_profiles";
    connection.query(sql, result);
}
    
