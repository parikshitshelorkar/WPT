
var flowersRepo =require('../repositories/flowerRepo');

exports.addFlower=(flower_id, flower_name, description, values, quantity, result)=>{
    flowersRepo.addFlower(flower_id, flower_name, description, values, quantity, result);
};

exports.getAllFlowers=(result)=>{
    flowersRepo.getAllFlowers(result);
}


// exports.deleteCredential=(id,result)=>{
//  flowersRepo .deleteCredential(id,result);
// }


// exports.updateCredential=(username,password,id,result)=>{
//  flowersRepo .updateCredential(username,password,id,result);
// }