var userRepo=require('../repositories/userRepository');

exports.addUser=( first_name, last_name, contact, email, password_hash,  result)=>{
    userRepo.addUser( first_name, last_name, contact, email, password_hash, result);
};

exports.getAllUsers=(result)=>{
    userRepo.getAllUsers(result);
}
exports.updateUser=(user_id,first_name, last_name, contact, email, password_hash, result)=>{
    userRepo.updateUser(user_id,first_name, last_name, contact, email, password_hash, result);
}
exports.deleteUser=(user_id, result)=>{
    userRepo.deleteUser(user_id, result);
}
